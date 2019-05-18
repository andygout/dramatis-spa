import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import ListWrapper from '../../utils/list-wrapper';

class Characters extends React.Component {

	render () {

		return (
			<ListWrapper
				instances={this.props.characters}
				pageTitleText='Characters'
			>
			</ListWrapper>
		);

	};

};

Characters.propTypes = { characters: ImmutablePropTypes.list.isRequired };

const mapStateToProps = state => ({ characters: state.get('characters') });

export default connect(mapStateToProps)(Characters);
