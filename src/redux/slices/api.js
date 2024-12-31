import { createApi } from '@reduxjs/toolkit/query/react';

import { errorActivated } from '../actions/index.js';
import {
	MODELS,
	MODEL_TO_ROUTE_MAP,
	PLURALISED_MODELS,
	PLURALISED_MODEL_TO_ROUTE_MAP
} from '../../utils/constants.js';

const API_BASE_URL = 'http://localhost:3000';

const baseQuery = async (apiRoute, { dispatch }) => {

	try {

		const apiUrl = `${API_BASE_URL}${apiRoute}`;

		const response = await fetch(apiUrl, { mode: 'cors' });

		if (response.status !== 200) throw new Error(response.statusText);

		const responseJson = await response.json();

		return { data: responseJson };

	} catch (error) {

		dispatch(errorActivated({ message: error.message }));

		return { error: error.toString() };

	}

};

const getInstancesQuery = pluralisedModel => `/${PLURALISED_MODEL_TO_ROUTE_MAP[pluralisedModel]}`;

const getInstanceQuery = ({ model, uuid }) => `/${MODEL_TO_ROUTE_MAP[model]}/${uuid}`;

export const api = createApi({
	baseQuery,
	endpoints: build => ({
		getAwards: build.query({
			query: () => getInstancesQuery(PLURALISED_MODELS.AWARDS)
		}),
		getAward: build.query({
			query: uuid => getInstanceQuery({ model: MODELS.AWARD, uuid })
		}),
		getAwardCeremonies: build.query({
			query: () => getInstancesQuery(PLURALISED_MODELS.AWARD_CEREMONIES)
		}),
		getAwardCeremony: build.query({
			query: uuid => getInstanceQuery({ model: MODELS.AWARD_CEREMONY, uuid })
		}),
		getCharacters: build.query({
			query: () => getInstancesQuery(PLURALISED_MODELS.CHARACTERS)
		}),
		getCharacter: build.query({
			query: uuid => getInstanceQuery({ model: MODELS.CHARACTER, uuid })
		}),
		getCompanies: build.query({
			query: () => getInstancesQuery(PLURALISED_MODELS.COMPANIES)
		}),
		getCompany: build.query({
			query: uuid => getInstanceQuery({ model: MODELS.COMPANY, uuid })
		}),
		getFestivals: build.query({
			query: () => getInstancesQuery(PLURALISED_MODELS.FESTIVALS)
		}),
		getFestival: build.query({
			query: uuid => getInstanceQuery({ model: MODELS.FESTIVAL, uuid })
		}),
		getFestivalSerieses: build.query({
			query: () => getInstancesQuery(PLURALISED_MODELS.FESTIVAL_SERIESES)
		}),
		getFestivalSeries: build.query({
			query: uuid => getInstanceQuery({ model: MODELS.FESTIVAL_SERIES, uuid })
		}),
		getMaterials: build.query({
			query: () => getInstancesQuery(PLURALISED_MODELS.MATERIALS)
		}),
		getMaterial: build.query({
			query: uuid => getInstanceQuery({ model: MODELS.MATERIAL, uuid })
		}),
		getPeople: build.query({
			query: () => getInstancesQuery(PLURALISED_MODELS.PEOPLE)
		}),
		getPerson: build.query({
			query: uuid => getInstanceQuery({ model: MODELS.PERSON, uuid })
		}),
		getProductions: build.query({
			query: () => getInstancesQuery(PLURALISED_MODELS.PRODUCTIONS)
		}),
		getProduction: build.query({
			query: uuid => getInstanceQuery({ model: MODELS.PRODUCTION, uuid })
		}),
		getSeasons: build.query({
			query: () => getInstancesQuery(PLURALISED_MODELS.SEASONS)
		}),
		getSeason: build.query({
			query: uuid => getInstanceQuery({ model: MODELS.SEASON, uuid })
		}),
		getVenues: build.query({
			query: () => getInstancesQuery(PLURALISED_MODELS.VENUES)
		}),
		getVenue: build.query({
			query: uuid => getInstanceQuery({ model: MODELS.VENUE, uuid })
		})
	})
});

export const {
	useGetAwardsQuery,
	useGetAwardQuery,
	useGetAwardCeremoniesQuery,
	useGetAwardCeremonyQuery,
	useGetCharactersQuery,
	useGetCharacterQuery,
	useGetCompaniesQuery,
	useGetCompanyQuery,
	useGetFestivalsQuery,
	useGetFestivalQuery,
	useGetFestivalSeriesesQuery,
	useGetFestivalSeriesQuery,
	useGetMaterialsQuery,
	useGetMaterialQuery,
	useGetPeopleQuery,
	useGetPersonQuery,
	useGetProductionsQuery,
	useGetProductionQuery,
	useGetSeasonsQuery,
	useGetSeasonQuery,
	useGetVenuesQuery,
	useGetVenueQuery
} = api;
