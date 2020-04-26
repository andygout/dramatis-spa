import React from 'react';
import { Link } from 'react-router-dom';

export default function () {

	return (
		<header className="header">

			<Link to={'/'} className="header__home-link">
				TheatreBase
			</Link>

		</header>
	);

};
