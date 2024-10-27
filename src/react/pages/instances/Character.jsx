import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
	AppendedDepictions,
	AppendedPerformers,
	InstanceFacet,
	ListWrapper,
	MaterialLinkWithContext,
	ProductionLinkWithContext
} from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';

const Character = props => {

	const { character } = props;

	const { variantNamedDepictions, materials, variantNamedPortrayals, productions } = character;

	return (
		<InstancePageWrapper instance={character}>

			{
				variantNamedDepictions?.length > 0 && (
					<InstanceFacet labelText='Variant-named depictions'>

						<span className="fictional-name-text">

							{ variantNamedDepictions.join(' / ') }

						</span>

					</InstanceFacet>
				)
			}

			{
				materials?.length > 0 && (
					<InstanceFacet labelText='Materials'>

						<ListWrapper>

							{
								materials.map((material, index) =>
									<li key={index}>

										<MaterialLinkWithContext material={material} />

										{
											material.depictions?.length > 0 && (
												<AppendedDepictions depictions={material.depictions} />
											)
										}

									</li>
								)
							}

						</ListWrapper>

					</InstanceFacet>
				)
			}

			{
				variantNamedPortrayals?.length > 0 && (
					<InstanceFacet labelText='Variant-named portrayals'>

						<span className="fictional-name-text">

							{ variantNamedPortrayals.join(' / ') }

						</span>

					</InstanceFacet>
				)
			}

			{
				productions?.length > 0 && (
					<InstanceFacet labelText='Productions'>

						<ListWrapper>

							{
								productions.map((production, index) =>
									<li key={index}>

										<ProductionLinkWithContext production={production} />

										{
											production.performers?.length > 0 && (
												<AppendedPerformers performers={production.performers} />
											)
										}

									</li>
								)
							}

						</ListWrapper>

					</InstanceFacet>
				)
			}

		</InstancePageWrapper>
	);

};

Character.propTypes = {
	character: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	character: state.character
});

export default connect(mapStateToProps)(Character);
