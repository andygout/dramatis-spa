import PropTypes from 'prop-types';
import React from 'react';

import { InstanceLink, PrependedSurInstance } from '.';

const FestivalLinkWithContext = props => {

	const { festival } = props;

	return (
		<>

			{
				festival.festivalSeries && (
					<PrependedSurInstance surInstance={festival.festivalSeries} />
				)
			}

			<InstanceLink instance={festival} />

		</>
	);

};

FestivalLinkWithContext.propTypes = {
	festival: PropTypes.object.isRequired
};

export default FestivalLinkWithContext;
