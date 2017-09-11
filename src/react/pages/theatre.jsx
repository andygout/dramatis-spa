import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentWrapper from '../components/content-wrapper';
import SharedInstancePageComponents from '../components/shared-instance-page-components';

class Theatre extends Component {

	render () {

		const { theatre } = this.props;

		return (
			<div>

				<SharedInstancePageComponents instance={theatre} />

				{
					theatre.productions && theatre.productions.length ?
						<ContentWrapper labelText='Productions' instance={theatre.productions} /> :
						null
				}

			</div>
		);

	};

};

Theatre.propTypes = { theatre: PropTypes.object.isRequired };

const mapStateToProps = ({ theatre }) => ({ theatre });

export default connect(mapStateToProps)(Theatre);
