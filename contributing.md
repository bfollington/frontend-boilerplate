# contributing

## Code Style

### Javascript

Javascript should be written as ES2015 wherenever possible and should use React for appropriate interactivity and user interface implementations. Code is formatted according to the AirBnB styleguide (https://github.com/airbnb/javascript). This can be applied via `eslint`, an `.eslintrc` is provided in the root of the repository to validate against the styleguide.

In addition to the AirBnB guide, there are several specific rules that must be followed in the codebase.

### Rules

A sample module containing methods and one containing a React component are provided.

#### Importing and Exporting

Typically only one class should exist per file, however this is not a strict rule. `Tools.jsx` may contain definitions for `Tool`, `CircleTool`, `LineTool` etc. **However** a file containing a class should expose exactly one `default` export. This should typically be the most commonly used class within the file.

Modules containing only functions do not require a default export.

#### Prefer Javascript Style

Whenever possible, modern Javascript concepts should be used over traditional paradigms. This includes asynchronous programming, functional programming and composition. This is partially covered in the AirBnB guide by preferring `map`, `forEach` etc. over iteration.

##### Prefer Immutability

Immutability, while occasionally hard to enforce, has many benefits when dealing with functional programming concepts. Generally, a method should **never** mutate its parameters and prefer to return a copy.

```

// Bad, mutates parameter
function append(list, item) {
    list.push(item);
}

// Good
function append(list, item) {
    return list.concat([item]);
}

// Bad
function setVisibility(target, visible) {
    target.visible = visible;
}

// Good (using ES2015 Object shorthand)
function setVisibility(target, visible) {
    return Object.assign({}, target, {visible});
}

```

#### No Unneeded Variable Abbreviations

In public facing identifiers (i.e. packages, functions, classes, exports and parameters) only _widely_ accepted abbreviations should be used. Variables scoped within methods do not need to follow this rule, however they must be sane (limit use of single character variable names).

```

// Bad
function onClickBtn() {

}

// Good
function onClickButton() {

}

```

#### Method Naming

While there are no hard and fast rules for method naming, there are a few expectations (especially within React components).

1. Callbacks should be prefixed with `on`. This immediately indicates that the method is invoked in response to an event and will (generally) not be called manually.

```

// Bad. Does this click a button for me?
buttonClick() {

}

// Good
onButtonClick() {

}

```

2. Methods that return a boolean should be prefixed with `is` or `has`. As above, this indicates the purpose of the method without reading any documentation.

```

// Bad. Does this check or set if something is currently active?
function currentlyActive() {

}

// Good
function isCurrentlyActive() {

}

```

#### No Double Negatives

In general a double negative indicates a naming error, i.e. `notActive` -> `active`. Occasionally the English language will fail you here, and at those times you should use your best judgement.

##### Exceptions

In Javascript when dealing with the DOM a variable may be named `disabled` rather than `enabled` to match the HTML attribute.

### SCSS

SCSS is written according to a custom ruleset roughly based on existing CSS best practices and outlined by http://sass-guidelin.es/. Most of these guidelines are enforced using `sass-lint`. These rules are defined in the `sass-lint.yml` file.

No declaration order is enforced for CSS properties, but mixins and extends come first, then regular declarations, then nested selectors and finally media queries.

```

    .selector,
    .anotherUnrelatedSelector,
    h1, h2, h3 {
        @extend .something;

        @include my-mixin();

        width: 100%;

        &:hover {

        }

        .nested {

        }

        @media screen and (min-width: 128px) {

        }
    }

```
