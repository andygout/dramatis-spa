import { IRREGULAR_PLURAL_NOUNS_MAP } from '../utils/constants';

export default model => IRREGULAR_PLURAL_NOUNS_MAP[model] || `${model}s`;
