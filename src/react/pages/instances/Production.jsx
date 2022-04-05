import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { formatDate } from '../../../lib/format-date';
import {
	AppendedFormatAndYear,
	AppendedWritingCredits,
	Entities,
	InstanceFacet,
	InstanceLink,
	List,
	Materials,
	ProducerCredits,
	Productions
} from '../../components';
import { InstanceWrapper } from '../../utils';

class Production extends React.Component {

	render () {

		const { production } = this.props;

		const material = production.get('material');
		const startDate = production.get('startDate');
		const pressDate = production.get('pressDate');
		const endDate = production.get('endDate');
		const venue = production.get('venue');
		const producerCredits = production.get('producerCredits');
		const cast = production.get('cast');
		const creativeCredits = production.get('creativeCredits');
		const crewCredits = production.get('crewCredits');
		const awards = production.get('awards');

		const dateFormatOptions = { weekday: 'long', month: 'long' };

		return (
			<InstanceWrapper instance={production}>

				{
					material && (
						<InstanceFacet labelText='Material'>

							<InstanceLink instance={material} />

							{
								(material.get('format') || material.get('year')) && (
									<AppendedFormatAndYear
										format={material.get('format')}
										year={material.get('year')}
									/>
								)
							}

							{
								material.get('writingCredits')?.size > 0 && (
									<AppendedWritingCredits credits={material.get('writingCredits')} />
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
								venue.get('surVenue') && (
									<span><InstanceLink instance={venue.get('surVenue')} />: </span>
								)
							}

							<InstanceLink instance={venue} />

						</InstanceFacet>
					)
				}

				{
					producerCredits?.size > 0 && (
						<InstanceFacet labelText='Producers'>

							<ProducerCredits credits={producerCredits} />

						</InstanceFacet>
					)
				}

				{
					cast?.size > 0 && (
						<InstanceFacet labelText='Cast'>

							<List instances={cast} />

						</InstanceFacet>
					)
				}

				{
					creativeCredits?.size > 0 && (
						<InstanceFacet labelText='Creative Team'>

							<List instances={creativeCredits} />

						</InstanceFacet>
					)
				}

				{
					crewCredits?.size > 0 && (
						<InstanceFacet labelText='Crew'>

							<List instances={crewCredits} />

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
																						{
																							nomination.get('customType')
																								? (<span>{nomination.get('customType')}</span>)
																								: nomination.get('isWinner')
																									? (<span>{'Winner'}</span>)
																									: (<span>{'Nomination'}</span>)
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
																							nomination.get('coProductions').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{' (with '}</React.Fragment>
																									<Productions
																										productions={nomination.get('coProductions')}
																									/>
																									<React.Fragment>{')'}</React.Fragment>
																								</React.Fragment>
																							)
																						}

																						{
																							nomination.get('coProductions').size > 0 &&
																							nomination.get('materials').size > 0 && (
																								<React.Fragment>{';'}</React.Fragment>
																							)
																						}

																						{
																							nomination.get('materials').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{' for '}</React.Fragment>
																									<Materials
																										materials={nomination.get('materials')}
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

	}

}

Production.propTypes = {
	production: PropTypes.instanceOf(Map).isRequired
};

const mapStateToProps = state => ({
	production: state.get('production')
});

export default connect(mapStateToProps)(Production);
