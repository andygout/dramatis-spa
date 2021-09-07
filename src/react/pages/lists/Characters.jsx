import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { ListWrapper } from '../../utils';

class Characters extends React.Component {

	render () {

		const { characters } = this.props;

		return (
			<ListWrapper
				instances={characters}
				pageTitleText='Characters'
			>
			</ListWrapper>
		);

	}

}

Characters.propTypes = {
	characters: PropTypes.instanceOf(List).isRequired
};

const mapStateToProps = state => ({
	characters: state.get('characters')
});

export default connect(mapStateToProps)(Characters);
