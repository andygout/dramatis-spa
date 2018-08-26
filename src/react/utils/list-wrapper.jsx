import React, { Component } from 'react';

import List from '../components/list';
import PageTitle from '../components/page-title';

class ListWrapper extends Component {

	render () {

		const { pageTitleText, instances, children } = this.props;

		return (
			<React.Fragment>

				<PageTitle text={pageTitleText}/>

				<List instances={instances}/>

				{children}

			</React.Fragment>
		);

	};

};

export default ListWrapper;
