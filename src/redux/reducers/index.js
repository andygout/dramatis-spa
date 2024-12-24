import { api } from '../slices/api.js';
import error from '../slices/error.js';

export default {
	[api.reducerPath]: api.reducer,
	error
};
