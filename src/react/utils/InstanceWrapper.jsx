import React from 'react';

import { InstanceDocumentTitle, InstanceLabel, PageTitle } from '../components';

export default class InstanceWrapper extends React.Component {

	render () {

		const { instance, children } = this.props;

		return (
			<React.Fragment>

				<InstanceDocumentTitle instance={instance} />

				<InstanceLabel text={instance.get('model')} />

				<PageTitle text={instance.get('name')} />

				{ children }

			</React.Fragment>
		);

	};

};
