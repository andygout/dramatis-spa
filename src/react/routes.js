import {
	Award,
	Awards,
	AwardCeremony,
	AwardCeremonies,
	Character,
	Characters,
	Company,
	Companies,
	Material,
	Materials,
	Person,
	People,
	Production,
	Productions,
	Venue,
	Venues,
	Home,
	NotFound
} from './pages';

import { cancelError } from '../redux/actions/error';
import { fetchList, fetchInstance } from '../redux/actions/model';
import { MODELS, PLURALISED_MODELS } from '../utils/constants';

export default [
	{
		path: '/',
		documentTitle: () => 'Home',
		component: Home,
		fetchData: [
			dispatch => dispatch(cancelError())
		]
	},
	{
		path: '/awards/ceremonies',
		documentTitle: () => 'Award ceremonies',
		component: AwardCeremonies,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.AWARD_CEREMONIES))
		]
	},
	{
		path: '/awards/ceremonies/:uuid',
		documentTitle: () => 'Award ceremony',
		component: AwardCeremony,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.AWARD_CEREMONY, uuid))
		]
	},
	{
		path: '/awards',
		documentTitle: () => 'Awards',
		component: Awards,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.AWARDS))
		]
	},
	{
		path: '/awards/:uuid',
		documentTitle: () => 'Award',
		component: Award,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.AWARD, uuid))
		]
	},
	{
		path: '/characters',
		documentTitle: () => 'Characters',
		component: Characters,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.CHARACTERS))
		]
	},
	{
		path: '/characters/:uuid',
		documentTitle: () => 'Character',
		component: Character,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.CHARACTER, uuid))
		]
	},
	{
		path: '/companies',
		documentTitle: () => 'Companies',
		component: Companies,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.COMPANIES))
		]
	},
	{
		path: '/companies/:uuid',
		documentTitle: () => 'Comany',
		component: Company,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.COMPANY, uuid))
		]
	},
	{
		path: '/materials',
		documentTitle: () => 'Materials',
		component: Materials,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.MATERIALS))
		]
	},
	{
		path: '/materials/:uuid',
		documentTitle: () => 'Material',
		component: Material,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.MATERIAL, uuid))
		]
	},
	{
		path: '/people',
		documentTitle: () => 'People',
		component: People,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.PEOPLE))
		]
	},
	{
		path: '/people/:uuid',
		documentTitle: () => 'Person',
		component: Person,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.PERSON, uuid))
		]
	},
	{
		path: '/productions',
		documentTitle: () => 'Productions',
		component: Productions,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.PRODUCTIONS))
		]
	},
	{
		path: '/productions/:uuid',
		documentTitle: () => 'Production',
		component: Production,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.PRODUCTION, uuid))
		]
	},
	{
		path: '/venues',
		documentTitle: () => 'Venues',
		component: Venues,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList(PLURALISED_MODELS.VENUES))
		]
	},
	{
		path: '/venues/:uuid',
		documentTitle: () => 'Venue',
		component: Venue,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance(MODELS.VENUE, uuid))
		]
	},
	{
		path: '*',
		documentTitle: () => 'Not Found',
		component: NotFound
	}
];
