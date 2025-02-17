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

export default [
	{
		path: '/',
		pageTitle: 'Home',
		component: Home,
		deactivateError
	},
	{
		path: '/awards',
		pageTitle: 'Awards',
		component: Awards,
		deactivateError
	},
	{
		path: '/awards/:uuid',
		pageTitle: 'Award',
		component: Award,
		deactivateError
	},
	{
		path: '/award-ceremonies',
		pageTitle: 'Award ceremonies',
		component: AwardCeremonies,
		deactivateError
	},
	{
		path: '/award-ceremonies/:uuid',
		pageTitle: 'Award ceremony',
		component: AwardCeremony,
		deactivateError
	},
	{
		path: '/characters',
		pageTitle: 'Characters',
		component: Characters,
		deactivateError
	},
	{
		path: '/characters/:uuid',
		pageTitle: 'Character',
		component: Character,
		deactivateError
	},
	{
		path: '/companies',
		pageTitle: 'Companies',
		component: Companies,
		deactivateError
	},
	{
		path: '/companies/:uuid',
		pageTitle: 'Comany',
		component: Company,
		deactivateError
	},
	{
		path: '/festivals',
		pageTitle: 'Festivals',
		component: Festivals,
		deactivateError
	},
	{
		path: '/festivals/:uuid',
		pageTitle: 'Festival',
		component: Festival,
		deactivateError
	},
	{
		path: '/festival-serieses',
		pageTitle: 'Festival serieses',
		component: FestivalSerieses,
		deactivateError
	},
	{
		path: '/festival-serieses/:uuid',
		pageTitle: 'Festival series',
		component: FestivalSeries,
		deactivateError
	},
	{
		path: '/materials',
		pageTitle: 'Materials',
		component: Materials,
		deactivateError
	},
	{
		path: '/materials/:uuid',
		pageTitle: 'Material',
		component: Material,
		deactivateError
	},
	{
		path: '/people',
		pageTitle: 'People',
		component: People,
		deactivateError
	},
	{
		path: '/people/:uuid',
		pageTitle: 'Person',
		component: Person,
		deactivateError
	},
	{
		path: '/productions',
		pageTitle: 'Productions',
		component: Productions,
		deactivateError
	},
	{
		path: '/productions/:uuid',
		pageTitle: 'Production',
		component: Production,
		deactivateError
	},
	{
		path: '/seasons',
		pageTitle: 'Seasons',
		component: Seasons,
		deactivateError
	},
	{
		path: '/seasons/:uuid',
		pageTitle: 'Season',
		component: Season,
		deactivateError
	},
	{
		path: '/venues',
		pageTitle: 'Venues',
		component: Venues,
		deactivateError
	},
	{
		path: '/venues/:uuid',
		pageTitle: 'Venue',
		component: Venue,
		deactivateError
	},
	{
		path: '*',
		pageTitle: 'Not Found',
		component: NotFound,
		deactivateError: null
	}
];
