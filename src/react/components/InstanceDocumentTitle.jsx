import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import getDifferentiatorSuffix from '../../lib/get-differentiator-suffix';
import { MODEL_TO_DISPLAY_NAME_MAP } from '../../utils/constants';

const InstanceDocumentTitle = props => {

	const { name, differentiator, model } = props;

	let documentTitle = `${name} (${MODEL_TO_DISPLAY_NAME_MAP[model]})`;

	documentTitle += getDifferentiatorSuffix(differentiator);

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
