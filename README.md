# Multi Output React Components Library

This project was created as a boilerplate for ESM + CJS React components libaries. After build, it exposes each component individually, enabling tree shaking and reducing consumption bundle size.

- **JavaScript Framework** -> React
- **CSS** -> CSS Modules
- **Build Library** -> Rollup
- **Components Preview** -> Storybook
- **Code Formatting** -> Eslint
- **Tests** -> Jest + RTL

## How to run

### Requirements

First, make sure to attend to those requirements.

1. [Node v20](https://nodejs.org/en)
2. [Yarn v4](https://yarnpkg.com/)

To run this project's storybook, run the following commands:

```sh
yarn
yarn storybook
```

## Available scripts

Other useful commands:

```sh
yarn build -> # Build project
yarn test -> # Tests with coverage
yarn test:update -> # Tests updating snapshots
yarn lint -> # Verify code formatting
yarn lint -> # Fix code formatting
```
