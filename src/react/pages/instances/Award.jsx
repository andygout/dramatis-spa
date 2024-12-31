import { useParams } from 'react-router-dom';

import { InstanceFacet, InstanceLinksList } from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';
import { useGetAwardQuery } from '../../../redux/slices/api.js';

const Award = () => {

	const { uuid } = useParams();

	const { data: award = {} } = useGetAwardQuery(uuid);

	const { ceremonies } = award;

	return (
		<InstancePageWrapper instance={award}>

			{
				ceremonies?.length > 0 && (
					<InstanceFacet labelText='Ceremonies'>

						<InstanceLinksList instances={ceremonies} />

					</InstanceFacet>
				)
			}

		</InstancePageWrapper>
	);

};

export default Award;
