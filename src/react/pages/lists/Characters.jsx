import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
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

	};

};

Characters.propTypes = { characters: ImmutablePropTypes.list.isRequired };

const mapStateToProps = state => ({ characters: state.get('characters') });

export default connect(mapStateToProps)(Characters);
