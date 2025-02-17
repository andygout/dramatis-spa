import { PageTitle } from '../components/index.js';

const ListPageWrapper = props => {

	const { pageTitleText, children } = props;

	return (
		<>

			<PageTitle text={pageTitleText} />

			{ children }

		</>
	);

};

export default ListPageWrapper;
