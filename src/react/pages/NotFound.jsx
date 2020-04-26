import React from 'react';

import { ErrorMessage } from '../components';

export default class NotFound extends React.Component {

	render () {

		return (
			<ErrorMessage errorText='Not Found' />
		);

	};

};
