import fetchFromApi from '../../lib/fetch-from-api.js';

export default async (request, response, next) => {
	const { path } = request;

	try {
		const instance = await fetchFromApi(path);

		return response.send(instance);
	} catch (error) {
		return next(error);
	}
};
