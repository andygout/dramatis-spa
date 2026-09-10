import { useParams } from 'react-router';

import { useGetTimeQuery } from '../../../redux/slices/api.js';
import { InstanceFacet, InstanceLinksList, MaterialsList } from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';

const Time = () => {
	const { uuid } = useParams();

	const { data: time = {} } = useGetTimeQuery(uuid);

	const { surTimes, subTimes, materials } = time;

	return (
		<InstancePageWrapper instance={time}>
			{surTimes?.length > 0 && (
				<InstanceFacet labelText="Is within">
					<InstanceLinksList instances={surTimes} />
				</InstanceFacet>
			)}

			{subTimes?.length > 0 && (
				<InstanceFacet labelText="Contains">
					<InstanceLinksList instances={subTimes} />
				</InstanceFacet>
			)}

			{materials?.length > 0 && (
				<InstanceFacet labelText="Materials as setting">
					<MaterialsList materials={materials} />
				</InstanceFacet>
			)}
		</InstancePageWrapper>
	);
};

export default Time;
