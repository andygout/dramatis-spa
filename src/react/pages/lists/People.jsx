import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { ListWrapper } from '../../utils';

const People = props => {

	const { people } = props;

	return (
		<ListWrapper
			instances={people}
			pageTitleText='People'
		>
		</ListWrapper>
	);

};

People.propTypes = {
	people: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	people: state.people
});

export default connect(mapStateToProps)(People);
