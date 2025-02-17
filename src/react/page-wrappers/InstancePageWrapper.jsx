import getDifferentiatorSuffix from '../../lib/get-differentiator-suffix.js';
import getInstanceTitle from '../../lib/get-instance-title.js';
import { InstanceDocumentTitle, InstanceLabel, PageSubtitle, PageTitle } from '../components/index.js';

const InstancePageWrapper = props => {

	const { instance, children } = props;

	const title = getInstanceTitle(instance);

	const differentiatorSuffix = getDifferentiatorSuffix(instance.differentiator);

	const pageTitleText = [
		title,
		differentiatorSuffix
	]
		.filter(Boolean)
		.join(' ');

	return (
		<>

			{
				instance.name && instance.model && (
					<InstanceDocumentTitle
						title={title}
						model={instance.model}
						differentiatorSuffix={differentiatorSuffix}
					/>
				)
			}

			<InstanceLabel model={instance.model || ''} />

			<PageTitle text={pageTitleText} />

			{
				instance.subtitle && (
					<PageSubtitle text={instance.subtitle} />
				)
			}

			{ children }

		</>
	);

};

export default InstancePageWrapper;
