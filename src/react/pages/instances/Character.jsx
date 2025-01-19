import { useParams } from 'react-router';

import {
	AppendedDepictions,
	AppendedPerformers,
	InstanceFacet,
	ListWrapper,
	MaterialLinkWithContext,
	ProductionLinkWithContext
} from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';
import { useGetCharacterQuery } from '../../../redux/slices/api.js';

const Character = () => {

	const { uuid } = useParams();

	const { data: character = {} } = useGetCharacterQuery(uuid);

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

export default Character;
