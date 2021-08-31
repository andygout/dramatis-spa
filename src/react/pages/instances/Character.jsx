import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceFacet, JoinedRoles, List } from '../../components';
import { InstanceWrapper } from '../../utils';

class Character extends React.Component {

	render () {

		const { character } = this.props;

		const variantNamedDepictions = character.get('variantNamedDepictions');
		const materials = character.get('materials');
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
					materials?.size > 0 && (
						<InstanceFacet labelText='Materials'>

							<List instances={materials} />

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
	character: PropTypes.instanceOf(Map).isRequired
};

const mapStateToProps = state => ({
	character: state.get('character')
});

export default connect(mapStateToProps)(Character);
