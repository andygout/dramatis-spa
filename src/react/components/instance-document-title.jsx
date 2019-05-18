import React from 'react';
import { Helmet } from 'react-helmet';

const DocumentTitle = props => {

	const { instance } = props;

	const name = instance.get('name');
	const model = instance.get('model');

	return (
		name !== undefined && model !== undefined
			? <Helmet title={`${name} (${model})`}/>
			: null
	);

};

export default DocumentTitle;
