import { useParams } from 'react-router-dom';

import { InstanceFacet, ProductionsList } from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';
import { useGetSeasonQuery } from '../../../redux/slices/api.js';

const Season = () => {

	const { uuid } = useParams();

	const { data: season = {} } = useGetSeasonQuery(uuid);

	const { productions } = season;

	return (
		<InstancePageWrapper instance={season}>

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

export default Season;
