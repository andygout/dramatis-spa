import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { ProductionsList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const Productions = props => {

	const { productions } = props;

	return (
		<ListPageWrapper pageTitleText='Productions'>

			<ProductionsList productions={productions} />

		</ListPageWrapper>
	);

};

Productions.propTypes = {
	productions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	productions: state.productions
});

export default connect(mapStateToProps)(Productions);
