import React from 'react';

import { ErrorMessage } from '../components';

class NotFound extends React.Component {

	render () {

		return (
			<ErrorMessage errorText='Not Found'/>
		);

	};

};

export default NotFound;
