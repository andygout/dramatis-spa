import { MODELS } from '../utils/constants';

export default instance => {

	const name = instance.get('name');

	let title = name;

	switch (instance.get('model')) {

		case MODELS.AWARD_CEREMONY:
			if (instance.get('award')) title = `${instance.getIn(['award', 'name'])} ${title}`;
			return title;

		case MODELS.MATERIAL:
			if (instance.get('surMaterial')) title = `${instance.getIn(['surMaterial', 'name'])}: ${title}`;
			return title;

		case MODELS.VENUE:
			if (instance.get('surVenue')) title = `${instance.getIn(['surVenue', 'name'])}: ${title}`;
			return title;

		default:
			return title;

	}

};
