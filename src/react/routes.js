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
		documentTitle: () => 'Home',
		component: Home,
		deactivateError
	},
	{
		path: '/awards',
		documentTitle: () => 'Awards',
		component: Awards,
		deactivateError
	},
	{
		path: '/awards/:uuid',
		documentTitle: () => 'Award',
		component: Award,
		deactivateError
	},
	{
		path: '/award-ceremonies',
		documentTitle: () => 'Award ceremonies',
		component: AwardCeremonies,
		deactivateError
	},
	{
		path: '/award-ceremonies/:uuid',
		documentTitle: () => 'Award ceremony',
		component: AwardCeremony,
		deactivateError
	},
	{
		path: '/characters',
		documentTitle: () => 'Characters',
		component: Characters,
		deactivateError
	},
	{
		path: '/characters/:uuid',
		documentTitle: () => 'Character',
		component: Character,
		deactivateError
	},
	{
		path: '/companies',
		documentTitle: () => 'Companies',
		component: Companies,
		deactivateError
	},
	{
		path: '/companies/:uuid',
		documentTitle: () => 'Comany',
		component: Company,
		deactivateError
	},
	{
		path: '/festivals',
		documentTitle: () => 'Festivals',
		component: Festivals,
		deactivateError
	},
	{
		path: '/festivals/:uuid',
		documentTitle: () => 'Festival',
		component: Festival,
		deactivateError
	},
	{
		path: '/festival-serieses',
		documentTitle: () => 'Festival serieses',
		component: FestivalSerieses,
		deactivateError
	},
	{
		path: '/festival-serieses/:uuid',
		documentTitle: () => 'Festival series',
		component: FestivalSeries,
		deactivateError
	},
	{
		path: '/materials',
		documentTitle: () => 'Materials',
		component: Materials,
		deactivateError
	},
	{
		path: '/materials/:uuid',
		documentTitle: () => 'Material',
		component: Material,
		deactivateError
	},
	{
		path: '/people',
		documentTitle: () => 'People',
		component: People,
		deactivateError
	},
	{
		path: '/people/:uuid',
		documentTitle: () => 'Person',
		component: Person,
		deactivateError
	},
	{
		path: '/productions',
		documentTitle: () => 'Productions',
		component: Productions,
		deactivateError
	},
	{
		path: '/productions/:uuid',
		documentTitle: () => 'Production',
		component: Production,
		deactivateError
	},
	{
		path: '/seasons',
		documentTitle: () => 'Seasons',
		component: Seasons,
		deactivateError
	},
	{
		path: '/seasons/:uuid',
		documentTitle: () => 'Season',
		component: Season,
		deactivateError
	},
	{
		path: '/venues',
		documentTitle: () => 'Venues',
		component: Venues,
		deactivateError
	},
	{
		path: '/venues/:uuid',
		documentTitle: () => 'Venue',
		component: Venue,
		deactivateError
	},
	{
		path: '*',
		documentTitle: () => 'Not Found',
		component: NotFound,
		deactivateError: null
	}
];
