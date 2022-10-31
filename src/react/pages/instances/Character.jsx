import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceFacet, List } from '../../components';
import { InstanceWrapper } from '../../wrappers';

const Character = props => {

	const { character } = props;

	const {
		variantNamedDepictions,
		materials,
		variantNamedPortrayals,
		productions
	} = character;

	return (
		<InstanceWrapper instance={character}>

			{
				variantNamedDepictions?.length > 0 && (
					<InstanceFacet labelText='Variant named depictions'>

						<span className="fictional-name-text">

							{ variantNamedDepictions.join(' / ') }

						</span>

					</InstanceFacet>
				)
			}

			{
				materials?.length > 0 && (
					<InstanceFacet labelText='Materials'>

						<List instances={materials} />

					</InstanceFacet>
				)
			}

			{
				variantNamedPortrayals?.length > 0 && (
					<InstanceFacet labelText='Variant named portrayals'>

						<span className="fictional-name-text">

							{ variantNamedPortrayals.join(' / ') }

						</span>

					</InstanceFacet>
				)
			}

			{
				productions?.length > 0 && (
					<InstanceFacet labelText='Productions'>

						<List instances={productions} />

					</InstanceFacet>
				)
			}

		</InstanceWrapper>
	);

};

Character.propTypes = {
	character: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	character: state.character
});

export default connect(mapStateToProps)(Character);
