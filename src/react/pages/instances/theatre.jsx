import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentWrapper from '../../components/content-wrapper';
import InstanceWrapper from '../../utils/instance-wrapper';

class Theatre extends Component {

	render () {

		const { theatre } = this.props;

		return (
			<InstanceWrapper instance={theatre}>

				{
					theatre.productions && theatre.productions.length ?
						<ContentWrapper labelText='Productions' instance={theatre.productions} /> :
						null
				}

			</InstanceWrapper>
		);

	};

};

Theatre.propTypes = { theatre: PropTypes.object.isRequired };

const mapStateToProps = ({ theatre }) => ({ theatre });

export default connect(mapStateToProps)(Theatre);
