import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

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

class Material extends React.Component {

	render () {

		const { material } = this.props;

		const format = material.get('format');
		const year = material.get('year');
		const writingCredits = material.get('writingCredits');
		const surMaterial = material.get('surMaterial');
		const subMaterials = material.get('subMaterials');
		const characterGroups = material.get('characterGroups');
		const originalVersionMaterial = material.get('originalVersionMaterial');
		const subsequentVersionMaterials = material.get('subsequentVersionMaterials');
		const productions = material.get('productions');
		const sourcingMaterials = material.get('sourcingMaterials');
		const sourcingMaterialProductions = material.get('sourcingMaterialProductions');
		const awards = material.get('awards');
		const subsequentVersionMaterialAwards = material.get('subsequentVersionMaterialAwards');
		const sourcingMaterialAwards = material.get('sourcingMaterialAwards');

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
					writingCredits?.size > 0 && (
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
								(surMaterial.get('format') || surMaterial.get('year')) && (
									<AppendedFormatAndYear
										format={surMaterial.get('format')}
										year={surMaterial.get('year')}
									/>
								)
							}

							{
								surMaterial.get('writingCredits')?.size > 0 && (
									<AppendedWritingCredits credits={surMaterial.get('writingCredits')} />
								)
							}

						</InstanceFacet>
					)
				}

				{
					subMaterials?.size > 0 && (
						<InstanceFacet labelText='Comprises'>

							<List instances={subMaterials} />

						</InstanceFacet>
					)
				}

				{
					characterGroups?.size > 0 && (
						<InstanceFacet labelText='Characters'>

							{
								characterGroups.size === 1
									? (
										<React.Fragment>

											{
												Boolean(characterGroups.first().get('name')) && (
													instanceFacetSubheader(characterGroups.first().get('name'))
												)
											}

											<List instances={characterGroups.first().get('characters')} />

										</React.Fragment>
									)
									: (
										<ul className="list list--no-bullets">

											{
												characterGroups.map((characterGroup, index) =>
													<li key={index} className="instance-facet-group">

														{
															Boolean(characterGroup.get('name')) && (
																instanceFacetSubheader(characterGroup.get('name'))
															)
														}

														<List instances={characterGroup.get('characters')} />

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
								(originalVersionMaterial.get('format') || originalVersionMaterial.get('year')) && (
									<AppendedFormatAndYear
										format={originalVersionMaterial.get('format')}
										year={originalVersionMaterial.get('year')}
									/>
								)
							}

							{
								originalVersionMaterial.get('writingCredits')?.size > 0 && (
									<AppendedWritingCredits credits={originalVersionMaterial.get('writingCredits')} />
								)
							}

						</InstanceFacet>
					)
				}

				{
					subsequentVersionMaterials?.size > 0 && (
						<InstanceFacet labelText='Subsequent versions'>

							<List instances={subsequentVersionMaterials} />

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

				{
					sourcingMaterials?.size > 0 && (
						<InstanceFacet labelText='Materials as source material'>

							<List instances={sourcingMaterials} />

						</InstanceFacet>
					)
				}

				{
					sourcingMaterialProductions?.size > 0 && (
						<InstanceFacet labelText='Productions of materials as source material'>

							<List instances={sourcingMaterialProductions} />

						</InstanceFacet>
					)
				}

				{
					awards?.size > 0 && (
						<InstanceFacet labelText='Awards'>

							{
								awards.map((award, index) =>
									<React.Fragment key={index}>
										<InstanceLink instance={award} />

										<ul className="list">

											{
												award.get('ceremonies').map((ceremony, index) =>
													<li key={index}>
														<InstanceLink instance={ceremony} />{': '}

														{
															ceremony.get('categories')
																.map((category, index) =>
																	<React.Fragment key={index}>
																		{ category.get('name') }{': '}

																		{
																			category.get('nominations')
																				.map((nomination, index) =>
																					<React.Fragment key={index}>
																						<span className={nomination.get('isWinner') ? 'nomination-winner-text' : ''}>
																							{nomination.get('type')}
																						</span>

																						{
																							nomination.get('entities').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{': '}</React.Fragment>
																									<Entities
																										entities={nomination.get('entities')}
																									/>
																								</React.Fragment>
																							)
																						}

																						{
																							nomination.get('productions').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{' for '}</React.Fragment>
																									<Productions
																										productions={nomination.get('productions')}
																									/>
																								</React.Fragment>
																							)
																						}

																						{
																							nomination.get('productions').size > 0 &&
																							(nomination.get('recipientMaterial') || nomination.get('coMaterials').size > 0) && (
																								<React.Fragment>{';'}</React.Fragment>
																							)
																						}

																						{
																							nomination.get('recipientMaterial') && (
																								<React.Fragment>
																									<React.Fragment>{' (for '}</React.Fragment>
																									<InstanceLink instance={nomination.get('recipientMaterial')} />
																									{
																										(nomination.getIn(['recipientMaterial', 'format']) || nomination.getIn(['recipientMaterial', 'year'])) && (
																											<AppendedFormatAndYear
																												format={nomination.getIn(['recipientMaterial', 'format'])}
																												year={nomination.getIn(['recipientMaterial', 'year'])}
																											/>
																										)
																									}
																									<React.Fragment>{')'}</React.Fragment>
																								</React.Fragment>
																							)
																						}

																						{
																							nomination.get('recipientMaterial') &&
																							nomination.get('coMaterials').size > 0 && (
																								<React.Fragment>{';'}</React.Fragment>
																							)
																						}

																						{
																							nomination.get('coMaterials').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{' (with '}</React.Fragment>
																									<Materials
																										materials={nomination.get('coMaterials')}
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
					subsequentVersionMaterialAwards?.size > 0 && (
						<InstanceFacet labelText='Awards for subsequent versions'>

							{
								subsequentVersionMaterialAwards.map((subsequentVersionMaterialAward, index) =>
									<React.Fragment key={index}>
										<InstanceLink instance={subsequentVersionMaterialAward} />

										<ul className="list">

											{
												subsequentVersionMaterialAward.get('ceremonies').map((ceremony, index) =>
													<li key={index}>
														<InstanceLink instance={ceremony} />{': '}

														{
															ceremony.get('categories')
																.map((category, index) =>
																	<React.Fragment key={index}>
																		{ category.get('name') }{': '}

																		{
																			category.get('nominations')
																				.map((nomination, index) =>
																					<React.Fragment key={index}>
																						<span className={nomination.get('isWinner') ? 'nomination-winner-text' : ''}>
																							{nomination.get('type')}
																						</span>

																						{
																							nomination.get('subsequentVersionMaterials').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{': '}</React.Fragment>
																									<Materials
																										materials={nomination.get('subsequentVersionMaterials')}
																									/>
																								</React.Fragment>
																							)
																						}

																						{
																							nomination.get('entities').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{': '}</React.Fragment>
																									<Entities
																										entities={nomination.get('entities')}
																									/>
																								</React.Fragment>
																							)
																						}

																						{
																							nomination.get('productions').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{' for '}</React.Fragment>
																									<Productions
																										productions={nomination.get('productions')}
																									/>
																								</React.Fragment>
																							)
																						}

																						{
																							nomination.get('productions').size > 0 &&
																							nomination.get('materials').size > 0 && (
																								<React.Fragment>{';'}</React.Fragment>
																							)
																						}

																						{
																							nomination.get('materials').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{' (with '}</React.Fragment>
																									<Materials
																										materials={nomination.get('materials')}
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
					sourcingMaterialAwards?.size > 0 && (
						<InstanceFacet labelText='Awards for materials as source material'>

							{
								sourcingMaterialAwards.map((sourcingMaterialAward, index) =>
									<React.Fragment key={index}>
										<InstanceLink instance={sourcingMaterialAward} />

										<ul className="list">

											{
												sourcingMaterialAward.get('ceremonies').map((ceremony, index) =>
													<li key={index}>
														<InstanceLink instance={ceremony} />{': '}

														{
															ceremony.get('categories')
																.map((category, index) =>
																	<React.Fragment key={index}>
																		{ category.get('name') }{': '}

																		{
																			category.get('nominations')
																				.map((nomination, index) =>
																					<React.Fragment key={index}>
																						<span className={nomination.get('isWinner') ? 'nomination-winner-text' : ''}>
																							{nomination.get('type')}
																						</span>

																						{
																							nomination.get('sourcingMaterials').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{': '}</React.Fragment>
																									<Materials
																										materials={nomination.get('sourcingMaterials')}
																									/>
																								</React.Fragment>
																							)
																						}

																						{
																							nomination.get('entities').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{': '}</React.Fragment>
																									<Entities
																										entities={nomination.get('entities')}
																									/>
																								</React.Fragment>
																							)
																						}

																						{
																							nomination.get('productions').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{' for '}</React.Fragment>
																									<Productions
																										productions={nomination.get('productions')}
																									/>
																								</React.Fragment>
																							)
																						}

																						{
																							nomination.get('productions').size > 0 &&
																							nomination.get('materials').size > 0 && (
																								<React.Fragment>{';'}</React.Fragment>
																							)
																						}

																						{
																							nomination.get('materials').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{' (with '}</React.Fragment>
																									<Materials
																										materials={nomination.get('materials')}
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

	}

}

Material.propTypes = {
	material: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	material: state.get('material')
});

export default connect(mapStateToProps)(Material);
