import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { ListWrapper } from '../../utils';

class Companies extends React.Component {

	render () {

		const { companies } = this.props;

		return (
			<ListWrapper
				instances={companies}
				pageTitleText='Companies'
			>
			</ListWrapper>
		);

	}

}

Companies.propTypes = {
	companies: PropTypes.instanceOf(List).isRequired
};

const mapStateToProps = state => ({
	companies: state.get('companies')
});

export default connect(mapStateToProps)(Companies);
