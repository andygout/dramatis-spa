import PropTypes from 'prop-types';
import React from 'react';

import { PageTitle } from '../components';

const ListPageWrapper = props => {

	const { pageTitleText, children } = props;

	return (
		<React.Fragment>

			<PageTitle text={pageTitleText} />

			{ children }

		</React.Fragment>
	);

};

ListPageWrapper.propTypes = {
	pageTitleText: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default ListPageWrapper;
