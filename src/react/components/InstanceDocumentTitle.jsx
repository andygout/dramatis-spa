import React from 'react';
import { Helmet } from 'react-helmet';

export default function (props) {

	const { instance } = props;

	const name = instance.get('name');
	const model = instance.get('model');

	return (
		name && model
			? <Helmet title={`${name} (${model})`} />
			: null
	);

};
