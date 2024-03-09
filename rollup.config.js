import dts from 'rollup-plugin-dts';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const configs = [
  {
    input: 'src/index.tsx',
    plugins: [
      external({ includeDependencies: true }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extract: true,
        modules: {
          generateScopedName: '[local]',
        },
      }),
      terser(),
    ],
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        sourcemap: false,
        interop: 'auto',
        preserveModules: true,
      },
      {
        dir: 'dist/es',
        format: 'esm',
        sourcemap: false,
        interop: 'auto',
        preserveModules: true,
      },
    ],
  },
  {
    input: 'src/index.tsx',
    plugins: [dts()],
    output: [{ dir: 'dist/types', format: 'esm', preserveModules: true }],
    external: [/\.css$/],
  },
];

export default configs;
