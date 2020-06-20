export default function transformPlugin(callback) {
  return {
    name: "transform-plugin",
    async generateBundle(_, bundle) {
      for (const bundleEntry of Object.values(bundle)) {
        if (!bundleEntry.type === 'asset' || !bundleEntry.isEntry) continue;

        const newBundleEntry = await callback(bundleEntry);
        if (!newBundleEntry) continue;

        delete bundle[bundleEntry.fileName];
        bundle[newBundleEntry.fileName] = newBundleEntry;
      }
    }
  };
}
