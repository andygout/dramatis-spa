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

import { fetchCharacter } from '../redux/actions/character';
import { fetchCharacters } from '../redux/actions/characters';
import { fetchPerson } from '../redux/actions/person';
import { fetchPeople } from '../redux/actions/people';
import { fetchPlaytext } from '../redux/actions/playtext';
import { fetchPlaytexts } from '../redux/actions/playtexts';
import { fetchProduction } from '../redux/actions/production';
import { fetchProductions } from '../redux/actions/productions';
import { fetchTheatre } from '../redux/actions/theatre';
import { fetchTheatres } from '../redux/actions/theatres';

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
			dispatch => dispatch(fetchCharacters())
		]
	},
	{
		path: '/characters/:uuid',
		documentTitle: () => 'Character',
		component: Character,
		fetchData: [
			(dispatch, { params: { uuid } }) => dispatch(fetchCharacter(uuid))
		]
	},
	{
		path: '/people',
		exact: true,
		documentTitle: () => 'People',
		component: People,
		fetchData: [
			dispatch => dispatch(fetchPeople())
		]
	},
	{
		path: '/people/:uuid',
		documentTitle: () => 'Person',
		component: Person,
		fetchData: [
			(dispatch, { params: { uuid } }) => dispatch(fetchPerson(uuid))
		]
	},
	{
		path: '/playtexts',
		exact: true,
		documentTitle: () => 'Playtexts',
		component: Playtexts,
		fetchData: [
			dispatch => dispatch(fetchPlaytexts())
		]
	},
	{
		path: '/playtexts/:uuid',
		documentTitle: () => 'Playtexts',
		component: Playtext,
		fetchData: [
			(dispatch, { params: { uuid } }) => dispatch(fetchPlaytext(uuid))
		]
	},
	{
		path: '/productions',
		exact: true,
		documentTitle: () => 'Productions',
		component: Productions,
		fetchData: [
			dispatch => dispatch(fetchProductions())
		]
	},
	{
		path: '/productions/:uuid',
		documentTitle: () => 'Production',
		component: Production,
		fetchData: [
			(dispatch, { params: { uuid } }) => dispatch(fetchProduction(uuid))
		]
	},
	{
		path: '/theatres',
		exact: true,
		documentTitle: () => 'Theatres',
		component: Theatres,
		fetchData: [
			dispatch => dispatch(fetchTheatres())
		]
	},
	{
		path: '/theatres/:uuid',
		documentTitle: () => 'Theatre',
		component: Theatre,
		fetchData: [
			(dispatch, { params: { uuid } }) => dispatch(fetchTheatre(uuid))
		]
	},
	{
		path: '*',
		documentTitle: () => 'Error',
		component: NotFound
	}
];
