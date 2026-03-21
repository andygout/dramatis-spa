import { useGetFestivalSeriesesQuery } from '../../../redux/slices/api.js';
import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const FestivalSerieses = () => {
	const { data: festivalSerieses = [] } = useGetFestivalSeriesesQuery();

	return (
		<ListPageWrapper pageTitleText="Festival serieses">
			<InstanceLinksList instances={festivalSerieses} />
		</ListPageWrapper>
	);
};

export default FestivalSerieses;
