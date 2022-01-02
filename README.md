# IF.Portfolio

This repository presents my Portfolio.
<br /><br />
[![Netlify Status](https://api.netlify.com/api/v1/badges/35baf156-9c41-43c0-a428-531a51e2a594/deploy-status)](https://app.netlify.com/sites/if-furdzik-portfolio/deploys)

---

## Table of Contents

- [Development](#development)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Running](#running)
  - [Build](#build)
  - [Updating packages](#updating-packages)
  - [Test & linters](#test--linters)
- [Environments](#environments)
- [Browsers](#browsers-support)
- [Tests](#tests)
- [Links](#links)

---

## Development

This app is base on [Create React App](https://create-react-app.dev/).

### Requirements

- NodeJS >= v10.14.1
- npm >= 6.4.1

### Installation

1. Clone project from GitHub repository `git clone git@github.com:furdzik/IF.Portfolio.git` or `git clone https://github.com/furdzik/IF.Portfolio.git`
2. Add alias to your hosts file: 127.0.0.1 if.portfolio.local
3. `cd IF.Portfolio`
4. Install dependencies `npm install`

### Running

Run

```sh
npm start
```

for starting dev server. Navigate to `http://if.portfolio.local:2021/`. The app will automatically reload if you change any of the source files.

### Build

Run

```sh
npm run build
```

to build project.

\* The build artifacts will be stored in the `build/` directory.

To run project locally run

```sh
cd build
```

### Updating packages

Package.json is strictly connected with package-lock.json. Updating package should have reflection in package-lock. You should also take care of installing exactly specified package version (see package.json [suffix](https://docs.npmjs.com/files/package.json#dependencies))

### Test & linters

This project used tools such as:

- [Jest](https://jestjs.io/)
- [Testing library for React](https://testing-library.com/docs/react-testing-library/intro/)

for unit testing.

Run

```sh
npm run lint
```

to execute code style analysis (Eslint, SASS Lint etc.).

Run

```sh
npm test
```

to execute the unit tests via Jest

\* unit tests and linters run on every `git push` (add `--no-validate` flag to omit it - nor recommended)

## Environments

| Environment | Url                                                                      |
|-------------|--------------------------------------------------------------------------|
| Local       | [http://localhost:1217/](http://localhost:1217/) |


## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| Edge| last version| last version| last version| last version

## Tests

The whole logic of Redux should be covered by tests and if I had continued with this project I would have done it at the beginning.

## Links

- [Style guide](docs/STYLEGUIDE.md)
- [Project structure](docs/PROJECT_STRUCTURE.md)
