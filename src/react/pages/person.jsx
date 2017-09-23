import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentWrapper from '../components/content-wrapper';
import SharedInstancePageComponents from '../components/shared-instance-page-components';

class Person extends Component {

	render () {

		const { person } = this.props;

		return (
			<div>

				<SharedInstancePageComponents instance={person} />

				{
					person.productions && person.productions.length ?
						<ContentWrapper labelText='Productions' instance={person.productions} /> :
						null
				}

			</div>
		);

	};

};

Person.propTypes = { person: PropTypes.object.isRequired };

const mapStateToProps = ({ person }) => ({ person });

export default connect(mapStateToProps)(Person);
