import React, { Component } from 'react';

import ErrorMessage from '../components/error-message';

class NotFound extends Component {

	render () {

		return (
			<ErrorMessage errorText='Not Found'/>
		);

	};

};

export default NotFound;
