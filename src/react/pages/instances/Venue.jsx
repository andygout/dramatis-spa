import { useParams } from 'react-router';

import { InstanceFacet, InstanceLink, InstanceLinksList, ProductionsList } from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';
import { useGetVenueQuery } from '../../../redux/slices/api.js';

const Venue = () => {

	const { uuid } = useParams();

	const { data: venue = {} } = useGetVenueQuery(uuid);

	const { surVenue, subVenues, productions } = venue;

	return (
		<InstancePageWrapper instance={venue}>

			{
				surVenue && (
					<InstanceFacet labelText='Part of'>

						<InstanceLink instance={surVenue} />

					</InstanceFacet>
				)
			}

			{
				subVenues?.length > 0 && (
					<InstanceFacet labelText='Comprises'>

						<InstanceLinksList instances={subVenues} />

					</InstanceFacet>
				)
			}

			{
				productions?.length > 0 && (
					<InstanceFacet labelText='Productions'>

						<ProductionsList productions={productions} />

					</InstanceFacet>
				)
			}

		</InstancePageWrapper>
	);

};

export default Venue;
