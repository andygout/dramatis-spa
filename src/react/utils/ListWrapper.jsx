import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { List, PageTitle } from '../components';

class ListWrapper extends React.Component {

	render () {

		const { pageTitleText, instances, children } = this.props;

		return (
			<React.Fragment>

				<PageTitle text={pageTitleText} />

				<List instances={instances} />

				{ children }

			</React.Fragment>
		);

	}

}

ListWrapper.propTypes = {
	pageTitleText: PropTypes.string.isRequired,
	instances: ImmutablePropTypes.list.isRequired,
	children: PropTypes.node
};

export default ListWrapper;
