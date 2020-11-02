# Truco Live

WebRTC implementation to play truco for real, directly on your browser.

## Table of contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone](#clone)
  - [Installing dependencies](#installing-dependencies)
  - [Running the application locally](#running-the-application-locally)
  - [Building the code](#building-the-code)
  - [Testing locally](#testing-locally)
- [Linting](#linting)
- [Contributing](#contributing)

## Getting Started

To get started developing for this projects, please follow the next steps:

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)

### Setting Visual Studio Code

If you're working with VSC, please follow [these instructions](https://open-wc.org/developing/ide.html#visual-studio-code) to enable lintering, prettify your code and install the LitElement plugin.

### Clone

Clone a copy of the repo:

```bash
git clone https://github.com/adpinola/truco-live.git
```

Change to the project directory:

```bash
cd truo-live
```

### Installing dependencies

If you don't have the modules installed, execute this inside the project directory

```bash
cd frontend
npm install
```

### Running the application locally

To run the project locally for development purposes, you can run

```bash
npm run start
```

This will open a local server at 8080 port with `webpack-dev-server` actively watching for changes in the code. When you change something, the page will refresh automatically. You may press Ctrl + C at any time in your terminal to terminate the watcher.

### Building the code

To build the code and get a bundled JS file, run

```bash
npm run build
```

This will create a `dist` folder which contains:

- `index.js`: the complete application bundled in a JavaScript file which can be inserted with a `<script>` tag in any other HTML.
- `index.html`: the EJS file that is in the `public` folder with a `script` tag (including the previously mentioned file) replacing this

### Testing locally

This application uses Cypress to do the end-to-end testing. To open the Cypress Test Runner, run

```bash
npm run cypress:test
```

This will open a window with a list of every .spec file that is in the `integration` folder. If you click on one of them, it will open another window of the selected browser and start its test. You can visually track every step of the testing process and get snapshots.

To run the tests in "headless" mode (without the visual interface), run the following

```bash
npm run cypress:all
```

You will get every result directly in the terminal. This command is useful for automatic tests prior to automatic deploys (as used in the `amplify.yml` file), but you can execute is as a normal npm script too.

To run the tests and generate an HTML report, run the following

```bash
npm run cypress:headless
```

In addition to getting all the results directly in the terminal, it will also generate the coverage reports, located on `/coverage/lcov-report`


NOTE: Before `npm run cypress:test`, it's very important to have Cypress installed via `npm install` because that is not going to only install it in the project: it will also generate files in your system (if there was not a previous installation). If you try to open Cypress before installing it, you'll maybe get errors when installing and then opening it again. To fix this, follow these steps:

- On Windows
  - Go to `C:\Users\[your user]\AppData\Local\Cypress\Cache`
  - Find the folder that is called the version you installed and rename it to anything else (add a random letter, for instance)
  - Try to `npm install` again
  - Try to run Cypress again with `npm run cypress:test`

## Linting

This project comes with two tools for checking code styles and syntax errors: [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). Both can verify and also fix some code issues automatically.

To check your code with both tools, you have to run

```bash
npm run linter
```

To auto-fix the auto-fixable issues with both tools, execute this

```bash
npm run format
```
You can run the checkers and fixers separately.

Checking with ESLint

```bash
npm run lint:eslint
```

Checking with Prettier

```bash
npm run lint:prettier
```

Auto-fixing with ESLint

```bash
npm run format:eslint
```

Auto-fixing with Prettier

```bash
npm run format:prettier
```

In fact, what `npm run linter` and `npm run format` do is just executing the ESLint checker (or fixer) and then the Prettier checker (or fixer)

## Contributing

If you feel to contribute to this project, please check out our [contributing guidelines](./CONTRIBUTING.md) before opening a pull request.
