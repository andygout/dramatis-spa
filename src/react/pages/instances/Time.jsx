import { useParams } from 'react-router';

import { useGetTimeQuery } from '../../../redux/slices/api.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';

const Time = () => {
	const { uuid } = useParams();

	const { data: time = {} } = useGetTimeQuery(uuid);

	return <InstancePageWrapper instance={time} />;
};

export default Time;
