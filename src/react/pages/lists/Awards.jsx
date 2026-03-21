import { useGetAwardsQuery } from '../../../redux/slices/api.js';
import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const Awards = () => {
	const { data: awards = [] } = useGetAwardsQuery();

	return (
		<ListPageWrapper pageTitleText="Awards">
			<InstanceLinksList instances={awards} />
		</ListPageWrapper>
	);
};

export default Awards;
