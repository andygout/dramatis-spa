import { List as ImmutableList } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import {
	AppendedDepictions,
	AppendedEntities,
	AppendedFormatAndYear,
	AppendedPerformers,
	AppendedProductionDates,
	AppendedProducerCredits,
	AppendedProductionTeamCredits,
	AppendedRoles,
	AppendedSubVenues,
	AppendedVenue,
	AppendedWritingCredits,
	InstanceLink,
	PrependedAward
} from '.';

const List = props => {

	const { instances } = props;

	return (
		<ul className="list">

			{
				instances.map((instance, index) =>
					<li key={index}>

						{
							instance.get('award') && (
								<PrependedAward award={instance.get('award')} />
							)
						}

						{
							instance.get('uuid')
								? <InstanceLink instance={instance} />
								: <React.Fragment>{ instance.get('name') }</React.Fragment>
						}

						{
							(instance.get('format') || instance.get('year')) && (
								<AppendedFormatAndYear format={instance.get('format')} year={instance.get('year')} />
							)
						}

						{
							instance.get('venue') && (
								<AppendedVenue venue={instance.get('venue')} />
							)
						}

						{
							instance.get('subVenue') && (
								<AppendedVenue venue={instance.get('subVenue')} />
							)
						}

						{
							instance.get('subVenues')?.size > 0 && (
								<AppendedSubVenues subVenues={instance.get('subVenues')} />
							)
						}

						{
							instance.get('startDate') && instance.get('endDate') && (
								<AppendedProductionDates
									startDate={instance.get('startDate')}
									endDate={instance.get('endDate')}
								/>
							)
						}

						{
							instance.startDate && instance.endDate && (
								<AppendedProductionDates startDate={instance.startDate} endDate={instance.endDate} />
							)
						}

						{
							instance.get('roles')?.size > 0 && (
								<AppendedRoles roles={instance.get('roles')} />
							)
						}

						{
							instance.get('writingCredits')?.size > 0 && (
								<AppendedWritingCredits writingCredits={instance.get('writingCredits')} />
							)
						}

						{
							instance.get('producerCredits')?.size > 0 && (
								<AppendedProducerCredits credits={instance.get('producerCredits')} />
							)
						}

						{
							instance.get('creativeCredits')?.size > 0 && (
								<AppendedProductionTeamCredits credits={instance.get('creativeCredits')} />
							)
						}

						{
							instance.get('crewCredits')?.size > 0 && (
								<AppendedProductionTeamCredits credits={instance.get('crewCredits')} />
							)
						}

						{
							instance.get('entities')?.size > 0 && (
								<AppendedEntities entities={instance.get('entities')} />
							)
						}

						{
							instance.get('depictions') && (
								<AppendedDepictions depictions={instance.get('depictions')} />
							)
						}

						{
							instance.get('performers')?.size > 0 && (
								<AppendedPerformers performers={instance.get('performers')} />
							)
						}

						{
							instance.get('qualifier') && (
								<React.Fragment>&nbsp;({instance.get('qualifier')})</React.Fragment>
							)
						}

					</li>
				)
			}

		</ul>
	);

};

List.propTypes = {
	instances: PropTypes.instanceOf(ImmutableList).isRequired
};

export default List;
