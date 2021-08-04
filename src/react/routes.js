import {
	Award,
	Awards,
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

export default [
	{
		path: '/',
		exact: true,
		documentTitle: () => 'Home',
		component: Home,
		fetchData: [
			dispatch => dispatch(cancelError())
		]
	},
	{
		path: '/awards',
		exact: true,
		documentTitle: () => 'Awards',
		component: Awards,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList('awards'))
		]
	},
	{
		path: '/awards/:uuid',
		documentTitle: () => 'Award',
		component: Award,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance('award', uuid))
		]
	},
	{
		path: '/characters',
		exact: true,
		documentTitle: () => 'Characters',
		component: Characters,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList('characters'))
		]
	},
	{
		path: '/characters/:uuid',
		documentTitle: () => 'Character',
		component: Character,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance('character', uuid))
		]
	},
	{
		path: '/companies',
		exact: true,
		documentTitle: () => 'Companies',
		component: Companies,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList('companies'))
		]
	},
	{
		path: '/companies/:uuid',
		documentTitle: () => 'Comany',
		component: Company,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance('company', uuid))
		]
	},
	{
		path: '/materials',
		exact: true,
		documentTitle: () => 'Materials',
		component: Materials,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList('materials'))
		]
	},
	{
		path: '/materials/:uuid',
		documentTitle: () => 'Material',
		component: Material,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance('material', uuid))
		]
	},
	{
		path: '/people',
		exact: true,
		documentTitle: () => 'People',
		component: People,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList('people'))
		]
	},
	{
		path: '/people/:uuid',
		documentTitle: () => 'Person',
		component: Person,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance('person', uuid))
		]
	},
	{
		path: '/productions',
		exact: true,
		documentTitle: () => 'Productions',
		component: Productions,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList('productions'))
		]
	},
	{
		path: '/productions/:uuid',
		documentTitle: () => 'Production',
		component: Production,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance('production', uuid))
		]
	},
	{
		path: '/venues',
		exact: true,
		documentTitle: () => 'Venues',
		component: Venues,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList('venues'))
		]
	},
	{
		path: '/venues/:uuid',
		documentTitle: () => 'Venue',
		component: Venue,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance('venue', uuid))
		]
	},
	{
		path: '*',
		documentTitle: () => 'Not Found',
		component: NotFound
	}
];
