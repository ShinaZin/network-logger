# Network logger

Browser Extension to log specific network traffic

## Following parts

* Background script (vanilla TS)
* Content script (vanilla TS)
* DevTools panel page (React.js, Styled Components)

## Environment

* Node.js >=12.0.0
* NPM >= 6.0.0


## Testing

`Jest` is included and ready for the vanilla TS parts. Testing for React/Vue is not included in order to keep the Jest config clean.

## Scripts

* `npm run dist` - build the extension into `./dist` folder
* `npm run lint` - ESLint for `.ts` and `.tsx` files
* `npm run test` - Jest unit tests
