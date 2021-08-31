import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { formatDate } from '../../../lib/format-date';
import {
	AppendedFormatAndYear,
	AppendedWritingCredits,
	InstanceFacet,
	InstanceLink,
	List,
	ProducerCredits
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
									<AppendedWritingCredits writingCredits={material.get('writingCredits')} />
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
										<b>Starts:</b>&nbsp;{ formatDate(startDate, dateFormatOptions) }
									</div>
								)
							}

							{
								pressDate && (
									<div>
										<b>Press:</b>&nbsp;{ formatDate(pressDate, dateFormatOptions) }
									</div>
								)
							}

							{
								endDate && (
									<div>
										<b>Ends:</b>&nbsp;{ formatDate(endDate, dateFormatOptions) }
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
