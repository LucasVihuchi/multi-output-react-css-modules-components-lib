# Multi Output React Components Library

This project was created as a TypeScript boilerplate for ESM + CJS React components libaries. After build, it exposes each component individually, enabling tree shaking and reducing consumption bundle size.

- **TypeScript** -> 4.x
- **JavaScript Framework** -> React
- **CSS** -> CSS Modules
- **Build Library** -> Rollup
- **Components Preview** -> Storybook
- **Code Formatting** -> Eslint
- **Tests** -> Jest + RTL

## Requirements

First, make sure to attend to those requirements before running any command:

1. [Node v20](https://nodejs.org/en)
2. [Yarn v4](https://yarnpkg.com/)

## How to run

To run this project's storybook, run the following commands:

```sh
yarn
yarn storybook
```

## Build

To build this project using Rollup, run the following commands:

```sh
yarn
yarn build
```

After completion, check `dist` folder for builded files. After that, you can run...

```sh
yarn publish
```

...to pubish your package on npm's or yarn's registries. You can also publish on a private registry by using [npmPublishRegistry](https://yarnpkg.com/configuration/yarnrc#npmPublishRegistry) option.

## Available scripts

Other useful commands:

```sh
yarn test -> # Tests with coverage
yarn test:update -> # Tests updating snapshots
yarn lint -> # Verify code formatting
yarn lint -> # Fix code formatting
```
