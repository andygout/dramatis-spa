import React from 'react';
import { Helmet } from 'react-helmet';

const DocumentTitle = props => {

	const { instance: { name, model } } = props;

	return (
		name !== undefined && model !== undefined
			? <Helmet title={`${name} (${model})`}/>
			: null
	);

};

export default DocumentTitle;
