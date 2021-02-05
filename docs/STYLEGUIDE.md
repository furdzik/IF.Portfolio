# Styleguide

## Styles

- Use [styled-components](https://www.styled-components.com/)
- Use extensions while importing files
- Stylelint is in use. List of extensions and plugins:
  - extends:
    - [stylelint-scss](https://github.com/kristerkari/stylelint-scss)
    - [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
    - [stylelint-config-prettier](https://github.com/shannonmoeller/stylelint-config-prettier)
    - [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
    - [stylelint-config-recommended-scss](https://github.com/kristerkari/stylelint-config-recommended-scss)
  - plugins:
    - [stylelint-declaration-use-variable](https://github.com/sh-waqar/stylelint-declaration-use-variable)
    - [stylelint-declaration-block-no-ignored-properties](https://www.npmjs.com/package/stylelint-declaration-block-no-ignored-properties)
    - [stylelint-order](https://github.com/hudochenkov/stylelint-order)
  - overwrited by:
    - [stylelint](../.stylelintrc)
- Use mobile first approach

## JSX

- As a base I use `eslint` with `eslint-config-airbnb` config
  - it is overwrite by: [.eslintrc](../.eslintrc)
  - at first try write component as function
  - I don't spread props in component's function

```javascript
const ExampleComponent = (props) => (
  <div>
    <div>{props.children}</div>
    <p>{props.other}</p>
  </div>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  other: PropTypes.string
};

Button.defaultProps = {
  other: ''
};
```

## Git commits

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)  

### Convention - [based on eslint contributing](https://eslint.org/docs/1.0.0/developer-guide/contributing#step-2-make-your-changes)

Make the changes to the code and tests and then commit to your branch. Be sure to follow the commit message conventions.

Commit message summaries must follow this basic format:

```md
tag(scope*): message
```

\* optional

`tag` should not be confused with git tag.
`message` should not be confused with git commit message.

The `Tag` is one of the following:

- `fix` - for a bug fix
- `update` - for a dependency upgrade
- `docs` - changes to documentation only
- `build` - changes to build process only
- `feat` - implemented a new feature
- `refactor` - refactor existing code
- `perf` - changes regarding performance
- `revert` - revert changes
- `chore` - chores like configuration change or releases
- `test` - changes to tests only.

The message summary should be a one-sentence description of the change.

Here are some good commit message summary examples:

```sh
build(travis): update Travis to only test node 0.10
upgrade(esprima): esprima to 1.2, switch to using esprima comment attachment 
fix: semi rule incorrectly flagging extra semicolon
```

### 7 Golden Rules - [based on ChrisBeams post](https://chris.beams.io/posts/git-commit/)

- Separate subject from body with a blank line
- Limit the subject line to 50 characters
- Do not end the subject line with a period
- Use the imperative mood in the subject line
- Wrap the body at 72 characters
- Use the body to explain what and why vs. how

## Naming branches

- `fix` - quick fixes to the codebase
- `update` - when something just need to be updated (ex. copy)
- `docs` - for changes to documentation only
- `build` - build regarding changes
- `bug` - code changes linked to a known issue
- `feat` - new feature
- `refactor` - refactor existing code
- `perf` - changes regarding performance
- `revert` - revert changes
- `chore` - chores like configuration change or releases
- `test` - changes to tests only
- `junk` - experiments (will never be merged).

ex. `feat/change-password`

## i18n

All literals in this project are written only in polish but for separation and formatting we use [`react-intl` package](https://github.com/yahoo/react-intl).

### How to use literals

Keep all literals in `[component-name].messages.js` file just as in example

```javascript
import { defineMessages } from 'react-intl';

export default defineMessages({
  foo: {
    id: 'app.components.results.foo',
    defaultMessage: 'Foo'
  },
  bar: {
    id: 'app.components.results.bar',
    defaultMessage: 'Bar'
  }
});
```

Example with using `react-intl` in `ExampleComponent.jsx`:

```javascript
// react-intl package imports
import { useIntl } from 'react-intl';

// messages defined in project
import messages from './ExampleComponent.messages';

// intl are injected via hook
const ExampleComponent = (props) => {
    const intl = useIntl();

    return (
      <div>
        <div>{intl.formatMessge(messages.foo)}</div>
        <p>{intl.formatMessage(messages.bar)}</p>
      </div>
    );
}

export default injectIntl(ExampleComponent);
```

`<FormattedMessage>` returns literals in `<span>` element so use `intl` object to inject `i18n` feature into project

### When to use

- [literals](https://github.com/yahoo/react-intl/wiki/Components#string-formatting-components) - `intl.formatMessage`
- [dates](https://github.com/yahoo/react-intl/wiki/Components#date-formatting-components) - `intl.formatDate`
- [currencies](https://github.com/yahoo/react-intl/wiki/Components#number-formatting-components) - `intl.formatNumber`

### Building

All i18n artifacts are placed into `src/lang` folder.
To update `{languageName}.json` files run

```sh
npm run lang
```
