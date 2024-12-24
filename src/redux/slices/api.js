import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000'
	}),
	endpoints: build => ({
		getAwards: build.query({
			query: () => '/awards'
		}),
		getAward: build.query({
			query: uuid => `/awards/${uuid}`
		}),
		getAwardCeremonies: build.query({
			query: () => '/award-ceremonies'
		}),
		getAwardCeremony: build.query({
			query: uuid => `/award-ceremonies/${uuid}`
		}),
		getCharacters: build.query({
			query: () => '/characters'
		}),
		getCharacter: build.query({
			query: uuid => `/characters/${uuid}`
		}),
		getCompanies: build.query({
			query: () => '/companies'
		}),
		getCompany: build.query({
			query: uuid => `/companies/${uuid}`
		}),
		getFestivals: build.query({
			query: () => '/festivals'
		}),
		getFestival: build.query({
			query: uuid => `/festivals/${uuid}`
		}),
		getFestivalSerieses: build.query({
			query: () => '/festival-serieses'
		}),
		getFestivalSeries: build.query({
			query: uuid => `/festival-serieses/${uuid}`
		}),
		getMaterials: build.query({
			query: () => '/materials'
		}),
		getMaterial: build.query({
			query: uuid => `/materials/${uuid}`
		}),
		getPeople: build.query({
			query: () => '/people'
		}),
		getPerson: build.query({
			query: uuid => `/people/${uuid}`
		}),
		getProductions: build.query({
			query: () => '/productions'
		}),
		getProduction: build.query({
			query: uuid => `/productions/${uuid}`
		}),
		getSeasons: build.query({
			query: () => '/seasons'
		}),
		getSeason: build.query({
			query: uuid => `/seasons/${uuid}`
		}),
		getVenues: build.query({
			query: () => '/venues'
		}),
		getVenue: build.query({
			query: uuid => `/venues/${uuid}`
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
