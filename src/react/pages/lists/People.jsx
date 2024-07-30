import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const People = props => {

	const { people } = props;

	return (
		<ListPageWrapper pageTitleText='People'>

			<InstanceLinksList instances={people} />

		</ListPageWrapper>
	);

};

People.propTypes = {
	people: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	people: state.people
});

export default connect(mapStateToProps)(People);
