import merge from 'deepmerge';
import { createSpaConfig } from '@open-wc/building-rollup';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import builtins from 'builtin-modules';
import replace from '@rollup/plugin-replace';
import litcss from 'rollup-plugin-lit-css';
const envVariables = require('./.env');

const baseConfig = createSpaConfig({
  developmentMode: process.env.ROLLUP_WATCH === 'true',
  injectServiceWorker: false,
});

export default merge(baseConfig, {
  input: './index.html',
  output: {
    entryFileNames: 'index.min.js',
    format: 'iife',
  },
  plugins: [
    babel({
      presets: ['@babel/preset-env'],
      babelHelpers: 'bundled',
    }),
    litcss({ uglify: true }),
    nodeResolve(),
    commonjs(),
    replace(envVariables),
    terser(),
  ],
  external: builtins,
});
