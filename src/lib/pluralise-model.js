import { irregularPluralNounsMap } from '../utils/constants';

export default model => irregularPluralNounsMap[model] || model + 's';
