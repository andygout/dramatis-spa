import {
	Character,
	Characters,
	Person,
	People,
	Playtext,
	Playtexts,
	Production,
	Productions,
	Theatre,
	Theatres,
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
		path: '/playtexts',
		exact: true,
		documentTitle: () => 'Playtexts',
		component: Playtexts,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList('playtexts'))
		]
	},
	{
		path: '/playtexts/:uuid',
		documentTitle: () => 'Playtexts',
		component: Playtext,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance('playtext', uuid))
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
		path: '/theatres',
		exact: true,
		documentTitle: () => 'Theatres',
		component: Theatres,
		fetchData: [
			dispatch => dispatch(cancelError()),
			dispatch => dispatch(fetchList('theatres'))
		]
	},
	{
		path: '/theatres/:uuid',
		documentTitle: () => 'Theatre',
		component: Theatre,
		fetchData: [
			dispatch => dispatch(cancelError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchInstance('theatre', uuid))
		]
	},
	{
		path: '*',
		documentTitle: () => 'Not Found',
		component: NotFound
	}
];
