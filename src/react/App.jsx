import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import routes from './routes';
import { FetchDataOnMountWrapper } from './utils';

const App = () => {

	const location = useLocation();

	return (
		<Routes>
			{
				routes.map((route, index) => {
					const RouteComponent = route.component;

					return (
						<Route
							key={index}
							path={route.path}
							element={
								<FetchDataOnMountWrapper
									key={location.pathname}
									path={route.path}
									documentTitle={route.documentTitle}
									fetchData={route.fetchData}
								>
									<RouteComponent />
								</FetchDataOnMountWrapper>
							}
						/>
					);
				})
			}
		</Routes>
	);

};

export default App;
