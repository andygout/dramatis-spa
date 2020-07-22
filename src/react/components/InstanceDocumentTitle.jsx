import React from 'react';
import { Helmet } from 'react-helmet';
import ImmutablePropTypes from 'react-immutable-proptypes';

const InstanceDocumentTitle = props => {

	const { instance } = props;

	const name = instance.get('name');
	const model = instance.get('model');

	return (
		name && model
			? <Helmet title={`${name} (${model})`} />
			: null
	);

};

InstanceDocumentTitle.propTypes = {
	instance: ImmutablePropTypes.map.isRequired
};

export default InstanceDocumentTitle;
