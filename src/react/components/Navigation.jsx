import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

	return (
		<nav className="navigation">

			<ul>

				<li><Link to={'/'}>Home</Link></li>

				<li><Link to={'/characters'}>Characters</Link></li>

				<li><Link to={'/people'}>People</Link></li>

				<li><Link to={'/playtexts'}>Playtexts</Link></li>

				<li><Link to={'/productions'}>Productions</Link></li>

				<li><Link to={'/theatres'}>Theatres</Link></li>

			</ul>

		</nav>
	);

};

export default Navigation;
