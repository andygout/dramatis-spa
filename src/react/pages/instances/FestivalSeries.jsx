import { useParams } from 'react-router';

import { InstanceFacet, InstanceLinksList } from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';
import { useGetFestivalSeriesQuery } from '../../../redux/slices/api.js';

const FestivalSeries = () => {

	const { uuid } = useParams();

	const { data: festivalSeries = {} } = useGetFestivalSeriesQuery(uuid);

	const { festivals } = festivalSeries;

	return (
		<InstancePageWrapper instance={festivalSeries}>

			{
				festivals?.length > 0 && (
					<InstanceFacet labelText='Comprises'>

						<InstanceLinksList instances={festivals} />

					</InstanceFacet>
				)
			}

		</InstancePageWrapper>
	);

};

export default FestivalSeries;
