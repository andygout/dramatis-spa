import React from 'react';

import List from '../components/List';
import PageTitle from '../components/PageTitle';

class ListWrapper extends React.Component {

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
