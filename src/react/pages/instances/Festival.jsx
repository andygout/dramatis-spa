import { useParams } from 'react-router-dom';

import { InstanceFacet, InstanceLink, ProductionsList } from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';
import { useGetFestivalQuery } from '../../../redux/slices/api.js';

const Festival = () => {

	const { uuid } = useParams();

	const { data: festival = {} } = useGetFestivalQuery(uuid);

	const { festivalSeries, productions } = festival;

	return (
		<InstancePageWrapper instance={festival}>

			{
				festivalSeries && (
					<InstanceFacet labelText='Festival series'>

						<InstanceLink instance={festivalSeries} />

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

export default Festival;
