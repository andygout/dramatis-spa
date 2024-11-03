import PropTypes from 'prop-types';

import InstanceLink from './InstanceLink.jsx';
import PrependedSurInstance from './PrependedSurInstance.jsx';

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
