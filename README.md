# dramatis-spa [![CircleCI](https://circleci.com/gh/andygout/dramatis-spa/tree/main.svg?style=svg)](https://circleci.com/gh/andygout/dramatis-spa/tree/main)

Single-page application (SPA) that provides listings for theatrical productions, materials, and associated data.

## Setup

- Clone this repo
- Set Node.js to version specified in `.nvmrc`, which can be achieved by running `$ nvm use` (if using [Volta](https://docs.volta.sh/guide/getting-started) then it will be set automatically)
- Install Node.js modules: `$ npm install`
- Compile code: `$ npm run build`

## To run locally

- Ensure an instance of [`dramatis-api`](https://github.com/andygout/dramatis-api) is running on `http://localhost:3000`
- Run server using `$ npm start` and visit homepage at `http://localhost:3002`

## To run linting checks

- `$ npm run lint-check`

## Architecture

```mermaid
flowchart LR
	%% Containers and components
	subgraph CLIENT_SIDE[Client-side]
		BROWSER(Browser)
	end

	subgraph SERVER_SIDE[Server-side]
		DRAMATIS_API(dramatis-api)
		DRAMATIS_SPA(dramatis-spa)
	end

	%% Relationships
	BROWSER -- 1. GET data --> DRAMATIS_SPA

	DRAMATIS_SPA -- 2. GET data --> DRAMATIS_API

	%% Style Definitions
	classDef browser fill:#c2ad01,stroke:#625800,color:#FFFFFF

	classDef dramatisSpa fill:#478e84,stroke:#094a40,color:#FFFFFF

	classDef dramatisApi fill:#006699,stroke:#042c53,color:#FFFFFF

	%% Apply Styles
	class DRAMATIS_API dramatisApi
	class DRAMATIS_SPA dramatisSpa
	class BROWSER browser
```
