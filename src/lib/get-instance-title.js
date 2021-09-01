import { MODELS } from '../utils/constants';

export default instance => {

	const name = instance.get('name');

	let title = name;

	switch (instance.get('model')) {

		case MODELS.VENUE:
			if (instance.get('surVenue')) title = `${instance.getIn(['surVenue', 'name'])}: ${title}`;
			return title;

		default:
			return title;

	}

};
