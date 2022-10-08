import { getIn } from './object-interactions';
import { MODELS } from '../utils/constants';

export default instance => {

	const name = instance.name;

	let title = name;

	switch (instance.model) {

		case MODELS.AWARD_CEREMONY:
			if (instance.award) title = `${getIn(instance, ['award', 'name'])} ${title}`;
			return title;

		case MODELS.MATERIAL:
			if (instance.surMaterial) title = `${getIn(instance, ['surMaterial', 'name'])}: ${title}`;
			return title;

		case MODELS.VENUE:
			if (instance.surVenue) title = `${getIn(instance, ['surVenue', 'name'])}: ${title}`;
			return title;

		default:
			return title;

	}

};
