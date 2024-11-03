import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import PageTitle from './PageTitle.jsx';

const ErrorMessage = props => {

	const { errorText } = props;

	return (
		<>

			<Helmet title={errorText} />

			<PageTitle text={errorText} />

		</>
	);

};

ErrorMessage.propTypes = {
	errorText: PropTypes.string.isRequired
};

export default ErrorMessage;
