import { useParams } from 'react-router';

import { useGetTimeQuery } from '../../../redux/slices/api.js';
import { InstanceFacet, MaterialsList } from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';

const Time = () => {
	const { uuid } = useParams();

	const { data: time = {} } = useGetTimeQuery(uuid);

	const { materials } = time;

	return (
		<InstancePageWrapper instance={time}>
			{materials?.length > 0 && (
				<InstanceFacet labelText="Materials as setting">
					<MaterialsList materials={materials} />
				</InstanceFacet>
			)}
		</InstancePageWrapper>
	);
};

export default Time;
