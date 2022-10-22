import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { ListWrapper } from '../../wrappers';

const Productions = props => {

	const { productions } = props;

	return (
		<ListWrapper
			instances={productions}
			pageTitleText='Productions'
		>
		</ListWrapper>
	);

};

Productions.propTypes = {
	productions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	productions: state.productions
});

export default connect(mapStateToProps)(Productions);
