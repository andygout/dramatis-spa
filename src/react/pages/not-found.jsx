import React, { Component } from 'react';

import ErrorMessage from '../components/error-message';

export default class NotFound extends Component {

	render () {

		return (
			<ErrorMessage errorText='Not Found' />
		);

	};

};
