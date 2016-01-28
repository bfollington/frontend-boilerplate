# Frontend Boilerplate

This is a basic example frontend project combining the following technologies:

- React.js Views
- ES2015 syntax
- Textbox.io integration
- SCSS Stylesheets
    - Including bootstrap
- Webpack resource bundling
- Mocha testing of React components
- Code coverage with isparta and istanbul
- Code linting with eslint and sass-lint

## Project setup

After cloning the repository ensure Node is installed (v5.0+ is the recommended version) and run `npm install` to install all dependencies.

## Commands

Currently all commands are triggered through `npm` and can be run using `npm run <task name>`.

- `test` - Run all tests in the project and display their output on the console
- `build` - Build the Javascript and CSS static files in the `dist` directory
- `start` - Start the development environment with automatic rebuilds and code reloading
    - The application will be available at `localhost:8080` when this completes
    - Note: this does _not_ create all static files in `dist`
- `lint` - Lint the SCSS and Javascript source files according to the project standards
- `watch` - Alias to `start` for ease of use
- `single-test` - Run a single test by name, give the file to run as a parameter via: `npm run single-test -- tests/MyTest.js`
- `watch-test` - Run the tests whenever a file is changed. Could be useful during development.
- `cover` - Run the test coverage metrics
- `lint-css` - Run only the SCSS linter
- `build-css` - Build only the final CSS
- `watch-css` - Watch only the CSS
- `lint-js` - Run only the Javascript linter
- `build-js` - Build only the Javascript bundle
- `watch-js` - Watch only the Javascript

## Configuration

All babel settings should be specified in `.babelrc` and not passed directly to babel. This means the babel config is portable between testing and app code.

Code coverage will throw an unexpected character error if the `.istanbul.yml` file does not point to the root source code folder.

Webpack settings are given in `webpack.config.js`. In the future there may be multiple webpack configurations, which may be dynamically created.

All other configuration is given in the `package.json`.

## Development

### Code Style

All code follows the styling rules laid out in `contributing.md`.

### Javascript

Code is written using the ES2015 standard and JSX within React components. This is transpiled using Babel and packaged for use in the browser using Webpack.

`npm run build-js` will build the Javascript project, and `npm run watch-js` will give a live rebuilding web server.

### Styles

Code is written using SCSS and compiled by `node-sass`. SCSS files in the `app/styles/` folder are "root" stylesheets and all subfolders contain only partial styles.

`npm run build-css` will compile all root files and `npm run watch-css` will allow live rebuilding.

### Compilation

For developmnet, it will likely be more useful to run `npm run watch` to monitor both Javascript and Style code at once. Similarly, for a production build `npm run build` should be used.

### Testing

Testing is accomplished using Mocha as the test provider, Chai for assertions and Sinon for mocking. Tests are written in ES2015 and also support JSX through the same babel configuration as regular code.

For testing react components, a full virtual DOM can be used (via `jsdom`) or Shallow Rendering can be used. The latter is the preferred method for verification of data propagation and rendering output.

#### Coverage

Code coverage can be provided by isparta/istanbul by running `npm run cover`.
