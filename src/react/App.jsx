import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';
import { FetchDataOnMountWrapper } from './utils';

class App extends React.Component {

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
									const RouteComponent = route.component;
									return (
										<FetchDataOnMountWrapper
											{...props}
											documentTitle={route.documentTitle}
											fetchData={route.fetchData}
										>
											<RouteComponent/>
										</FetchDataOnMountWrapper>
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

export default App;
