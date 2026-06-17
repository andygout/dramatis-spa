import { useGetPlacesQuery } from '../../../redux/slices/api.js';
import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const Places = () => {
	const { data: places = [] } = useGetPlacesQuery();

	return (
		<ListPageWrapper pageTitleText="Places">
			<InstanceLinksList instances={places} />
		</ListPageWrapper>
	);
};

export default Places;
