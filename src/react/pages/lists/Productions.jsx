import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { ListWrapper } from '../../utils';

class Productions extends React.Component {

	render () {

		const { productions } = this.props;

		return (
			<ListWrapper
				instances={productions}
				pageTitleText='Productions'
			>
			</ListWrapper>
		);

	}

}

Productions.propTypes = {
	productions: PropTypes.instanceOf(List).isRequired
};

const mapStateToProps = state => ({
	productions: state.get('productions')
});

export default connect(mapStateToProps)(Productions);
