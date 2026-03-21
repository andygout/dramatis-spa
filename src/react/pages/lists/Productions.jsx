import { useGetProductionsQuery } from '../../../redux/slices/api.js';
import { ProductionsList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const Productions = () => {
	const { data: productions = [] } = useGetProductionsQuery();

	return (
		<ListPageWrapper pageTitleText="Productions">
			<ProductionsList productions={productions} />
		</ListPageWrapper>
	);
};

export default Productions;
