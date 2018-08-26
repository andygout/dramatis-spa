import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import RelatedInstance from '../../components/related-instance';
import InstanceWrapper from '../../utils/instance-wrapper';

class Person extends Component {

	render () {

		const { person } = this.props;

		const { productions } = person;

		return (
			<InstanceWrapper instance={person}>

				{
					productions && productions.length
						? <RelatedInstance labelText='Productions' instance={productions} />
						: null
				}

			</InstanceWrapper>
		);

	};

};

Person.propTypes = { person: PropTypes.object.isRequired };

const mapStateToProps = ({ person }) => ({ person });

export default connect(mapStateToProps)(Person);
