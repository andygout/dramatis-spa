import React from 'react';

import ContentHeader from './content-header';
import InstanceDocumentTitle from './instance-document-title';
import PageTitle from './page-title';

const SharedInstancePageComponents = props => {

	const { instance } = props;

	return (
		<div>

			<InstanceDocumentTitle instance={instance} />

			<ContentHeader text={instance.model} />

			<PageTitle pageTitle={instance.name} />

		</div>
	);

};

export default SharedInstancePageComponents;
