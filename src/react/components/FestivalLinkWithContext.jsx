import PropTypes from 'prop-types';

import { InstanceLink, PrependedSurInstance } from './index.js';

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
