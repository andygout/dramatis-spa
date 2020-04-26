import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { RelatedInstance } from '../../components';
import { InstanceWrapper } from '../../utils';

class Character extends React.Component {

	render () {

		const { character } = this.props;

		const playtexts = character.get('playtexts');
		const variantNames = character.get('variantNames');
		const productions = character.get('productions');

		return (
			<InstanceWrapper instance={character}>

				{
					playtexts && playtexts.size > 0 && (
						<RelatedInstance labelText='Playtexts' instance={playtexts} />
					)
				}

				{
					variantNames && variantNames.size > 0 && (
						<RelatedInstance labelText='Variant names' instance={variantNames} join />
					)
				}

				{
					productions && productions.size > 0 && (
						<RelatedInstance labelText='Productions' instance={productions} />
					)
				}

			</InstanceWrapper>
		);

	};

};

Character.propTypes = { character: ImmutablePropTypes.map.isRequired };

const mapStateToProps = state => ({ character: state.get('character') });

export default connect(mapStateToProps)(Character);
