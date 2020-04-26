import React from 'react';

import { ContentHeader, InstanceDocumentTitle, PageTitle } from '../components';

export default class InstanceWrapper extends React.Component {

	render () {

		const { instance, children } = this.props;

		return (
			<React.Fragment>

				<InstanceDocumentTitle instance={instance} />

				{
					instance.get('model') && (
						<ContentHeader text={instance.get('model')} />
					)
				}

				<PageTitle text={instance.get('name')} />

				{ children }

			</React.Fragment>
		);

	};

};
