module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['**/*.{ts,tsx,js,jsx}'],
      excludedFiles: [
        '**/*.d.ts',
        '**/*.stories.ts',
        '{__tests__,__mocks__}/**/*.{ts,tsx,js,jsx}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  rules: {
    semi: [2, 'always'],
    '@typescript-eslint/semi': 'off',
    'import/no-unresolved': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
  ignorePatterns: ['.eslintrc.cjs', '*.config.js'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};
