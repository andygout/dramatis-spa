import PropTypes from 'prop-types';

const PageSubtitle = props => {

	const { text } = props;

	return (
		<h1 className="subtitle-text">
			{ text }
		</h1>
	);

};

PageSubtitle.propTypes = {
	text: PropTypes.string.isRequired
};

export default PageSubtitle;
