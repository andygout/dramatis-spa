import { useGetTimesQuery } from '../../../redux/slices/api.js';
import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const Times = () => {
	const { data: times = [] } = useGetTimesQuery();

	return (
		<ListPageWrapper pageTitleText="Times">
			<InstanceLinksList instances={times} />
		</ListPageWrapper>
	);
};

export default Times;
