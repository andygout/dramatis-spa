import { useParams } from 'react-router';

import { useGetPlaceQuery } from '../../../redux/slices/api.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';

const Place = () => {
	const { uuid } = useParams();

	const { data: place = {} } = useGetPlaceQuery(uuid);

	return <InstancePageWrapper instance={place} />;
};

export default Place;
