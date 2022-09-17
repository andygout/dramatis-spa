import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { ListWrapper } from '../../utils';

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
	productions: ImmutablePropTypes.list.isRequired
};

const mapStateToProps = state => ({
	productions: state.get('productions')
});

export default connect(mapStateToProps)(Productions);
