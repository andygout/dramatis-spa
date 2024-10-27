import PropTypes from 'prop-types';

const AppendedQualifier = props => {

	const { qualifier } = props;

	return (
		<>

			{` (${qualifier})`}

		</>
	);

};

AppendedQualifier.propTypes = {
	qualifier: PropTypes.string.isRequired
};

export default AppendedQualifier;
