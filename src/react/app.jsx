import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';
import fetchDataOnMount from './utils/fetch-data-on-mount';

export default class App extends Component {

	render () {

		return (
			<Switch>
				{
					routes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							render={
								props => {
									const HOC = connect()(fetchDataOnMount(route.component));
									return (
										<HOC
											{...props}
											documentTitle={route.documentTitle}
											fetchData={route.fetchData}
										/>
									);
								}
							}
						/>

					))
				}
			</Switch>
		);

	};

};
