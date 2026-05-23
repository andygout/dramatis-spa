import { Link } from 'react-router';

import SearchBar from './SearchBar.jsx';

const Header = () => {
	return (
		<header className="header">
			<div className="header__component">
				<Link to={'/'} className="header__home-link">
					<img
						src="/assets/header-logo-icon.svg"
						alt="The Dramatis logo: the comedy and tragedy masks framed in a cell"
						className="header__home-link-icon"
					/>
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
