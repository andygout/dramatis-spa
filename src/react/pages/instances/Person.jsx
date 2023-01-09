import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import {
	AppendedCoEntities,
	AppendedEmployerCompany,
	AppendedEntities,
	AppendedRoles,
	CommaSeparatedMaterials,
	CommaSeparatedProductions,
	CreativeProductionsList,
	CrewProductionsList,
	InstanceFacet,
	InstanceLink,
	ListWrapper,
	MaterialsList,
	ProducerProductionsList,
	ProductionLinkWithContext
} from '../../components';
import { InstancePageWrapper } from '../../page-wrappers';

const Person = props => {

	const { person } = props;

	const {
		materials,
		subsequentVersionMaterials,
		sourcingMaterials,
		rightsGrantorMaterials,
		producerProductions,
		castMemberProductions,
		creativeProductions,
		crewProductions,
		awards,
		subsequentVersionMaterialAwards,
		sourcingMaterialAwards,
		rightsGrantorMaterialAwards
	} = person;

	return (
		<InstancePageWrapper instance={person}>

			{
				materials?.length > 0 && (
					<InstanceFacet labelText='Materials'>

						<MaterialsList materials={materials} />

					</InstanceFacet>
				)
			}

			{
				subsequentVersionMaterials?.length > 0 && (
					<InstanceFacet labelText='Subsequent versions of their materials'>

						<MaterialsList materials={subsequentVersionMaterials} />

					</InstanceFacet>
				)
			}

			{
				sourcingMaterials?.length > 0 && (
					<InstanceFacet labelText='Materials as source material writer'>

						<MaterialsList materials={sourcingMaterials} />

					</InstanceFacet>
				)
			}

			{
				rightsGrantorMaterials?.length > 0 && (
					<InstanceFacet labelText='Materials as rights grantor'>

						<MaterialsList materials={rightsGrantorMaterials} />

					</InstanceFacet>
				)
			}

			{
				producerProductions?.length > 0 && (
					<InstanceFacet labelText='Productions as producer'>

						<ProducerProductionsList productions={producerProductions} />

					</InstanceFacet>
				)
			}

			{
				castMemberProductions?.length > 0 && (
					<InstanceFacet labelText='Productions as cast member'>

						<ListWrapper>

							{
								castMemberProductions.map((castMemberProduction, index) =>
									<li key={index}>

										<ProductionLinkWithContext production={castMemberProduction} />

										{
											castMemberProduction.roles?.length > 0 && (
												<AppendedRoles roles={castMemberProduction.roles} />
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
				creativeProductions?.length > 0 && (
					<InstanceFacet labelText='Productions as creative team member'>

						<CreativeProductionsList productions={creativeProductions} />

					</InstanceFacet>
				)
			}

			{
				crewProductions?.length > 0 && (
					<InstanceFacet labelText='Productions as crew member'>

						<CrewProductionsList productions={crewProductions} />

					</InstanceFacet>
				)
			}

			{
				awards?.length > 0 && (
					<InstanceFacet labelText='Awards'>

						{
							awards.map((award, index) =>
								<React.Fragment key={index}>
									<InstanceLink instance={award} />

									<ListWrapper>

										{
											award.ceremonies.map((ceremony, index) =>
												<li key={index}>
													<InstanceLink instance={ceremony} />{': '}

													{
														ceremony.categories
															.map((category, index) =>
																<React.Fragment key={index}>
																	{ category.name }{': '}

																	{
																		category.nominations
																			.map((nomination, index) =>
																				<React.Fragment key={index}>
																					<span className={nomination.isWinner ? 'nomination-winner-text' : ''}>
																						{nomination.type}
																					</span>

																					{
																						nomination.employerCompany && (
																							<AppendedEmployerCompany
																								employerCompany={nomination.employerCompany}
																							/>
																						)
																					}

																					{
																						nomination.coEntities.length > 0 && (
																							<AppendedCoEntities
																								coEntities={nomination.coEntities}
																							/>
																						)
																					}

																					{
																						nomination.productions.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{' for '}</React.Fragment>
																								<CommaSeparatedProductions
																									productions={nomination.productions}
																								/>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.productions.length > 0 &&
																						nomination.materials.length > 0 && (
																							<React.Fragment>{';'}</React.Fragment>
																						)
																					}

																					{
																						nomination.materials.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{' for '}</React.Fragment>
																								<CommaSeparatedMaterials
																									materials={nomination.materials}
																								/>
																							</React.Fragment>
																						)
																					}
																				</React.Fragment>
																			)
																			.reduce((prev, curr) => [prev, ', ', curr])
																	}
																</React.Fragment>
															)
															.reduce((prev, curr) => [prev, '; ', curr])
													}
												</li>
											)
										}

									</ListWrapper>
								</React.Fragment>
							)
						}

					</InstanceFacet>
				)
			}

			{
				subsequentVersionMaterialAwards?.length > 0 && (
					<InstanceFacet labelText='Awards for subsequent versions of their material'>

						{
							subsequentVersionMaterialAwards.map((subsequentVersionMaterialAward, index) =>
								<React.Fragment key={index}>
									<InstanceLink instance={subsequentVersionMaterialAward} />

									<ListWrapper>

										{
											subsequentVersionMaterialAward.ceremonies.map((ceremony, index) =>
												<li key={index}>
													<InstanceLink instance={ceremony} />{': '}

													{
														ceremony.categories
															.map((category, index) =>
																<React.Fragment key={index}>
																	{ category.name }{': '}

																	{
																		category.nominations
																			.map((nomination, index) =>
																				<React.Fragment key={index}>
																					<span className={nomination.isWinner ? 'nomination-winner-text' : ''}>
																						{nomination.type}
																					</span>

																					{
																						nomination.subsequentVersionMaterials.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{': '}</React.Fragment>
																								<CommaSeparatedMaterials
																									materials={nomination.subsequentVersionMaterials}
																								/>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.entities.length > 0 && (
																							<AppendedEntities
																								entities={nomination.entities}
																							/>
																						)
																					}

																					{
																						nomination.productions.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{' for '}</React.Fragment>
																								<CommaSeparatedProductions
																									productions={nomination.productions}
																								/>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.productions.length > 0 &&
																						nomination.materials.length > 0 && (
																							<React.Fragment>{';'}</React.Fragment>
																						)
																					}

																					{
																						nomination.materials.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{' for '}</React.Fragment>
																								<CommaSeparatedMaterials
																									materials={nomination.materials}
																								/>
																							</React.Fragment>
																						)
																					}
																				</React.Fragment>
																			)
																			.reduce((prev, curr) => [prev, ', ', curr])
																	}
																</React.Fragment>
															)
															.reduce((prev, curr) => [prev, '; ', curr])
													}
												</li>
											)
										}

									</ListWrapper>
								</React.Fragment>
							)
						}

					</InstanceFacet>
				)
			}

			{
				sourcingMaterialAwards?.length > 0 && (
					<InstanceFacet labelText='Awards for materials as source material writer'>

						{
							sourcingMaterialAwards.map((sourcingMaterialAward, index) =>
								<React.Fragment key={index}>
									<InstanceLink instance={sourcingMaterialAward} />

									<ListWrapper>

										{
											sourcingMaterialAward.ceremonies.map((ceremony, index) =>
												<li key={index}>
													<InstanceLink instance={ceremony} />{': '}

													{
														ceremony.categories
															.map((category, index) =>
																<React.Fragment key={index}>
																	{ category.name }{': '}

																	{
																		category.nominations
																			.map((nomination, index) =>
																				<React.Fragment key={index}>
																					<span className={nomination.isWinner ? 'nomination-winner-text' : ''}>
																						{nomination.type}
																					</span>

																					{
																						nomination.sourcingMaterials.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{': '}</React.Fragment>
																								<CommaSeparatedMaterials
																									materials={nomination.sourcingMaterials}
																								/>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.entities.length > 0 && (
																							<AppendedEntities
																								entities={nomination.entities}
																							/>
																						)
																					}

																					{
																						nomination.productions.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{' for '}</React.Fragment>
																								<CommaSeparatedProductions
																									productions={nomination.productions}
																								/>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.productions.length > 0 &&
																						nomination.materials.length > 0 && (
																							<React.Fragment>{';'}</React.Fragment>
																						)
																					}

																					{
																						nomination.materials.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{' for '}</React.Fragment>
																								<CommaSeparatedMaterials
																									materials={nomination.materials}
																								/>
																							</React.Fragment>
																						)
																					}
																				</React.Fragment>
																			)
																			.reduce((prev, curr) => [prev, ', ', curr])
																	}
																</React.Fragment>
															)
															.reduce((prev, curr) => [prev, '; ', curr])
													}
												</li>
											)
										}

									</ListWrapper>
								</React.Fragment>
							)
						}

					</InstanceFacet>
				)
			}

			{
				rightsGrantorMaterialAwards?.length > 0 && (
					<InstanceFacet labelText='Awards for materials as rights grantor'>

						{
							rightsGrantorMaterialAwards.map((rightsGrantorMaterialAward, index) =>
								<React.Fragment key={index}>
									<InstanceLink instance={rightsGrantorMaterialAward} />

									<ListWrapper>

										{
											rightsGrantorMaterialAward.ceremonies.map((ceremony, index) =>
												<li key={index}>
													<InstanceLink instance={ceremony} />{': '}

													{
														ceremony.categories
															.map((category, index) =>
																<React.Fragment key={index}>
																	{ category.name }{': '}

																	{
																		category.nominations
																			.map((nomination, index) =>
																				<React.Fragment key={index}>
																					<span className={nomination.isWinner ? 'nomination-winner-text' : ''}>
																						{nomination.type}
																					</span>

																					{
																						nomination.rightsGrantorMaterials.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{': '}</React.Fragment>
																								<CommaSeparatedMaterials
																									materials={nomination.rightsGrantorMaterials}
																								/>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.entities.length > 0 && (
																							<AppendedEntities
																								entities={nomination.entities}
																							/>
																						)
																					}

																					{
																						nomination.productions.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{' for '}</React.Fragment>
																								<CommaSeparatedProductions
																									productions={nomination.productions}
																								/>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.productions.length > 0 &&
																						nomination.materials.length > 0 && (
																							<React.Fragment>{';'}</React.Fragment>
																						)
																					}

																					{
																						nomination.materials.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{' for '}</React.Fragment>
																								<CommaSeparatedMaterials
																									materials={nomination.materials}
																								/>
																							</React.Fragment>
																						)
																					}
																				</React.Fragment>
																			)
																			.reduce((prev, curr) => [prev, ', ', curr])
																	}
																</React.Fragment>
															)
															.reduce((prev, curr) => [prev, '; ', curr])
													}
												</li>
											)
										}

									</ListWrapper>
								</React.Fragment>
							)
						}

					</InstanceFacet>
				)
			}

		</InstancePageWrapper>
	);

};

Person.propTypes = {
	person: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	person: state.person
});

export default connect(mapStateToProps)(Person);
