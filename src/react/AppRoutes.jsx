import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from './Layout';
import routes from './routes';

const AppRoutes = () => {

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
								<Layout
									key={location.pathname}
									path={route.path}
									documentTitle={route.documentTitle}
									fetchData={route.fetchData}
								>
									<RouteComponent />
								</Layout>
							}
						/>
					);
				})
			}
		</Routes>
	);

};

export default AppRoutes;
