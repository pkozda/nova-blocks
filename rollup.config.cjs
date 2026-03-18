const vue = require('rollup-plugin-vue')
const typescript = require('@rollup/plugin-typescript')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const postcss = require('rollup-plugin-postcss')
const esbuild = require('rollup-plugin-esbuild').default

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/nova-blocks.umd.js',
      name: 'NovaBlocks',
      format: 'umd',
      globals: {
        vue: 'Vue',
      },
      sourcemap: true,
    },
  ],
  external: ['vue'],
  plugins: [
    resolve(),
    vue(),
    // transpile TS in Vue SFC virtual modules (e.g. *.vue?vue&type=script&lang.ts)
    esbuild({
      include: [/\.ts$/, /\.tsx$/, /.*\.vue\?vue&type=script&lang\.ts$/],
      target: 'es2020',
    }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/types',
      compilerOptions: {
        // our base tsconfig is for tooling (noEmit); Rollup needs TS stripped
        noEmit: false,
      },
      include: [
        'src/**/*.ts',
        'src/**/*.tsx',
        // rollup-plugin-vue uses virtual modules with query strings for TS script blocks
        /.*\.vue\?vue&type=script&lang\.ts$/,
      ],
    }),
    commonjs(),
    postcss({ extract: true }),
  ],
}

