import React from 'react';

import { irregularPluralNouns } from '../../utils/constants';

const withInstanceRoute = WrappedComponent => props => {

	const { instance: { model, uuid } } = props;

	const newProps = { instanceRoute: `/${irregularPluralNouns[model] || model + 's'}/${uuid}` };

	return (
		<WrappedComponent {...props} {...newProps}/>
	);

};

export default withInstanceRoute;
