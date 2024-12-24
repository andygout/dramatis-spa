import { MaterialsList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';
import { useGetMaterialsQuery } from '../../../redux/slices/api.js';

const Materials = () => {

	const { data: materials = [] } = useGetMaterialsQuery();

	return (
		<ListPageWrapper pageTitleText='Materials'>

			<MaterialsList materials={materials} />

		</ListPageWrapper>
	);

};

export default Materials;
