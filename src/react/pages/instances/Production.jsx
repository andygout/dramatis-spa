import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { formatDate } from '../../../lib/format-date';
import {
	AppendedFormatAndYear,
	AppendedProductionDates,
	AppendedVenue,
	AppendedWritingCredits,
	Entities,
	InstanceFacet,
	InstanceLink,
	List,
	Materials,
	PrependedSurInstance,
	ProducerCredits,
	Productions
} from '../../components';
import { InstanceWrapper } from '../../wrappers';

const Production = props => {

	const { production } = props;

	const {
		material,
		startDate,
		pressDate,
		endDate,
		venue,
		surProduction,
		subProductions,
		producerCredits,
		cast,
		creativeCredits,
		crewCredits,
		awards
	} = production;

	const dateFormatOptions = { weekday: 'long', month: 'long' };

	return (
		<InstanceWrapper instance={production}>

			{
				material && (
					<InstanceFacet labelText='Material'>

						{
							material.surMaterial && (
								<PrependedSurInstance surInstance={material.surMaterial} />
							)
						}

						<InstanceLink instance={material} />

						{
							(material.format || material.year) && (
								<AppendedFormatAndYear
									format={material.format}
									year={material.year}
								/>
							)
						}

						{
							material.writingCredits?.length > 0 && (
								<AppendedWritingCredits credits={material.writingCredits} />
							)
						}

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

						{
							venue.surVenue && (
								<span><InstanceLink instance={venue.surVenue} />: </span>
							)
						}

						<InstanceLink instance={venue} />

					</InstanceFacet>
				)
			}

			{
				surProduction && (
					<InstanceFacet labelText='Part of'>

						<InstanceLink instance={surProduction} />

						{
							surProduction.venue && (
								<AppendedVenue venue={surProduction.venue} />
							)
						}

						{
							(surProduction.startDate || surProduction.endDate) && (
								<AppendedProductionDates
									startDate={surProduction.startDate}
									endDate={surProduction.endDate}
								/>
							)
						}

					</InstanceFacet>
				)
			}

			{
				subProductions?.length > 0 && (
					<InstanceFacet labelText='Comprises'>

						<List instances={subProductions} />

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

						<List instances={cast} />

					</InstanceFacet>
				)
			}

			{
				creativeCredits?.length > 0 && (
					<InstanceFacet labelText='Creative Team'>

						<List instances={creativeCredits} />

					</InstanceFacet>
				)
			}

			{
				crewCredits?.length > 0 && (
					<InstanceFacet labelText='Crew'>

						<List instances={crewCredits} />

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
																						nomination.coProductions.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{' (with '}</React.Fragment>
																								<Productions
																									productions={nomination.coProductions}
																								/>
																								<React.Fragment>{')'}</React.Fragment>
																							</React.Fragment>
																						)
																					}

																					{
																						nomination.coProductions.length > 0 &&
																						nomination.materials.length > 0 && (
																							<React.Fragment>{';'}</React.Fragment>
																						)
																					}

																					{
																						nomination.materials.length > 0 && (
																							<React.Fragment>
																								<React.Fragment>{' for '}</React.Fragment>
																								<Materials
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

Production.propTypes = {
	production: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	production: state.production
});

export default connect(mapStateToProps)(Production);
