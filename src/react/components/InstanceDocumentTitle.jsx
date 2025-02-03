import { Helmet } from 'react-helmet';

import { MODEL_TO_DISPLAY_NAME_MAP } from '../../utils/constants.js';

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

export default InstanceDocumentTitle;
