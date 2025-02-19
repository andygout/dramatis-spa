import { Fragment } from 'react';
import { useParams } from 'react-router';

import { capitalise } from '../../../lib/strings.js';
import {
	CharactersList,
	CommaSeparatedMaterials,
	CommaSeparatedProductions,
	Entities,
	InstanceFacet,
	InstanceLink,
	ListWrapper,
	MaterialLinkWithContext,
	MaterialsList,
	ProductionsList,
	WritingCredits
} from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';
import { useGetMaterialQuery } from '../../../redux/slices/api.js';

const Material = () => {

	const { uuid } = useParams();

	const { data: material = {} } = useGetMaterialQuery(uuid);

	const renderMaterial = material => {

		const {
			format,
			year,
			writingCredits,
			surMaterial,
			subMaterials,
			characterGroups,
			originalVersionMaterial,
			subsequentVersionMaterials,
			sourcingMaterials,
			productions,
			subsequentVersionMaterialProductions,
			sourcingMaterialProductions,
			awards,
			subsequentVersionMaterialAwards,
			sourcingMaterialAwards
		} = material;

		return (
			<>

				{
					format && (
						<InstanceFacet labelText='Format'>

							<>{ capitalise(format) }</>

						</InstanceFacet>
					)
				}

				{
					year && (
						<InstanceFacet labelText='Year'>

							<>{ year }</>

						</InstanceFacet>
					)
				}

				{
					writingCredits?.length > 0 && (
						<InstanceFacet labelText='Writers'>

							<WritingCredits credits={writingCredits} isAppendage={false} />

						</InstanceFacet>
					)
				}

				{
					surMaterial && (
						<InstanceFacet labelText='Part of'>

							<div className="nested-instance">

								<InstanceFacet labelText='Material'>

									<InstanceLink instance={surMaterial} />

									{
										surMaterial.subtitle && (
											<p>{ surMaterial.subtitle }</p>
										)
									}

								</InstanceFacet>

								{
									renderMaterial(surMaterial)
								}

							</div>

						</InstanceFacet>
					)
				}

				{
					subMaterials?.length > 0 && (
						<InstanceFacet labelText='Comprises'>

						{
							subMaterials
								.map((subMaterial, index) =>
									<div key={index} className="nested-instance">

										<InstanceFacet labelText='Material'>

											<InstanceLink instance={subMaterial} />

											{
												subMaterial.subtitle && (
													<p>{ subMaterial.subtitle }</p>
												)
											}

										</InstanceFacet>

										{
											renderMaterial(subMaterial)
										}

									</div>
								)
						}

						</InstanceFacet>
					)
				}

				{
					characterGroups?.length > 0 && (
						<InstanceFacet labelText='Characters'>

							{
								characterGroups.length === 1
									? (
										<>

											{
												Boolean(characterGroups[0].name) && (
													<div className="instance-facet-subheader">

														{ characterGroups[0].name }

													</div>
												)
											}

											<CharactersList characters={characterGroups[0].characters} />

										</>
									)
									: (
										<ul className="list list--no-bullets">

											{
												characterGroups.map((characterGroup, index) =>
													<li key={index} className="instance-facet-group">

														{
															Boolean(characterGroup.name) && (
																<div className="instance-facet-subheader">

																	{ characterGroup.name }

																</div>
															)
														}

														<CharactersList characters={characterGroup.characters} />

													</li>
												)
											}

										</ul>
									)
							}

						</InstanceFacet>
					)
				}

				{
					originalVersionMaterial && (
						<InstanceFacet labelText='Original version'>

							<MaterialLinkWithContext material={originalVersionMaterial} />

						</InstanceFacet>
					)
				}

				{
					subsequentVersionMaterials?.length > 0 && (
						<InstanceFacet labelText='Subsequent versions'>

							<MaterialsList materials={subsequentVersionMaterials} />

						</InstanceFacet>
					)
				}

				{
					sourcingMaterials?.length > 0 && (
						<InstanceFacet labelText='Materials as source material'>

							<MaterialsList materials={sourcingMaterials} />

						</InstanceFacet>
					)
				}

				{
					productions?.length > 0 && (
						<InstanceFacet labelText='Productions'>

							<ProductionsList productions={productions} />

						</InstanceFacet>
					)
				}

				{
					subsequentVersionMaterialProductions?.length > 0 && (
						<InstanceFacet labelText='Productions of subsequent versions'>

							<ProductionsList productions={subsequentVersionMaterialProductions} />

						</InstanceFacet>
					)
				}

				{
					sourcingMaterialProductions?.length > 0 && (
						<InstanceFacet labelText='Productions of materials as source material'>

							<ProductionsList productions={sourcingMaterialProductions} />

						</InstanceFacet>
					)
				}

				{
					awards?.length > 0 && (
						<InstanceFacet labelText='Awards'>

							{
								awards.map((award, index) =>
									<Fragment key={index}>
										<InstanceLink instance={award} />

										<ListWrapper>

											{
												award.ceremonies.map((ceremony, index) =>
													<li key={index}>
														<InstanceLink instance={ceremony} />{': '}

														{
															ceremony.categories
																.map((category, index) =>
																	<Fragment key={index}>
																		{ category.name }{': '}

																		{
																			category.nominations
																				.map((nomination, index) =>
																					<Fragment key={index}>
																						<span className={nomination.isWinner ? 'nomination-winner-text' : ''}>
																							{nomination.type}
																						</span>

																						{
																							nomination.entities.length > 0 && (
																								<>
																									<>{': '}</>
																									<Entities
																										entities={nomination.entities}
																									/>
																								</>
																							)
																						}

																						{
																							nomination.productions.length > 0 && (
																								<>
																									<>{' for '}</>
																									<CommaSeparatedProductions
																										productions={nomination.productions}
																									/>
																								</>
																							)
																						}

																						{
																							nomination.productions.length > 0 &&
																							(nomination.recipientMaterials.length > 0 || nomination.coMaterials.length > 0) && (
																								<>{';'}</>
																							)
																						}

																						{
																							nomination.recipientMaterials.length > 0 && (
																								<>
																									<>{' (for '}</>
																									<CommaSeparatedMaterials
																										materials={nomination.recipientMaterials}
																									/>
																									<>{')'}</>
																								</>
																							)
																						}

																						{
																							nomination.recipientMaterials.length > 0 &&
																							nomination.coMaterials.length > 0 && (
																								<>{';'}</>
																							)
																						}

																						{
																							nomination.coMaterials.length > 0 && (
																								<>
																									<>{' (with '}</>
																									<CommaSeparatedMaterials
																										materials={nomination.coMaterials}
																									/>
																									<>{')'}</>
																								</>
																							)
																						}
																					</Fragment>
																				)
																				.reduce((accumulator, currentValue) => [accumulator, ', ', currentValue])
																		}
																	</Fragment>
																)
																.reduce((accumulator, currentValue) => [accumulator, '; ', currentValue])
														}
													</li>
												)
											}

										</ListWrapper>
									</Fragment>
								)
							}

						</InstanceFacet>
					)
				}

				{
					subsequentVersionMaterialAwards?.length > 0 && (
						<InstanceFacet labelText='Awards for subsequent versions'>

							{
								subsequentVersionMaterialAwards.map((subsequentVersionMaterialAward, index) =>
									<Fragment key={index}>
										<InstanceLink instance={subsequentVersionMaterialAward} />

										<ListWrapper>

											{
												subsequentVersionMaterialAward.ceremonies.map((ceremony, index) =>
													<li key={index}>
														<InstanceLink instance={ceremony} />{': '}

														{
															ceremony.categories
																.map((category, index) =>
																	<Fragment key={index}>
																		{ category.name }{': '}

																		{
																			category.nominations
																				.map((nomination, index) =>
																					<Fragment key={index}>
																						<span className={nomination.isWinner ? 'nomination-winner-text' : ''}>
																							{nomination.type}
																						</span>

																						{
																							nomination.recipientSubsequentVersionMaterials.length > 0 && (
																								<>
																									<>{': '}</>
																									<CommaSeparatedMaterials
																										materials={nomination.recipientSubsequentVersionMaterials}
																									/>
																								</>
																							)
																						}

																						{
																							nomination.entities.length > 0 && (
																								<>
																									<>{': '}</>
																									<Entities
																										entities={nomination.entities}
																									/>
																								</>
																							)
																						}

																						{
																							nomination.productions.length > 0 && (
																								<>
																									<>{' for '}</>
																									<CommaSeparatedProductions
																										productions={nomination.productions}
																									/>
																								</>
																							)
																						}

																						{
																							nomination.productions.length > 0 &&
																							nomination.materials.length > 0 && (
																								<>{';'}</>
																							)
																						}

																						{
																							nomination.materials.length > 0 && (
																								<>
																									<>{' (with '}</>
																									<CommaSeparatedMaterials
																										materials={nomination.materials}
																									/>
																									<>{')'}</>
																								</>
																							)
																						}
																					</Fragment>
																				)
																				.reduce((accumulator, currentValue) => [accumulator, ', ', currentValue])
																		}
																	</Fragment>
																)
																.reduce((accumulator, currentValue) => [accumulator, '; ', currentValue])
														}
													</li>
												)
											}

										</ListWrapper>
									</Fragment>
								)
							}

						</InstanceFacet>
					)
				}

				{
					sourcingMaterialAwards?.length > 0 && (
						<InstanceFacet labelText='Awards for materials as source material'>

							{
								sourcingMaterialAwards.map((sourcingMaterialAward, index) =>
									<Fragment key={index}>
										<InstanceLink instance={sourcingMaterialAward} />

										<ListWrapper>

											{
												sourcingMaterialAward.ceremonies.map((ceremony, index) =>
													<li key={index}>
														<InstanceLink instance={ceremony} />{': '}

														{
															ceremony.categories
																.map((category, index) =>
																	<Fragment key={index}>
																		{ category.name }{': '}

																		{
																			category.nominations
																				.map((nomination, index) =>
																					<Fragment key={index}>
																						<span className={nomination.isWinner ? 'nomination-winner-text' : ''}>
																							{nomination.type}
																						</span>

																						{
																							nomination.recipientSourcingMaterials.length > 0 && (
																								<>
																									<>{': '}</>
																									<CommaSeparatedMaterials
																										materials={nomination.recipientSourcingMaterials}
																									/>
																								</>
																							)
																						}

																						{
																							nomination.entities.length > 0 && (
																								<>
																									<>{': '}</>
																									<Entities
																										entities={nomination.entities}
																									/>
																								</>
																							)
																						}

																						{
																							nomination.productions.length > 0 && (
																								<>
																									<>{' for '}</>
																									<CommaSeparatedProductions
																										productions={nomination.productions}
																									/>
																								</>
																							)
																						}

																						{
																							nomination.productions.length > 0 &&
																							nomination.materials.length > 0 && (
																								<>{';'}</>
																							)
																						}

																						{
																							nomination.materials.length > 0 && (
																								<>
																									<>{' (with '}</>
																									<CommaSeparatedMaterials
																										materials={nomination.materials}
																									/>
																									<>{')'}</>
																								</>
																							)
																						}
																					</Fragment>
																				)
																				.reduce((accumulator, currentValue) => [accumulator, ', ', currentValue])
																		}
																	</Fragment>
																)
																.reduce((accumulator, currentValue) => [accumulator, '; ', currentValue])
														}
													</li>
												)
											}

										</ListWrapper>
									</Fragment>
								)
							}

						</InstanceFacet>
					)
				}

			</>
		);

	};

	return (
		<InstancePageWrapper instance={material}>

			{
				renderMaterial(material)
			}

		</InstancePageWrapper>
	);

};

export default Material;
