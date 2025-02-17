import getDocumentTitle from '../../lib/get-document-title.js';
import { MODEL_TO_DISPLAY_NAME_MAP } from '../../utils/constants.js';

const InstanceDocumentTitle = props => {

	const { title, model, differentiatorSuffix } = props;

	const pageTitle = [
		title,
		`(${MODEL_TO_DISPLAY_NAME_MAP[model]})`,
		differentiatorSuffix
	]
		.filter(Boolean)
		.join(' ');

	const documentTitle = getDocumentTitle(pageTitle);

	return (
		<title>{documentTitle}</title>
	);

};

export default InstanceDocumentTitle;
