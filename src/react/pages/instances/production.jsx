import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import RelatedInstance from '../../components/related-instance';
import InstanceWrapper from '../../utils/instance-wrapper';

class Production extends Component {

	render () {

		const { production } = this.props;

		return (
			<InstanceWrapper instance={production}>

				{
					production.theatre ?
						<RelatedInstance labelText='Theatre' instance={production.theatre} /> :
						null
				}

				{
					production.playtext ?
						<RelatedInstance labelText='Playtext' instance={production.playtext} /> :
						null
				}

				{
					production.cast && production.cast.length ?
						<RelatedInstance labelText='Cast' instance={production.cast} /> :
						null
				}

			</InstanceWrapper>
		);

	};

};

Production.propTypes = { production: PropTypes.object.isRequired };

const mapStateToProps = ({ production }) => ({ production });

export default connect(mapStateToProps)(Production);
