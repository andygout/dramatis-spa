import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import { PageTitle } from './index.js';

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
