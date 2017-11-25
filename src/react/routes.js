import Home from './pages/home';
import Character from './pages/character';
import Characters from './pages/characters';
import Person from './pages/person';
import People from './pages/people';
import Playtext from './pages/playtext';
import Playtexts from './pages/playtexts';
import Production from './pages/production';
import Productions from './pages/productions';
import Theatre from './pages/theatre';
import Theatres from './pages/theatres';
import NotFound from './pages/not-found';

import fetchModel from '../redux/actions/model';

export default [
	{
		path: '/',
		exact: true,
		documentTitle: () => 'Home',
		component: Home
	},
	{
		path: '/characters',
		exact: true,
		documentTitle: () => 'Characters',
		component: Characters,
		fetchData: [
			dispatch => dispatch(fetchModel('characters'))
		]
	},
	{
		path: '/characters/:uuid',
		documentTitle: () => 'Character',
		component: Character,
		fetchData: [
			(dispatch, { params: { uuid } }) => dispatch(fetchModel('character', uuid))
		]
	},
	{
		path: '/people',
		exact: true,
		documentTitle: () => 'People',
		component: People,
		fetchData: [
			dispatch => dispatch(fetchModel('people'))
		]
	},
	{
		path: '/people/:uuid',
		documentTitle: () => 'Person',
		component: Person,
		fetchData: [
			(dispatch, { params: { uuid } }) => dispatch(fetchModel('person', uuid))
		]
	},
	{
		path: '/playtexts',
		exact: true,
		documentTitle: () => 'Playtexts',
		component: Playtexts,
		fetchData: [
			dispatch => dispatch(fetchModel('playtexts'))
		]
	},
	{
		path: '/playtexts/:uuid',
		documentTitle: () => 'Playtexts',
		component: Playtext,
		fetchData: [
			(dispatch, { params: { uuid } }) => dispatch(fetchModel('playtext', uuid))
		]
	},
	{
		path: '/productions',
		exact: true,
		documentTitle: () => 'Productions',
		component: Productions,
		fetchData: [
			dispatch => dispatch(fetchModel('productions'))
		]
	},
	{
		path: '/productions/:uuid',
		documentTitle: () => 'Production',
		component: Production,
		fetchData: [
			(dispatch, { params: { uuid } }) => dispatch(fetchModel('production', uuid))
		]
	},
	{
		path: '/theatres',
		exact: true,
		documentTitle: () => 'Theatres',
		component: Theatres,
		fetchData: [
			dispatch => dispatch(fetchModel('theatres'))
		]
	},
	{
		path: '/theatres/:uuid',
		documentTitle: () => 'Theatre',
		component: Theatre,
		fetchData: [
			(dispatch, { params: { uuid } }) => dispatch(fetchModel('theatre', uuid))
		]
	},
	{
		path: '*',
		documentTitle: () => 'Not Found',
		component: NotFound
	}
];
