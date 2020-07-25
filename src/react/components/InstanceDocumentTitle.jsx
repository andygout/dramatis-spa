import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const InstanceDocumentTitle = props => {

	const { name, model } = props;

	return (
		<Helmet title={`${name} (${model})`} />
	);

};

InstanceDocumentTitle.propTypes = {
	name: PropTypes.string.isRequired,
	model: PropTypes.string.isRequired
};

export default InstanceDocumentTitle;
