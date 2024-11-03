import PropTypes from 'prop-types';

import VenueLinkWithContext from './VenueLinkWithContext.jsx';

const AppendedVenue = props => {

	const { venue } = props;

	return (
		<>

			<>{' — '}</>

			<VenueLinkWithContext venue={venue} />

		</>
	);

};

AppendedVenue.propTypes = {
	venue: PropTypes.object.isRequired
};

export default AppendedVenue;
