import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import ListWrapper from '../../utils/list-wrapper';

class Theatres extends React.Component {

	render () {

		return (
			<ListWrapper
				instances={this.props.theatres}
				pageTitleText='Theatres'
			>
			</ListWrapper>
		);

	};

};

Theatres.propTypes = { theatres: ImmutablePropTypes.list.isRequired };

const mapStateToProps = state => ({ theatres: state.get('theatres') });

export default connect(mapStateToProps)(Theatres);
