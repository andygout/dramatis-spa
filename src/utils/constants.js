const AWARD = 'AWARD';
const AWARDS = 'AWARDS';
const AWARD_CEREMONY = 'AWARD_CEREMONY';
const AWARD_CEREMONIES = 'AWARD_CEREMONIES';
const CHARACTER = 'CHARACTER';
const CHARACTERS = 'CHARACTERS';
const COMPANY = 'COMPANY';
const COMPANIES = 'COMPANIES';
const MATERIAL = 'MATERIAL';
const MATERIALS = 'MATERIALS';
const PERSON = 'PERSON';
const PEOPLE = 'PEOPLE';
const PRODUCTION = 'PRODUCTION';
const PRODUCTIONS = 'PRODUCTIONS';
const VENUE = 'VENUE';
const VENUES = 'VENUES';

const MODELS = {
	[AWARD]: AWARD,
	[AWARD_CEREMONY]: AWARD_CEREMONY,
	[CHARACTER]: CHARACTER,
	[COMPANY]: COMPANY,
	[MATERIAL]: MATERIAL,
	[PERSON]: PERSON,
	[PRODUCTION]: PRODUCTION,
	[VENUE]: VENUE
};

const MODEL_TO_DISPLAY_NAME_MAP = {
	[AWARD]: 'award',
	[AWARD_CEREMONY]: 'award ceremony',
	[CHARACTER]: 'character',
	[COMPANY]: 'company',
	[MATERIAL]: 'material',
	[PERSON]: 'person',
	[PRODUCTION]: 'production',
	[VENUE]: 'venue'
};

const MODEL_TO_PROP_NAME_MAP = {
	[AWARD]: 'award',
	[AWARD_CEREMONY]: 'awardCeremony',
	[CHARACTER]: 'character',
	[COMPANY]: 'company',
	[MATERIAL]: 'material',
	[PERSON]: 'person',
	[PRODUCTION]: 'production',
	[VENUE]: 'venue'
};

const MODEL_TO_ROUTE_MAP = {
	[AWARD]: 'awards',
	[AWARD_CEREMONY]: 'awards/ceremonies',
	[CHARACTER]: 'characters',
	[COMPANY]: 'companies',
	[MATERIAL]: 'materials',
	[PERSON]: 'people',
	[PRODUCTION]: 'productions',
	[VENUE]: 'venues'
};

const PLURALISED_MODELS = {
	[AWARDS]: AWARDS,
	[AWARD_CEREMONIES]: AWARD_CEREMONIES,
	[CHARACTERS]: CHARACTERS,
	[COMPANIES]: COMPANIES,
	[MATERIALS]: MATERIALS,
	[PEOPLE]: PEOPLE,
	[PRODUCTIONS]: PRODUCTIONS,
	[VENUES]: VENUES
};

const PLURALISED_MODEL_TO_PROP_NAME_MAP = {
	[AWARDS]: 'awards',
	[AWARD_CEREMONIES]: 'awardCeremonies',
	[CHARACTERS]: 'characters',
	[COMPANIES]: 'companies',
	[MATERIALS]: 'materials',
	[PEOPLE]: 'people',
	[PRODUCTIONS]: 'productions',
	[VENUES]: 'venues'
};

const PLURALISED_MODEL_TO_ROUTE_MAP = {
	[AWARDS]: 'awards',
	[AWARD_CEREMONIES]: 'awards/ceremonies',
	[CHARACTERS]: 'characters',
	[COMPANIES]: 'companies',
	[MATERIALS]: 'materials',
	[PEOPLE]: 'people',
	[PRODUCTIONS]: 'productions',
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
