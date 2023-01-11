import PropTypes from 'prop-types';
import React from 'react';

import getDifferentiatorSuffix from '../../lib/get-differentiator-suffix';
import getInstanceTitle from '../../lib/get-instance-title';
import { InstanceDocumentTitle, InstanceLabel, PageTitle } from '../components';

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
		<React.Fragment>

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

			{ children }

		</React.Fragment>
	);

};

InstancePageWrapper.propTypes = {
	instance: PropTypes.object.isRequired,
	titleName: PropTypes.string,
	children: PropTypes.node
};

export default InstancePageWrapper;
