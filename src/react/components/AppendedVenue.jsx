import VenueLinkWithContext from './VenueLinkWithContext.jsx';

const AppendedVenue = (props) => {
	const { venue } = props;

	return (
		<>
			<>{' — '}</>

			<VenueLinkWithContext venue={venue} />
		</>
	);
};

export default AppendedVenue;
