import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const InstanceDocumentTitle = props => {

	const { name, differentiator, model } = props;

	let documentTitle = `${name} (${model})`;

	if (differentiator) documentTitle += ` (${differentiator})`;

	return (
		<Helmet title={documentTitle} />
	);

};

InstanceDocumentTitle.propTypes = {
	name: PropTypes.string.isRequired,
	differentiator: PropTypes.string,
	model: PropTypes.string.isRequired
};

export default InstanceDocumentTitle;
