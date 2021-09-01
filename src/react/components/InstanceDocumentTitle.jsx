import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import { MODEL_TO_DISPLAY_NAME_MAP } from '../../utils/constants';

const InstanceDocumentTitle = props => {

	const { title, model, differentiatorSuffix } = props;

	const documentTitle = [
		title,
		`(${MODEL_TO_DISPLAY_NAME_MAP[model]})`,
		differentiatorSuffix
	]
		.filter(Boolean)
		.join(' ');

	return (
		<Helmet title={documentTitle} />
	);

};

InstanceDocumentTitle.propTypes = {
	title: PropTypes.string.isRequired,
	model: PropTypes.string.isRequired,
	differentiatorSuffix: PropTypes.string.isRequired
};

export default InstanceDocumentTitle;
