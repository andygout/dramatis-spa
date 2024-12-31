import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from './Layout.jsx';
import routes from './routes.js';

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
									documentTitle={route.documentTitle}
									deactivateError={route.deactivateError}
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
