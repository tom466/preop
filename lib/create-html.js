import { readFileSync } from "fs";
import ejs from "ejs";

import pkg from "../package.json";

import {
  findChunkWithName,
  findAssetWithName,
  getCodeAndDependencies
} from "./bundle-utils.js";

const TEMPLATE_PATH = 'src/index.ejs';
const FILENAME = 'index.html';
const ENTRY_NAME = 'main';
const TITLE = 'Pre-Op';
const THEME_COLOR = '#00000';

function generateShell(bundle, templatePath) {
  const template = readFileSync(templatePath, { encoding: "utf8" });

  const html = ejs.render(template, {
    title: TITLE,
    version: pkg.version,
    description: pkg.description,
    keywords: pkg.keywords,
    themeColor: THEME_COLOR,
    style: `/${findAssetWithName(bundle, `${ENTRY_NAME}.css`).fileName}`,
    script: `/${findChunkWithName(bundle, `${ENTRY_NAME}.js`).fileName}`,
  });
  return html;
}

export default function createHTMLPlugin() {
  return {
    name: "create-html-plugin",
    buildStart() {
      this.addWatchFile(TEMPLATE_PATH);
    },
    async generateBundle(options, bundle) {
      this.emitFile({
        type: 'asset',
        fileName: FILENAME,
        source: await generateShell(bundle, TEMPLATE_PATH),
      });
    }
  };
}