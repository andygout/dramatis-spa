import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { ListWrapper } from '../../utils';

class People extends React.Component {

	render () {

		const { people } = this.props;

		return (
			<ListWrapper
				instances={people}
				pageTitleText='People'
			>
			</ListWrapper>
		);

	}

}

People.propTypes = {
	people: PropTypes.instanceOf(List).isRequired
};

const mapStateToProps = state => ({
	people: state.get('people')
});

export default connect(mapStateToProps)(People);
