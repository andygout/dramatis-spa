import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import RelatedInstance from '../../components/related-instance';
import InstanceWrapper from '../../utils/instance-wrapper';

class Character extends Component {

	render () {

		const { character } = this.props;

		const { playtexts, variantNames, productions } = character;

		return (
			<InstanceWrapper instance={character}>

				{
					playtexts && playtexts.length
						? <RelatedInstance labelText='Playtexts' instance={playtexts} />
						: null
				}

				{
					variantNames && variantNames.length
						? <RelatedInstance labelText='Variant names' instance={variantNames} join />
						: null
				}

				{
					productions && productions.length
						? <RelatedInstance labelText='Productions' instance={productions} />
						: null
				}

			</InstanceWrapper>
		);

	};

};

Character.propTypes = { character: PropTypes.object.isRequired };

const mapStateToProps = ({ character }) => ({ character });

export default connect(mapStateToProps)(Character);
