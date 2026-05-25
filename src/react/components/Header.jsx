import { Link } from 'react-router';

import SearchBar from './SearchBar.jsx';

const Header = () => {
	return (
		<header className="header">
			<div className="header__component">
				<Link to={'/'} className="header__home-link">
					<span className="header__home-link-icon" aria-hidden="true" />
					Dramatis
				</Link>
			</div>

			<div className="header__component">
				<SearchBar />
			</div>
		</header>
	);
};

export default Header;
