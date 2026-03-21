import { useGetSeasonsQuery } from '../../../redux/slices/api.js';
import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const Seasons = () => {
	const { data: seasons = [] } = useGetSeasonsQuery();

	return (
		<ListPageWrapper pageTitleText="Seasons">
			<InstanceLinksList instances={seasons} />
		</ListPageWrapper>
	);
};

export default Seasons;
