import { Footer, Header, Navigation } from './components/index.js';

const Layout = props => {

	const { children } = props;

	return (
		<>

			<Header />

			<Navigation />

			{ children }

			<Footer />

		</>
	);

};

export default Layout;
