import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import { PageTitle } from '.';

const ErrorMessage = props => {

	const { errorText } = props;

	return (
		<React.Fragment>

			<Helmet title={errorText} />

			<PageTitle text={errorText} />

		</React.Fragment>
	);

};

ErrorMessage.propTypes = {
	errorText: PropTypes.string.isRequired
};

export default ErrorMessage;
