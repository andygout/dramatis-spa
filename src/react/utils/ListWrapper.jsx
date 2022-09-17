import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

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
	instances: ImmutablePropTypes.list.isRequired
};

export default ListWrapper;
