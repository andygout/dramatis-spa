import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';
import { useGetAwardsQuery } from '../../../redux/slices/api.js';

const Awards = () => {

	const { data: awards = [] } = useGetAwardsQuery();

	return (
		<ListPageWrapper pageTitleText='Awards'>

			<InstanceLinksList instances={awards} />

		</ListPageWrapper>
	);

};

export default Awards;
