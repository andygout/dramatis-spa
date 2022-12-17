import PropTypes from 'prop-types';
import React from 'react';

import {
	AppendedDepictions,
	AppendedEntities,
	AppendedFormatAndYear,
	AppendedPerformers,
	AppendedProducerCredits,
	AppendedProductionDates,
	AppendedProductionTeamCredits,
	AppendedRoles,
	AppendedSubVenues,
	AppendedVenue,
	AppendedWritingCredits,
	InstanceLink,
	PrependedAward,
	PrependedSurInstance
} from '.';

const List = props => {

	const { instances } = props;

	return (
		<ul className="list">

			{
				instances.map((instance, index) =>
					<li key={index}>

						{
							instance.award && (
								<PrependedAward award={instance.award} />
							)
						}

						{
							instance.surMaterial && (
								<PrependedSurInstance surInstance={instance.surMaterial} />
							)
						}

						{
							instance.surProduction && (
								<PrependedSurInstance surInstance={instance.surProduction} />
							)
						}

						<InstanceLink instance={instance} />

						{
							(instance.format || instance.year) && (
								<AppendedFormatAndYear format={instance.format} year={instance.year} />
							)
						}

						{
							instance.venue && (
								<AppendedVenue venue={instance.venue} />
							)
						}

						{
							instance.subVenue && (
								<AppendedVenue venue={instance.subVenue} />
							)
						}

						{
							instance.subVenues?.length > 0 && (
								<AppendedSubVenues subVenues={instance.subVenues} />
							)
						}

						{
							(instance.startDate || instance.endDate) && (
								<AppendedProductionDates
									startDate={instance.startDate}
									endDate={instance.endDate}
								/>
							)
						}

						{
							instance.roles?.length > 0 && (
								<AppendedRoles roles={instance.roles} />
							)
						}

						{
							instance.writingCredits?.length > 0 && (
								<AppendedWritingCredits credits={instance.writingCredits} />
							)
						}

						{
							instance.producerCredits?.length > 0 && (
								<AppendedProducerCredits credits={instance.producerCredits} />
							)
						}

						{
							instance.creativeCredits?.length > 0 && (
								<AppendedProductionTeamCredits credits={instance.creativeCredits} />
							)
						}

						{
							instance.crewCredits?.length > 0 && (
								<AppendedProductionTeamCredits credits={instance.crewCredits} />
							)
						}

						{
							instance.entities?.length > 0 && (
								<AppendedEntities entities={instance.entities} />
							)
						}

						{
							instance.depictions?.length > 0 && (
								<AppendedDepictions depictions={instance.depictions} />
							)
						}

						{
							instance.performers?.length > 0 && (
								<AppendedPerformers performers={instance.performers} />
							)
						}

						{
							instance.qualifier && (
								<React.Fragment>{` (${instance.qualifier})`}</React.Fragment>
							)
						}

					</li>
				)
			}

		</ul>
	);

};

List.propTypes = {
	instances: PropTypes.array.isRequired
};

export default List;
