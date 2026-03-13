import fetchFromApi from '../../lib/fetch-from-api.js';

export default async (request, response, next) => {
	const { path } = request;

	try {
		const list = await fetchFromApi(path);

		return response.send(list);
	} catch (error) {
		return next(error);
	}
};
