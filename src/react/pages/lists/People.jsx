import { useGetPeopleQuery } from '../../../redux/slices/api.js';
import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const People = () => {
	const { data: people = [] } = useGetPeopleQuery();

	return (
		<ListPageWrapper pageTitleText="People">
			<InstanceLinksList instances={people} />
		</ListPageWrapper>
	);
};

export default People;
