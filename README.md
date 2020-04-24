# theatrebase-spa [![CircleCI](https://circleci.com/gh/andygout/theatrebase-spa/tree/master.svg?style=svg)](https://circleci.com/gh/andygout/theatrebase-spa/tree/master)

Single-page application (SPA) that provides listings for theatrical productions, playtexts, and associated data.

## Setup
- Clone this repo.
- Set local Node version to same as listed in `package.json` `engines.node`.
- Install node modules: `$ npm install`.
- Add favicon: `$ mkdir ./src/client/favicons && touch ./src/client/favicons/favicon.ico`.

## To run locally
- Compile code: `$ npm run build`; compile and re-compile on change: `$ npm run watch`.
- Ensure an instance of [`theatrebase-api`](https://github.com/andygout/theatrebase-api) is running on `http://localhost:3000`.
- Run server using `$ npm start` and visit homepage at `http://localhost:3003`.

## To run linting checks
- `$ npm run lint-check`.
