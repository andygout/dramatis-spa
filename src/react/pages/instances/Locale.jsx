import { useParams } from 'react-router';

import { useGetLocaleQuery } from '../../../redux/slices/api.js';
import { InstanceFacet, MaterialsList } from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';

const Locale = () => {
	const { uuid } = useParams();

	const { data: locale = {} } = useGetLocaleQuery(uuid);

	const { materials } = locale;

	return (
		<InstancePageWrapper instance={locale}>
			{materials?.length > 0 && (
				<InstanceFacet labelText="Materials as setting">
					<MaterialsList materials={materials} />
				</InstanceFacet>
			)}
		</InstancePageWrapper>
	);
};

export default Locale;
