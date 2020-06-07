import { IRREGULAR_PLURAL_NOUNS_MAP } from '../utils/constants';

const pluralise = model => IRREGULAR_PLURAL_NOUNS_MAP[model] || `${model}s`;

export {
	pluralise
};
