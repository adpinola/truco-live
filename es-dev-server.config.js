const { wrapRollupPlugin } = require('es-dev-server-rollup');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');
const litcss = require('es-dev-server-import-css');
const envVariables = require('./.env');

module.exports = {
  port: 8000,
  watch: true,
  nodeResolve: true,
  appIndex: 'index.html',
  plugins: [wrapRollupPlugin(commonjs()), wrapRollupPlugin(replace(envVariables)), litcss()],
  babel: true,
};
