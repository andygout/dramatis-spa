import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { InstanceFacet, JoinedRoles, List } from '../../components';
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
					playtexts?.size > 0 && (
						<InstanceFacet labelText='Playtexts'>

							<List instances={playtexts} />

						</InstanceFacet>
					)
				}

				{
					variantNames?.size > 0 && (
						<InstanceFacet labelText='Variant names'>

							<JoinedRoles instances={variantNames} />

						</InstanceFacet>
					)
				}

				{
					productions?.size > 0 && (
						<InstanceFacet labelText='Productions'>

							<List instances={productions} />

						</InstanceFacet>
					)
				}

			</InstanceWrapper>
		);

	}

}

Character.propTypes = {
	character: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	character: state.get('character')
});

export default connect(mapStateToProps)(Character);
