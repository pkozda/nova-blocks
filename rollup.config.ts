import vue from 'rollup-plugin-vue'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true
        },
        {
            file: 'dist/index.mjs',
            format: 'es',
            sourcemap: true
        },
        {
            file: 'dist/nova-blocks.umd.js',
            name: 'NovaBlocks',
            format: 'umd',
            globals: {
                vue: 'Vue'
            },
            sourcemap: true
        }
    ],
    external: ['vue'],
    plugins: [
        resolve(),
        vue(),
        typescript({ tsconfig: './tsconfig.json', declaration: true, declarationDir: 'dist/types' }),
        commonjs(),
        postcss({ extract: true })
    ]
}
