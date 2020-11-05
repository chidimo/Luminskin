# Lumiskin

## Style note.

Every component in the app is written as a function except the `<ErrorBoundary />` component which can only be written as a class component. I chose to use a named export for the error boundary because I personally adhere to the style where every function export is named except components that will be lazily loaded with `React.lazy()`.

## Buggy currencies

`"Float cannot represent non numeric value: "NaN""`

`AED`, `SAR`
