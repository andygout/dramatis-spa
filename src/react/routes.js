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
} from './pages';

import { deactivateError } from '../redux/actions/error';
import { fetchList, fetchInstance } from '../redux/actions/model';
import { MODELS, PLURALISED_MODELS } from '../utils/constants';

export default [
	{
		path: '/',
		documentTitle: () => 'Home',
		component: Home,
		fetchData: [
			dispatch => dispatch(deactivateError())
		]
	},
	{
		path: '/awards',
		documentTitle: () => 'Awards',
		component: Awards,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.AWARDS))
		]
	},
	{
		path: '/awards/:uuid',
		documentTitle: () => 'Award',
		component: Award,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.AWARD, uuid))
		]
	},
	{
		path: '/award-ceremonies',
		documentTitle: () => 'Award ceremonies',
		component: AwardCeremonies,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.AWARD_CEREMONIES))
		]
	},
	{
		path: '/award-ceremonies/:uuid',
		documentTitle: () => 'Award ceremony',
		component: AwardCeremony,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.AWARD_CEREMONY, uuid))
		]
	},
	{
		path: '/characters',
		documentTitle: () => 'Characters',
		component: Characters,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.CHARACTERS))
		]
	},
	{
		path: '/characters/:uuid',
		documentTitle: () => 'Character',
		component: Character,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.CHARACTER, uuid))
		]
	},
	{
		path: '/companies',
		documentTitle: () => 'Companies',
		component: Companies,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.COMPANIES))
		]
	},
	{
		path: '/companies/:uuid',
		documentTitle: () => 'Comany',
		component: Company,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.COMPANY, uuid))
		]
	},
	{
		path: '/festivals',
		documentTitle: () => 'Festivals',
		component: Festivals,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.FESTIVALS))
		]
	},
	{
		path: '/festivals/:uuid',
		documentTitle: () => 'Festival',
		component: Festival,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.FESTIVAL, uuid))
		]
	},
	{
		path: '/festival-serieses',
		documentTitle: () => 'Festival serieses',
		component: FestivalSerieses,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.FESTIVAL_SERIESES))
		]
	},
	{
		path: '/festival-serieses/:uuid',
		documentTitle: () => 'Festival series',
		component: FestivalSeries,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.FESTIVAL_SERIES, uuid))
		]
	},
	{
		path: '/materials',
		documentTitle: () => 'Materials',
		component: Materials,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.MATERIALS))
		]
	},
	{
		path: '/materials/:uuid',
		documentTitle: () => 'Material',
		component: Material,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.MATERIAL, uuid))
		]
	},
	{
		path: '/people',
		documentTitle: () => 'People',
		component: People,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.PEOPLE))
		]
	},
	{
		path: '/people/:uuid',
		documentTitle: () => 'Person',
		component: Person,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.PERSON, uuid))
		]
	},
	{
		path: '/productions',
		documentTitle: () => 'Productions',
		component: Productions,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.PRODUCTIONS))
		]
	},
	{
		path: '/productions/:uuid',
		documentTitle: () => 'Production',
		component: Production,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.PRODUCTION, uuid))
		]
	},
	{
		path: '/seasons',
		documentTitle: () => 'Seasons',
		component: Seasons,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.SEASONS))
		]
	},
	{
		path: '/seasons/:uuid',
		documentTitle: () => 'Season',
		component: Season,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.SEASON, uuid))
		]
	},
	{
		path: '/venues',
		documentTitle: () => 'Venues',
		component: Venues,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.VENUES))
		]
	},
	{
		path: '/venues/:uuid',
		documentTitle: () => 'Venue',
		component: Venue,
		fetchData: [
			dispatch => dispatch(deactivateError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.VENUE, uuid))
		]
	},
	{
		path: '*',
		documentTitle: () => 'Not Found',
		component: NotFound,
		fetchData: []
	}
];
