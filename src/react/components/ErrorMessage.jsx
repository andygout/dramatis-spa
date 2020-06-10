import React from 'react';
import { Helmet } from 'react-helmet';

import { PageTitle } from '.';

export default props => {

	const { errorText } = props;

	return (
		<React.Fragment>

			<Helmet title={errorText} />

			<PageTitle text={errorText} />

		</React.Fragment>
	);

};
