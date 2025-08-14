import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import { dts } from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom', 'clsx'],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.lib.json',
        exclude: ['**/__tests__/**', '**/*.test.*', '**/*.spec.*'],
      }),
      postcss({
        extract: 'styles.css',
        modules: true,
        use: ['sass'],
        minimize: true,
      }),
      json(),
      terser(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: ['react', 'react-dom', 'clsx'],
    plugins: [
      dts({
        exclude: ['**/*.css', '**/*.scss', '**/*.module.scss'],
      }),
    ],
  },
];
