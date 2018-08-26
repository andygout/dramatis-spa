import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import RelatedInstance from '../../components/related-instance';
import InstanceWrapper from '../../utils/instance-wrapper';

class Production extends Component {

	render () {

		const { production } = this.props;

		const { theatre, playtext, cast } = production;

		return (
			<InstanceWrapper instance={production}>

				{
					theatre
						? <RelatedInstance labelText='Theatre' instance={theatre} />
						: null
				}

				{
					playtext
						? <RelatedInstance labelText='Playtext' instance={playtext} />
						: null
				}

				{
					cast && cast.length
						? <RelatedInstance labelText='Cast' instance={cast} />
						: null
				}

			</InstanceWrapper>
		);

	};

};

Production.propTypes = { production: PropTypes.object.isRequired };

const mapStateToProps = ({ production }) => ({ production });

export default connect(mapStateToProps)(Production);
