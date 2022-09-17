import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
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
	people: ImmutablePropTypes.list.isRequired
};

const mapStateToProps = state => ({
	people: state.get('people')
});

export default connect(mapStateToProps)(People);
