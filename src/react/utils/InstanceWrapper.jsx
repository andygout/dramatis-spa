import React from 'react';

import { ContentHeader, InstanceDocumentTitle, PageTitle } from '../components';

class InstanceWrapper extends React.Component {

	render () {

		const { instance, children } = this.props;

		return (
			<React.Fragment>

				<InstanceDocumentTitle instance={instance}/>

				<ContentHeader text={instance.get('model')}/>

				<PageTitle text={instance.get('name')}/>

				{children}

			</React.Fragment>
		);

	};

};

export default InstanceWrapper;
