import { useParams } from 'react-router';

import { useGetPlaceQuery } from '../../../redux/slices/api.js';
import { InstanceFacet, MaterialsList } from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';

const Place = () => {
	const { uuid } = useParams();

	const { data: place = {} } = useGetPlaceQuery(uuid);

	const { materials } = place;

	return (
		<InstancePageWrapper instance={place}>
			{materials?.length > 0 && (
				<InstanceFacet labelText="Materials as setting">
					<MaterialsList materials={materials} />
				</InstanceFacet>
			)}
		</InstancePageWrapper>
	);
};

export default Place;
