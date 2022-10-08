import PropTypes from 'prop-types';
import React from 'react';

import { List, PageTitle } from '../components';

const ListWrapper = props => {

	const { pageTitleText, instances } = props;

	return (
		<React.Fragment>

			<PageTitle text={pageTitleText} />

			<List instances={instances} />

		</React.Fragment>
	);

};

ListWrapper.propTypes = {
	pageTitleText: PropTypes.string.isRequired,
	instances: PropTypes.array.isRequired
};

export default ListWrapper;
