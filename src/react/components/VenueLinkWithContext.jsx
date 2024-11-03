import PropTypes from 'prop-types';

import InstanceLink from './InstanceLink.jsx';
import PrependedSurInstance from './PrependedSurInstance.jsx';

const VenueLinkWithContext = props => {

	const { venue } = props;

	return (
		<>

			{
				venue.surVenue && (
					<PrependedSurInstance surInstance={venue.surVenue} />
				)
			}

			<InstanceLink instance={venue} />

		</>
	);

};

VenueLinkWithContext.propTypes = {
	venue: PropTypes.object.isRequired
};

export default VenueLinkWithContext;
