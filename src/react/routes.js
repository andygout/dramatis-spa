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

export default [
	{
		path: '/',
		documentTitle: () => 'Home',
		component: Home
	},
	{
		path: '/awards',
		documentTitle: () => 'Awards',
		component: Awards
	},
	{
		path: '/awards/:uuid',
		documentTitle: () => 'Award',
		component: Award
	},
	{
		path: '/award-ceremonies',
		documentTitle: () => 'Award ceremonies',
		component: AwardCeremonies
	},
	{
		path: '/award-ceremonies/:uuid',
		documentTitle: () => 'Award ceremony',
		component: AwardCeremony
	},
	{
		path: '/characters',
		documentTitle: () => 'Characters',
		component: Characters
	},
	{
		path: '/characters/:uuid',
		documentTitle: () => 'Character',
		component: Character
	},
	{
		path: '/companies',
		documentTitle: () => 'Companies',
		component: Companies
	},
	{
		path: '/companies/:uuid',
		documentTitle: () => 'Comany',
		component: Company
	},
	{
		path: '/festivals',
		documentTitle: () => 'Festivals',
		component: Festivals
	},
	{
		path: '/festivals/:uuid',
		documentTitle: () => 'Festival',
		component: Festival
	},
	{
		path: '/festival-serieses',
		documentTitle: () => 'Festival serieses',
		component: FestivalSerieses
	},
	{
		path: '/festival-serieses/:uuid',
		documentTitle: () => 'Festival series',
		component: FestivalSeries
	},
	{
		path: '/materials',
		documentTitle: () => 'Materials',
		component: Materials
	},
	{
		path: '/materials/:uuid',
		documentTitle: () => 'Material',
		component: Material
	},
	{
		path: '/people',
		documentTitle: () => 'People',
		component: People
	},
	{
		path: '/people/:uuid',
		documentTitle: () => 'Person',
		component: Person
	},
	{
		path: '/productions',
		documentTitle: () => 'Productions',
		component: Productions
	},
	{
		path: '/productions/:uuid',
		documentTitle: () => 'Production',
		component: Production
	},
	{
		path: '/seasons',
		documentTitle: () => 'Seasons',
		component: Seasons
	},
	{
		path: '/seasons/:uuid',
		documentTitle: () => 'Season',
		component: Season
	},
	{
		path: '/venues',
		documentTitle: () => 'Venues',
		component: Venues
	},
	{
		path: '/venues/:uuid',
		documentTitle: () => 'Venue',
		component: Venue
	},
	{
		path: '*',
		documentTitle: () => 'Not Found',
		component: NotFound
	}
];
