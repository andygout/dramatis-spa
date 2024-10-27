import PropTypes from 'prop-types';

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

ListPageWrapper.propTypes = {
	pageTitleText: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default ListPageWrapper;
