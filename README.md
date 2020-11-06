# Luminskin

## Style note.

Every component in the app is written as a function except the `<ErrorBoundary />` component which can only be written as a class component. [See here](https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries).

I chose to use a named export for the error boundary because I personally adhere to a style where every function export is named except components that will be lazily loaded with `React.lazy()`.

## Buggy currencies

I found some of the currencies to be buggy when I try to use them to retrieve product prices. I can confirm that both `AED` and `SAR` return the error shown below.

`"Float cannot represent non numeric value: "NaN""`

There may be others but these are ones I was able to catch

## How to run project

1. Note that you must have Node.js and npm installed. I'm running on Node.js v14.13.1.
1. Clone or download repository
1. `cd` into the top level folder on a terminal and run `yarn install` or `npm install` if you prefer.
1. Wait for the installation to finish then run `yarn start` or `npm start`.
