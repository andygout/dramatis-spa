import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import RelatedInstance from '../../components/related-instance';
import InstanceWrapper from '../../utils/instance-wrapper';

class Theatre extends Component {

	render () {

		const { theatre } = this.props;

		return (
			<InstanceWrapper instance={theatre}>

				{
					theatre.productions && theatre.productions.length ?
						<RelatedInstance labelText='Productions' instance={theatre.productions} /> :
						null
				}

			</InstanceWrapper>
		);

	};

};

Theatre.propTypes = { theatre: PropTypes.object.isRequired };

const mapStateToProps = ({ theatre }) => ({ theatre });

export default connect(mapStateToProps)(Theatre);
