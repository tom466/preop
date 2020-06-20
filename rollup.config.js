import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import rimraf from 'rimraf';

import assetPlugin from './lib/asset-plugin.js';
import createHTMLPlugin from './lib/create-html.js';
import transformPlugin from './lib/transform-plugin.js';
import resourceListPlugin from './lib/resource-list-plugin.js';

import pkg from './package.json';

const isProduction = process.env.BUILD === 'production';
console.log(isProduction, process.env.BUILD);

rimraf.sync('dist');

export default [
  {
    input: {
      main: 'src/main.js', // change ENTRY_NAME in create-html if changing name, also change property name here and workerPlugin below!
    },
    preserveEntrySignatures: false,
    output: {
      entryFileNames: '[name].[hash].js',
      assetFileNames: 'assets/[name].[hash][extname]',
      dir: 'dist/',
      format: 'es',
      plugins: [],
      //sourcemap: isProduction ? false : true,
      sourcemap: true, // FOR DEVELOPMENT ONLY
    },
    plugins: [
      json(),
      nodeResolve(), // resolve external node modules
      postcss({
        minimize: true,
        extract: true,
      }),
      assetPlugin({
        initialAssets: [],
      }),
      transformPlugin((bundle) => {
        if (bundle.fileName.endsWith('.json')) bundle.source = JSON.stringify(JSON.parse(asset.source)); // minify
      }),
      resourceListPlugin(),
      isProduction ? terser({ ecma: '2016' }) : '',
      createHTMLPlugin(),
    ],
  },
];
