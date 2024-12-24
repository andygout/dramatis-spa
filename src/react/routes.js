import {
	Award,
	Awards,
	AwardCeremony,
	AwardCeremonies,
	Character,
	Characters,
	Company,
	Companies,
	Festival,
	Festivals,
	FestivalSeries,
	FestivalSerieses,
	Material,
	Materials,
	Person,
	People,
	Production,
	Productions,
	Season,
	Seasons,
	Venue,
	Venues,
	Home,
	NotFound
} from './pages/index.js';

import { deactivateError } from '../redux/action-handlers/error.js';
import { fetchList, fetchInstance } from '../redux/action-handlers/model.js';
import { MODELS, PLURALISED_MODELS } from '../utils/constants.js';

export default [
	{
		path: '/',
		documentTitle: () => 'Home',
		component: Home,
		fetchData: null,
		deactivateError
	},
	{
		path: '/awards',
		documentTitle: () => 'Awards',
		component: Awards,
		fetchData: dispatch => dispatch(fetchList(PLURALISED_MODELS.AWARDS)),
		deactivateError
	},
	{
		path: '/awards/:uuid',
		documentTitle: () => 'Award',
		component: Award,
		fetchData: (dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.AWARD, uuid)),
		deactivateError
	},
	{
		path: '/award-ceremonies',
		documentTitle: () => 'Award ceremonies',
		component: AwardCeremonies,
		fetchData: dispatch => dispatch(fetchList(PLURALISED_MODELS.AWARD_CEREMONIES)),
		deactivateError
	},
	{
		path: '/award-ceremonies/:uuid',
		documentTitle: () => 'Award ceremony',
		component: AwardCeremony,
		fetchData: (dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.AWARD_CEREMONY, uuid)),
		deactivateError
	},
	{
		path: '/characters',
		documentTitle: () => 'Characters',
		component: Characters,
		fetchData: dispatch => dispatch(fetchList(PLURALISED_MODELS.CHARACTERS)),
		deactivateError
	},
	{
		path: '/characters/:uuid',
		documentTitle: () => 'Character',
		component: Character,
		fetchData: (dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.CHARACTER, uuid)),
		deactivateError
	},
	{
		path: '/companies',
		documentTitle: () => 'Companies',
		component: Companies,
		fetchData: dispatch => dispatch(fetchList(PLURALISED_MODELS.COMPANIES)),
		deactivateError
	},
	{
		path: '/companies/:uuid',
		documentTitle: () => 'Comany',
		component: Company,
		fetchData: (dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.COMPANY, uuid)),
		deactivateError
	},
	{
		path: '/festivals',
		documentTitle: () => 'Festivals',
		component: Festivals,
		fetchData: dispatch => dispatch(fetchList(PLURALISED_MODELS.FESTIVALS)),
		deactivateError
	},
	{
		path: '/festivals/:uuid',
		documentTitle: () => 'Festival',
		component: Festival,
		fetchData: (dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.FESTIVAL, uuid)),
		deactivateError
	},
	{
		path: '/festival-serieses',
		documentTitle: () => 'Festival serieses',
		component: FestivalSerieses,
		fetchData: dispatch => dispatch(fetchList(PLURALISED_MODELS.FESTIVAL_SERIESES)),
		deactivateError
	},
	{
		path: '/festival-serieses/:uuid',
		documentTitle: () => 'Festival series',
		component: FestivalSeries,
		fetchData: (dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.FESTIVAL_SERIES, uuid)),
		deactivateError
	},
	{
		path: '/materials',
		documentTitle: () => 'Materials',
		component: Materials,
		fetchData: dispatch => dispatch(fetchList(PLURALISED_MODELS.MATERIALS)),
		deactivateError
	},
	{
		path: '/materials/:uuid',
		documentTitle: () => 'Material',
		component: Material,
		fetchData: (dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.MATERIAL, uuid)),
		deactivateError
	},
	{
		path: '/people',
		documentTitle: () => 'People',
		component: People,
		fetchData: dispatch => dispatch(fetchList(PLURALISED_MODELS.PEOPLE)),
		deactivateError
	},
	{
		path: '/people/:uuid',
		documentTitle: () => 'Person',
		component: Person,
		fetchData: (dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.PERSON, uuid)),
		deactivateError
	},
	{
		path: '/productions',
		documentTitle: () => 'Productions',
		component: Productions,
		fetchData: dispatch => dispatch(fetchList(PLURALISED_MODELS.PRODUCTIONS)),
		deactivateError
	},
	{
		path: '/productions/:uuid',
		documentTitle: () => 'Production',
		component: Production,
		fetchData: (dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.PRODUCTION, uuid)),
		deactivateError
	},
	{
		path: '/seasons',
		documentTitle: () => 'Seasons',
		component: Seasons,
		fetchData: dispatch => dispatch(fetchList(PLURALISED_MODELS.SEASONS)),
		deactivateError
	},
	{
		path: '/seasons/:uuid',
		documentTitle: () => 'Season',
		component: Season,
		fetchData: (dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.SEASON, uuid)),
		deactivateError
	},
	{
		path: '/venues',
		documentTitle: () => 'Venues',
		component: Venues,
		fetchData: dispatch => dispatch(fetchList(PLURALISED_MODELS.VENUES)),
		deactivateError
	},
	{
		path: '/venues/:uuid',
		documentTitle: () => 'Venue',
		component: Venue,
		fetchData: (dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.VENUE, uuid)),
		deactivateError
	},
	{
		path: '*',
		documentTitle: () => 'Not Found',
		component: NotFound,
		fetchData: null,
		deactivateError: null
	}
];
