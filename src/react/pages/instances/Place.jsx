import { useParams } from 'react-router';

import { useGetPlaceQuery } from '../../../redux/slices/api.js';
import { InstanceFacet, InstanceLinksList, MaterialsList } from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';

const Place = () => {
	const { uuid } = useParams();

	const { data: place = {} } = useGetPlaceQuery(uuid);

	const { surPlaces, subPlaces, materials } = place;

	return (
		<InstancePageWrapper instance={place}>
			{surPlaces?.length > 0 && (
				<InstanceFacet labelText="Is within (bounding boxes)">
					<InstanceLinksList instances={surPlaces} />
				</InstanceFacet>
			)}

			{subPlaces?.length > 0 && (
				<InstanceFacet labelText="Contains (bounding boxes)">
					<InstanceLinksList instances={subPlaces} />
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

export default Place;
