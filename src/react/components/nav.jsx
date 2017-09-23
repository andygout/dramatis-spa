import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

	return (
		<nav className="nav">

			<ul>

				<li className="nav__list-item"><Link to={'/productions/new'}>New production</Link></li>

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

export default Nav;
