# Configuration

All babel settings should be specified in `.babelrc` and not passed directly to babel. This means the babel config is portable between testing and app code.

Code coverage will throw an unexpected character error if the `.istanbul.yml` file does not point to the root source code folder.

Webpack settings are given in `webpack.config.js`. In the future there may be multiple webpack configurations, which may be dynamically created.

All other configuration is given in the `package.json`.

# Development

## Javascript

Code is written using the ES2015 standard and JSX within React components. This is transpiled using Babel and packaged for use in the browser using Webpack.

`npm run build-js` will build the Javascript project, and `npm run watch-js` will give a live rebuilding web server.

## Styles

Code is written using SCSS and compiled by `node-sass`. SCSS files in the `app/styles/` folder are "root" stylesheets and all subfolders contain only partial styles.

`npm run build-css` will compile all root files and `npm run watch-css` will allow live rebuilding.

## Compilation

For developmnet, it will likely be more useful to run `npm run watch` to monitor both Javascript and Style code at once. Similarly, for a production build `npm run build` should be used.

## Testing

Testing is accomplished using Mocha as the test provider, Chai for assertions and Sinon for mocking. Tests are written in ES2015 and also support JSX through the same babel configuration as regular code.

For testing react components, a full virtual DOM can be used (via `jsdom`) or Shallow Rendering can be used. The latter is the preferred method for verification of data propagation and rendering output.

### Coverage

Code coverage can be provided by isparta/istanbul by running `npm run cover`.
