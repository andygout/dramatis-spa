import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { formatDate } from '../../../lib/format-date';
import {
	AppendedRoles,
	CommaSeparatedMaterials,
	CommaSeparatedProductions,
	Entities,
	InstanceFacet,
	InstanceLink,
	ListWrapper,
	MaterialLinkWithContext,
	ProducerCredits,
	ProductionTeamCreditsList,
	VenueLinkWithContext
} from '../../components';
import { InstancePageWrapper } from '../../page-wrappers';

const Production = props => {

	const { production } = props;

	const dateFormatOptions = { weekday: 'long', month: 'long' };

	const renderProduction = production => {

		const {
			material,
			startDate,
			pressDate,
			endDate,
			venue,
			season,
			festival,
			surProduction,
			subProductions,
			producerCredits,
			cast,
			creativeCredits,
			crewCredits,
			awards
		} = production;

		return (
			<>

				{
					material && (
						<InstanceFacet labelText='Material'>

							<MaterialLinkWithContext material={material} />

						</InstanceFacet>
					)
				}

				{
					(startDate || pressDate || endDate) && (
						<InstanceFacet labelText='Dates'>

							{
								startDate && (
									<div>
										<b>Starts:</b>{` ${formatDate(startDate, dateFormatOptions)}`}
									</div>
								)
							}

							{
								pressDate && (
									<div>
										<b>Press:</b>{` ${formatDate(pressDate, dateFormatOptions)}`}
									</div>
								)
							}

							{
								endDate && (
									<div>
										<b>Ends:</b>{` ${formatDate(endDate, dateFormatOptions)}`}
									</div>
								)
							}

						</InstanceFacet>
					)
				}

				{
					venue && (
						<InstanceFacet labelText='Venue'>

							<VenueLinkWithContext venue={venue} />

						</InstanceFacet>
					)
				}

				{
					season && (
						<InstanceFacet labelText='Season'>

							<InstanceLink instance={season} />

						</InstanceFacet>
					)
				}

				{
					festival && (
						<InstanceFacet labelText='Festival'>

							<InstanceLink instance={festival} />

						</InstanceFacet>
					)
				}

				{
					surProduction && (
						<InstanceFacet labelText='Part of'>

							<div className="nested-instance">

								<InstanceFacet labelText='Production'>

									<InstanceLink instance={surProduction} />

								</InstanceFacet>

								{
									renderProduction(surProduction)
								}

							</div>

						</InstanceFacet>
					)
				}

				{
					subProductions?.length > 0 && (
						<InstanceFacet labelText='Comprises'>

						{
							subProductions
								.map((subProduction, index) =>
									<div key={index} className="nested-instance">

										<InstanceFacet labelText='Production'>

											<InstanceLink instance={subProduction} />

										</InstanceFacet>

										{
											renderProduction(subProduction)
										}

									</div>
								)
						}

						</InstanceFacet>
					)
				}

				{
					producerCredits?.length > 0 && (
						<InstanceFacet labelText='Producers'>

							<ProducerCredits credits={producerCredits} />

						</InstanceFacet>
					)
				}

				{
					cast?.length > 0 && (
						<InstanceFacet labelText='Cast'>

							<ListWrapper>

								{
									cast.map((castMember, index) =>
										<li key={index}>

											<InstanceLink instance={castMember} />

											{
												castMember.roles?.length > 0 && (
													<AppendedRoles roles={castMember.roles} />
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
					creativeCredits?.length > 0 && (
						<InstanceFacet labelText='Creative Team'>

							<ProductionTeamCreditsList credits={creativeCredits} />

						</InstanceFacet>
					)
				}

				{
					crewCredits?.length > 0 && (
						<InstanceFacet labelText='Crew'>

							<ProductionTeamCreditsList credits={crewCredits} />

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
																							nomination.entities.length > 0 &&
																							(nomination.recipientProductions.length > 0 || nomination.coProductions.length > 0) && (
																								<>{';'}</>
																							)
																						}

																						{
																							nomination.recipientProductions.length > 0 && (
																								<>
																									<>{' (for '}</>
																									<CommaSeparatedProductions
																										productions={nomination.recipientProductions}
																									/>
																									<>{')'}</>
																								</>
																							)
																						}

																						{
																							nomination.recipientProductions.length > 0 &&
																							nomination.coProductions.length > 0 && (
																								<>{';'}</>
																							)
																						}

																						{
																							nomination.coProductions.length > 0 && (
																								<>
																									<>{' (with '}</>
																									<CommaSeparatedProductions
																										productions={nomination.coProductions}
																									/>
																									<>{')'}</>
																								</>
																							)
																						}

																						{
																							nomination.coProductions.length > 0 &&
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
																					</React.Fragment>
																				)
																				.reduce((accumulator, currentValue) => [accumulator, ', ', currentValue])
																		}
																	</React.Fragment>
																)
																.reduce((accumulator, currentValue) => [accumulator, '; ', currentValue])
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

			</>
		);

	};

	return (
		<InstancePageWrapper instance={production}>

			{
				renderProduction(production)
			}

		</InstancePageWrapper>
	);

};

Production.propTypes = {
	production: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	production: state.production
});

export default connect(mapStateToProps)(Production);
