import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import routes from './routes';
import { FetchDataOnMountWrapper } from './utils';

const App = () => {

	const location = useLocation();

	return (
		<Switch>
			{
				routes.map((route, index) => {
					const RouteComponent = route.component;

					return (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
						>
							<FetchDataOnMountWrapper
								documentTitle={route.documentTitle}
								fetchData={route.fetchData}
								key={location.key}
							>
								<RouteComponent />
							</FetchDataOnMountWrapper>
						</Route>
					);
				})
			}
		</Switch>
	);

};

export default App;
