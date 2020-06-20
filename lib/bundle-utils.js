import path from "path";
import chalk from "chalk";

export function getCodeAndDependencies(bundle, name) {
  console.log(name);
  const chunk = findChunkWithName(bundle, name);
  const output = [];
  const crawlDependencies = new Set([chunk.fileName]);

  for (const fileName of crawlDependencies) {
    const chunk = bundle[fileName];
    output.push(chunk.code);
    for (const dep of chunk.imports) {
      crawlDependencies.add(dep);
    }
  }

  delete bundle[chunk.fileName];
  return output.join('\n');
}

export function findChunkWithName(bundle, name) {
  return Object.values(bundle).find((desc) => (desc.facadeModuleId || '').endsWith(name));
}

export function findAssetWithName(bundle, name) {
  const parsedName = path.parse(name);

  const asset = Object.values(bundle).find(desc => {
    if (desc.type !== 'asset') return false;
    const parsedBundleName = path.parse(desc.fileName);
    if (parsedBundleName.ext !== parsedName.ext) return false;
    if (!parsedBundleName.name.startsWith(parsedName.name)) return false;
    const expectedHash = parsedBundleName.name.slice(parsedName.name.length + 1); // +1 to ignore DASH or DOT in filename
    return /^[0-9a-f]+$/.test(expectedHash);
  });

  if (!asset) throw new Error(`findAssetWithName: Cannot find ${name}`);

  return asset;
}