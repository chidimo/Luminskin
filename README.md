# Lumiskin

## Style note.

Every component in the app is written as a function except the `<ErrorBoundary />` component which can only be written as a class component. I chose to use a named export for the error boundary because I personally adhere to the style where every function export is named except components that will be lazily loaded with `React.lazy()`.

## Buggy currencies

`"Float cannot represent non numeric value: "NaN""`

`AED`, `SAR`

## How to run project

1. Clone or download repository
1. `cd` into the top level folder on a terminal and run `yarn install` or `npm install` if you prefer.
1. Wait for the installation to finish then run `yarn start` or `npm start`.
