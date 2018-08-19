import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentWrapper from '../../components/content-wrapper';
import InstanceWrapper from '../../utils/instance-wrapper';

class Production extends Component {

	render () {

		const { production } = this.props;

		return (
			<InstanceWrapper instance={production}>

				{production.theatre ? <ContentWrapper labelText='Theatre' instance={production.theatre} /> : null}

				{production.playtext ? <ContentWrapper labelText='Playtext' instance={production.playtext} /> : null}

				{
					production.cast && production.cast.length ?
						<ContentWrapper labelText='Cast' instance={production.cast} /> :
						null
				}

			</InstanceWrapper>
		);

	};

};

Production.propTypes = { production: PropTypes.object.isRequired };

const mapStateToProps = ({ production }) => ({ production });

export default connect(mapStateToProps)(Production);
