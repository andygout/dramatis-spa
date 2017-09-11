import React from 'react';

const irregularPluralNouns = {
	'person': 'people'
};

const withInstanceRoute = WrappedComponent => props => {

	const { instance: { model, uuid } } = props;

	const newProps = { instanceRoute: `/${irregularPluralNouns[model] || model + 's'}/${uuid}` };

	return (
		<WrappedComponent {...props} {...newProps} />
	);

};

export default withInstanceRoute;
