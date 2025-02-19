import { Route, Routes, useLocation } from 'react-router';

import Main from './Main.jsx';
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
								<Main
									key={location.pathname}
									pageTitle={route.pageTitle}
									deactivateError={route.deactivateError}
								>
									<RouteComponent />
								</Main>
							}
						/>
					);
				})
			}
		</Routes>
	);

};

export default AppRoutes;
