# dramatis-spa [![CircleCI](https://circleci.com/gh/andygout/dramatis-spa/tree/main.svg?style=svg)](https://circleci.com/gh/andygout/dramatis-spa/tree/main)

Single-page application (SPA) that provides listings for theatrical productions, materials, and associated data.

## Setup

- Clone this repo
- Set Node.js to version specified in `.nvmrc`, which can be achieved by running `$ nvm use` (if using [Volta](https://docs.volta.sh/guide/getting-started) then it will be set automatically)
- Install Node.js modules: `$ npm clean-install`
- Compile code: `$ npm run build`

## To run locally

- Ensure an instance of [`dramatis-api`](https://github.com/andygout/dramatis-api) is running on `http://localhost:3000`
- Run server using `$ npm start` and visit homepage at `http://localhost:3002`

## To run linting checks

- `$ npm run lint-check`

## Architecture

```mermaid
---
config:
  theme: base
  themeVariables:
    actorBkg: "#E6E6E6"
    actorBorder: "#808080"
    actorTextColor: "#000000"
---
sequenceDiagram
  %% Components and grouping boxes
  actor CLIENT as Client

  box rgb(216, 240, 236) SPA
    participant DRAMATIS_SPA as dramatis-spa
  end

  box rgb(218, 231, 242) API
    participant DRAMATIS_API as dramatis-api
  end

  box rgb(223, 240, 216) Database
    participant NEO4J_DATABASE as Neo4j database
  end

  %% Relationships
  CLIENT ->> DRAMATIS_SPA: GET request

  DRAMATIS_SPA ->> DRAMATIS_API: GET request

  DRAMATIS_API ->> NEO4J_DATABASE: Read data

  NEO4J_DATABASE -->> DRAMATIS_API: Return data

  DRAMATIS_API -->> DRAMATIS_SPA: Return data

  DRAMATIS_SPA -->> CLIENT: Return data
```
