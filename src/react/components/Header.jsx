import { Link } from 'react-router';

import SearchBar from './SearchBar.jsx';

const Header = () => {

	return (
		<header className="header">

			<Link to={'/'} className="header__component header__home-link">
				Dramatis
			</Link>

			<div className="header__component">
				<SearchBar />
			</div>

		</header>
	);

};

export default Header;
