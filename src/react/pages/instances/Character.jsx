import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { InstanceFacet, JoinedRoles, List } from '../../components';
import { InstanceWrapper } from '../../utils';

class Character extends React.Component {

	render () {

		const { character } = this.props;

		const variantNamedDepictions = character.get('variantNamedDepictions');
		const playtexts = character.get('playtexts');
		const variantNamedPortrayals = character.get('variantNamedPortrayals');
		const productions = character.get('productions');

		return (
			<InstanceWrapper instance={character}>

				{
					variantNamedDepictions?.size > 0 && (
						<InstanceFacet labelText='Variant named depictions'>

							<JoinedRoles instances={variantNamedDepictions} />

						</InstanceFacet>
					)
				}

				{
					playtexts?.size > 0 && (
						<InstanceFacet labelText='Playtexts'>

							<List instances={playtexts} />

						</InstanceFacet>
					)
				}

				{
					variantNamedPortrayals?.size > 0 && (
						<InstanceFacet labelText='Variant named portrayals'>

							<JoinedRoles instances={variantNamedPortrayals} />

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
