import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { ListWrapper } from '../../utils';

class Productions extends React.Component {

	render () {

		return (
			<ListWrapper
				instances={this.props.productions}
				pageTitleText='Productions'
			>
			</ListWrapper>
		);

	};

};

Productions.propTypes = { productions: ImmutablePropTypes.list.isRequired };

const mapStateToProps = state => ({ productions: state.get('productions') });

export default connect(mapStateToProps)(Productions);
