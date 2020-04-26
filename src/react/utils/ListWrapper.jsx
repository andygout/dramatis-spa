import React from 'react';

import { List, PageTitle } from '../components';

export default class ListWrapper extends React.Component {

	render () {

		const { pageTitleText, instances, children } = this.props;

		return (
			<React.Fragment>

				<PageTitle text={pageTitleText} />

				<List instances={instances} />

				{ children }

			</React.Fragment>
		);

	};

};
