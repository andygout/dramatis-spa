import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import ListWrapper from '../../utils/list-wrapper';

class People extends React.Component {

	render () {

		return (
			<ListWrapper
				instances={this.props.people}
				pageTitleText='People'
			>
			</ListWrapper>
		);

	};

};

People.propTypes = { people: PropTypes.array.isRequired };

const mapStateToProps = ({ people }) => ({ people });

export default connect(mapStateToProps)(People);
