import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';
import { useGetCompaniesQuery } from '../../../redux/slices/api.js';

const Companies = () => {

	const { data: companies = [] } = useGetCompaniesQuery();

	return (
		<ListPageWrapper pageTitleText='Companies'>

			<InstanceLinksList instances={companies} />

		</ListPageWrapper>
	);

};

export default Companies;
