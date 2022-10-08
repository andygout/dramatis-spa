import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { getIn } from '../../../lib/object-interactions';
import { capitalise } from '../../../lib/strings';
import {
	AppendedFormatAndYear,
	AppendedWritingCredits,
	Entities,
	InstanceFacet,
	InstanceLink,
	List,
	Materials,
	Productions,
	WritingCredits
} from '../../components';
import { InstanceWrapper } from '../../utils';

const Material = props => {

	const { material } = props;

	const {
		format,
		year,
		writingCredits,
		surMaterial,
		subMaterials,
		characterGroups,
		originalVersionMaterial,
		subsequentVersionMaterials,
		productions,
		sourcingMaterials,
		sourcingMaterialProductions,
		awards,
		subsequentVersionMaterialAwards,
		sourcingMaterialAwards
	} = material;

	const instanceFacetSubheader = subheaderText =>
		<div className="instance-facet-subheader">{ subheaderText }</div>;

	return (
		<InstanceWrapper instance={material}>

			{
				format && (
					<InstanceFacet labelText='Format'>

						<React.Fragment>{ capitalise(format) }</React.Fragment>

					</InstanceFacet>
				)
			}

			{
				year && (
					<InstanceFacet labelText='Year'>

						<React.Fragment>{ year }</React.Fragment>

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

						<InstanceLink instance={surMaterial} />

						{
							(surMaterial.format || surMaterial.year) && (
								<AppendedFormatAndYear
									format={surMaterial.format}
									year={surMaterial.year}
								/>
							)
						}

						{
							surMaterial.writingCredits?.length > 0 && (
								<AppendedWritingCredits credits={surMaterial.writingCredits} />
							)
						}

					</InstanceFacet>
				)
			}

			{
				subMaterials?.length > 0 && (
					<InstanceFacet labelText='Comprises'>

						<List instances={subMaterials} />

					</InstanceFacet>
				)
			}

			{
				characterGroups?.length > 0 && (
					<InstanceFacet labelText='Characters'>

						{
							characterGroups.length === 1
								? (
									<React.Fragment>

										{
											Boolean(characterGroups[0].name) && (
												instanceFacetSubheader(characterGroups[0].name)
											)
										}

										<List instances={characterGroups[0].characters} />

									</React.Fragment>
								)
								: (
									<ul className="list list--no-bullets">

										{
											characterGroups.map((characterGroup, index) =>
												<li key={index} className="instance-facet-group">

													{
														Boolean(characterGroup.name) && (
															instanceFacetSubheader(characterGroup.name)
														)
													}

													<List instances={characterGroup.characters} />

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

						<InstanceLink instance={originalVersionMaterial} />

						{
							(originalVersionMaterial.format || originalVersionMaterial.year) && (
								<AppendedFormatAndYear
									format={originalVersionMaterial.format}
									year={originalVersionMaterial.year}
								/>
							)
						}

						{
							originalVersionMaterial.writingCredits?.length > 0 && (
								<AppendedWritingCredits credits={originalVersionMaterial.writingCredits} />
							)
						}

					</InstanceFacet>
				)
			}

			{
				subsequentVersionMaterials?.length > 0 && (
					<InstanceFacet labelText='Subsequent versions'>

						<List instances={subsequentVersionMaterials} />

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

			{
				sourcingMaterials?.length > 0 && (
					<InstanceFacet labelText='Materials as source material'>

						<List instances={sourcingMaterials} />

					</InstanceFacet>
				)
			}

			{
				sourcingMaterialProductions?.length > 0 && (
					<InstanceFacet labelText='Productions of materials as source material'>

						<List instances={sourcingMaterialProductions} />

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

									<ul className="list">

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
																						nomination.entities.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{': '}</React.Fragment>
																								<Entities
																									entities={nomination.entities}
																								/>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.productions.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{' for '}</React.Fragment>
																								<Productions
																									productions={nomination.productions}
																								/>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.productions.length > 0 &&
																						(nomination.recipientMaterial || nomination.coMaterials.length > 0) && (
																							<React.Fragment>{';'}</React.Fragment>
																						)
																					}

																					{
																						nomination.recipientMaterial && (
																							<React.Fragment>
																								<React.Fragment>{' (for '}</React.Fragment>
																								<InstanceLink instance={nomination.recipientMaterial} />
																								{
																									(getIn(nomination, ['recipientMaterial', 'format']) || getIn(nomination, ['recipientMaterial', 'year'])) && (
																										<AppendedFormatAndYear
																											format={getIn(nomination, ['recipientMaterial', 'format'])}
																											year={getIn(nomination, ['recipientMaterial', 'year'])}
																										/>
																									)
																								}
																								<React.Fragment>{')'}</React.Fragment>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.recipientMaterial &&
																						nomination.coMaterials.length > 0 && (
																							<React.Fragment>{';'}</React.Fragment>
																						)
																					}

																					{
																						nomination.coMaterials.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{' (with '}</React.Fragment>
																								<Materials
																									materials={nomination.coMaterials}
																								/>
																								<React.Fragment>{')'}</React.Fragment>
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

									</ul>
								</React.Fragment>
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
								<React.Fragment key={index}>
									<InstanceLink instance={subsequentVersionMaterialAward} />

									<ul className="list">

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
																								<Materials
																									materials={nomination.subsequentVersionMaterials}
																								/>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.entities.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{': '}</React.Fragment>
																								<Entities
																									entities={nomination.entities}
																								/>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.productions.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{' for '}</React.Fragment>
																								<Productions
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
																								<React.Fragment>{' (with '}</React.Fragment>
																								<Materials
																									materials={nomination.materials}
																								/>
																								<React.Fragment>{')'}</React.Fragment>
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

									</ul>
								</React.Fragment>
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
								<React.Fragment key={index}>
									<InstanceLink instance={sourcingMaterialAward} />

									<ul className="list">

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
																								<Materials
																									materials={nomination.sourcingMaterials}
																								/>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.entities.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{': '}</React.Fragment>
																								<Entities
																									entities={nomination.entities}
																								/>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.productions.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{' for '}</React.Fragment>
																								<Productions
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
																								<React.Fragment>{' (with '}</React.Fragment>
																								<Materials
																									materials={nomination.materials}
																								/>
																								<React.Fragment>{')'}</React.Fragment>
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

									</ul>
								</React.Fragment>
							)
						}

					</InstanceFacet>
				)
			}

		</InstanceWrapper>
	);

};

Material.propTypes = {
	material: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	material: state.material
});

export default connect(mapStateToProps)(Material);
