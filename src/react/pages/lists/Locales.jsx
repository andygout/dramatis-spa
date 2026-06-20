import { useGetLocalesQuery } from '../../../redux/slices/api.js';
import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const Locales = () => {
	const { data: locales = [] } = useGetLocalesQuery();

	return (
		<ListPageWrapper pageTitleText="Locales">
			<InstanceLinksList instances={locales} />
		</ListPageWrapper>
	);
};

export default Locales;
