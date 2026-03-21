import { useGetCharactersQuery } from '../../../redux/slices/api.js';
import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const Characters = () => {
	const { data: characters = [] } = useGetCharactersQuery();

	return (
		<ListPageWrapper pageTitleText="Characters">
			<InstanceLinksList instances={characters} />
		</ListPageWrapper>
	);
};

export default Characters;
