import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { connect } from 'react-redux';

import {
	AppendedCoEntities,
	AppendedDate,
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
	ProductionLinkWithContext,
	ProductionsList
} from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';

const Person = props => {

	const { person } = props;

	const {
		materials,
		subsequentVersionMaterials,
		sourcingMaterials,
		rightsGrantorMaterials,
		materialProductions,
		subsequentVersionMaterialProductions,
		sourcingMaterialProductions,
		rightsGrantorMaterialProductions,
		producerProductions,
		castMemberProductions,
		creativeProductions,
		crewProductions,
		reviewCriticProductions,
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
				materialProductions?.length > 0 && (
					<InstanceFacet labelText='Productions of materials'>

						<ProductionsList productions={materialProductions} />

					</InstanceFacet>
				)
			}

			{
				subsequentVersionMaterialProductions?.length > 0 && (
					<InstanceFacet labelText='Productions of subsequent versions of their materials'>

						<ProductionsList productions={subsequentVersionMaterialProductions} />

					</InstanceFacet>
				)
			}

			{
				sourcingMaterialProductions?.length > 0 && (
					<InstanceFacet labelText='Productions of materials as source material writer'>

						<ProductionsList productions={sourcingMaterialProductions} />

					</InstanceFacet>
				)
			}

			{
				rightsGrantorMaterialProductions?.length > 0 && (
					<InstanceFacet labelText='Productions of materials as rights grantor'>

						<ProductionsList productions={rightsGrantorMaterialProductions} />

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
				reviewCriticProductions?.length > 0 && (
					<InstanceFacet labelText='Reviewed productions'>

						<ListWrapper>

							{
								reviewCriticProductions.map((reviewCriticProduction, index) =>
									<li key={index}>

										<ProductionLinkWithContext production={reviewCriticProduction} />

										{' — reviewed for '}

										<InstanceLink instance={reviewCriticProduction.review.publication} />

										{
											(reviewCriticProduction.review.date) && (
												<AppendedDate date={reviewCriticProduction.review.date} />
											)
										}

										{': '}

										<a
											href={reviewCriticProduction.review.url}
											target="_blank"
											rel="noopener noreferrer"
										>{'link'}</a>

									</li>
								)
							}

						</ListWrapper>

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
																								<>{' for '}</>
																								<CommaSeparatedMaterials
																									materials={nomination.materials}
																								/>
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
					<InstanceFacet labelText='Awards for subsequent versions of their material'>

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
																							<AppendedEntities
																								entities={nomination.entities}
																							/>
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
																								<>{' for '}</>
																								<CommaSeparatedMaterials
																									materials={nomination.materials}
																								/>
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
					<InstanceFacet labelText='Awards for materials as source material writer'>

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
																							<AppendedEntities
																								entities={nomination.entities}
																							/>
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
																								<>{' for '}</>
																								<CommaSeparatedMaterials
																									materials={nomination.materials}
																								/>
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
				rightsGrantorMaterialAwards?.length > 0 && (
					<InstanceFacet labelText='Awards for materials as rights grantor'>

						{
							rightsGrantorMaterialAwards.map((rightsGrantorMaterialAward, index) =>
								<Fragment key={index}>
									<InstanceLink instance={rightsGrantorMaterialAward} />

									<ListWrapper>

										{
											rightsGrantorMaterialAward.ceremonies.map((ceremony, index) =>
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
																						nomination.recipientRightsGrantorMaterials.length > 0 && (
																							<>
																								<>{': '}</>
																								<CommaSeparatedMaterials
																									materials={nomination.recipientRightsGrantorMaterials}
																								/>
																							</>
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
																								<>{' for '}</>
																								<CommaSeparatedMaterials
																									materials={nomination.materials}
																								/>
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
