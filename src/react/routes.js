import Character from './pages/instances/character';
import Person from './pages/instances/person';
import Playtext from './pages/instances/playtext';
import Production from './pages/instances/production';
import Theatre from './pages/instances/theatre';
import Characters from './pages/lists/characters';
import People from './pages/lists/people';
import Playtexts from './pages/lists/playtexts';
import Productions from './pages/lists/productions';
import Theatres from './pages/lists/theatres';
import Home from './pages/home';
import NotFound from './pages/not-found';

import { resetError } from '../redux/actions/error';
import fetchModel from '../redux/actions/model';

export default [
	{
		path: '/',
		exact: true,
		documentTitle: () => 'Home',
		component: Home,
		fetchData: [
			dispatch => dispatch(resetError())
		]
	},
	{
		path: '/characters',
		exact: true,
		documentTitle: () => 'Characters',
		component: Characters,
		fetchData: [
			dispatch => dispatch(resetError()),
			dispatch => dispatch(fetchModel('characters'))
		]
	},
	{
		path: '/characters/:uuid',
		documentTitle: () => 'Character',
		component: Character,
		fetchData: [
			dispatch => dispatch(resetError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchModel('character', uuid))
		]
	},
	{
		path: '/people',
		exact: true,
		documentTitle: () => 'People',
		component: People,
		fetchData: [
			dispatch => dispatch(resetError()),
			dispatch => dispatch(fetchModel('people'))
		]
	},
	{
		path: '/people/:uuid',
		documentTitle: () => 'Person',
		component: Person,
		fetchData: [
			dispatch => dispatch(resetError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchModel('person', uuid))
		]
	},
	{
		path: '/playtexts',
		exact: true,
		documentTitle: () => 'Playtexts',
		component: Playtexts,
		fetchData: [
			dispatch => dispatch(resetError()),
			dispatch => dispatch(fetchModel('playtexts'))
		]
	},
	{
		path: '/playtexts/:uuid',
		documentTitle: () => 'Playtexts',
		component: Playtext,
		fetchData: [
			dispatch => dispatch(resetError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchModel('playtext', uuid))
		]
	},
	{
		path: '/productions',
		exact: true,
		documentTitle: () => 'Productions',
		component: Productions,
		fetchData: [
			dispatch => dispatch(resetError()),
			dispatch => dispatch(fetchModel('productions'))
		]
	},
	{
		path: '/productions/:uuid',
		documentTitle: () => 'Production',
		component: Production,
		fetchData: [
			dispatch => dispatch(resetError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchModel('production', uuid))
		]
	},
	{
		path: '/theatres',
		exact: true,
		documentTitle: () => 'Theatres',
		component: Theatres,
		fetchData: [
			dispatch => dispatch(resetError()),
			dispatch => dispatch(fetchModel('theatres'))
		]
	},
	{
		path: '/theatres/:uuid',
		documentTitle: () => 'Theatre',
		component: Theatre,
		fetchData: [
			dispatch => dispatch(resetError()),
			(dispatch, { params: { uuid } }) => dispatch(fetchModel('theatre', uuid))
		]
	},
	{
		path: '*',
		documentTitle: () => 'Not Found',
		component: NotFound
	}
];
