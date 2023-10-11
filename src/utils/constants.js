const AWARD = 'AWARD';
const AWARDS = 'AWARDS';
const AWARD_CEREMONY = 'AWARD_CEREMONY';
const AWARD_CEREMONIES = 'AWARD_CEREMONIES';
const CHARACTER = 'CHARACTER';
const CHARACTERS = 'CHARACTERS';
const COMPANY = 'COMPANY';
const COMPANIES = 'COMPANIES';
const FESTIVAL = 'FESTIVAL';
const FESTIVALS = 'FESTIVALS';
const FESTIVAL_SERIES = 'FESTIVAL_SERIES';
const FESTIVAL_SERIESES = 'FESTIVAL_SERIESES';
const MATERIAL = 'MATERIAL';
const MATERIALS = 'MATERIALS';
const PERSON = 'PERSON';
const PEOPLE = 'PEOPLE';
const PRODUCTION = 'PRODUCTION';
const PRODUCTIONS = 'PRODUCTIONS';
const SEASON = 'SEASON';
const SEASONS = 'SEASONS';
const VENUE = 'VENUE';
const VENUES = 'VENUES';

const MODELS = {
	[AWARD]: AWARD,
	[AWARD_CEREMONY]: AWARD_CEREMONY,
	[CHARACTER]: CHARACTER,
	[COMPANY]: COMPANY,
	[FESTIVAL]: FESTIVAL,
	[FESTIVAL_SERIES]: FESTIVAL_SERIES,
	[MATERIAL]: MATERIAL,
	[PERSON]: PERSON,
	[PRODUCTION]: PRODUCTION,
	[SEASON]: SEASON,
	[VENUE]: VENUE
};

const MODEL_TO_DISPLAY_NAME_MAP = {
	[AWARD]: 'award',
	[AWARD_CEREMONY]: 'award ceremony',
	[CHARACTER]: 'character',
	[COMPANY]: 'company',
	[FESTIVAL]: 'festival',
	[FESTIVAL_SERIES]: 'festival series',
	[MATERIAL]: 'material',
	[PERSON]: 'person',
	[PRODUCTION]: 'production',
	[SEASON]: 'season',
	[VENUE]: 'venue'
};

const MODEL_TO_PROP_NAME_MAP = {
	[AWARD]: 'award',
	[AWARD_CEREMONY]: 'awardCeremony',
	[CHARACTER]: 'character',
	[COMPANY]: 'company',
	[FESTIVAL]: 'festival',
	[FESTIVAL_SERIES]: 'festivalSeries',
	[MATERIAL]: 'material',
	[PERSON]: 'person',
	[PRODUCTION]: 'production',
	[SEASON]: 'season',
	[VENUE]: 'venue'
};

const MODEL_TO_ROUTE_MAP = {
	[AWARD]: 'awards',
	[AWARD_CEREMONY]: 'award-ceremonies',
	[CHARACTER]: 'characters',
	[COMPANY]: 'companies',
	[FESTIVAL]: 'festivals',
	[FESTIVAL_SERIES]: 'festival-serieses',
	[MATERIAL]: 'materials',
	[PERSON]: 'people',
	[PRODUCTION]: 'productions',
	[SEASON]: 'seasons',
	[VENUE]: 'venues'
};

const PLURALISED_MODELS = {
	[AWARDS]: AWARDS,
	[AWARD_CEREMONIES]: AWARD_CEREMONIES,
	[CHARACTERS]: CHARACTERS,
	[COMPANIES]: COMPANIES,
	[FESTIVALS]: FESTIVALS,
	[FESTIVAL_SERIESES]: FESTIVAL_SERIESES,
	[MATERIALS]: MATERIALS,
	[PEOPLE]: PEOPLE,
	[PRODUCTIONS]: PRODUCTIONS,
	[SEASONS]: SEASONS,
	[VENUES]: VENUES
};

const PLURALISED_MODEL_TO_PROP_NAME_MAP = {
	[AWARDS]: 'awards',
	[AWARD_CEREMONIES]: 'awardCeremonies',
	[CHARACTERS]: 'characters',
	[COMPANIES]: 'companies',
	[FESTIVALS]: 'festivals',
	[FESTIVAL_SERIESES]: 'festivalSerieses',
	[MATERIALS]: 'materials',
	[PEOPLE]: 'people',
	[PRODUCTIONS]: 'productions',
	[SEASONS]: 'seasons',
	[VENUES]: 'venues'
};

const PLURALISED_MODEL_TO_ROUTE_MAP = {
	[AWARDS]: 'awards',
	[AWARD_CEREMONIES]: 'award-ceremonies',
	[CHARACTERS]: 'characters',
	[COMPANIES]: 'companies',
	[FESTIVALS]: 'festivals',
	[FESTIVAL_SERIESES]: 'festival-serieses',
	[MATERIALS]: 'materials',
	[PEOPLE]: 'people',
	[PRODUCTIONS]: 'productions',
	[SEASONS]: 'seasons',
	[VENUES]: 'venues'
};

export {
	MODELS,
	MODEL_TO_DISPLAY_NAME_MAP,
	MODEL_TO_PROP_NAME_MAP,
	MODEL_TO_ROUTE_MAP,
	PLURALISED_MODELS,
	PLURALISED_MODEL_TO_PROP_NAME_MAP,
	PLURALISED_MODEL_TO_ROUTE_MAP
};
