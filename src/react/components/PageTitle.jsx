import PropTypes from 'prop-types';

const PageTitle = props => {

	const { text } = props;

	return (
		<h1 className="title-text">
			{ text }
		</h1>
	);

};

PageTitle.propTypes = {
	text: PropTypes.string.isRequired
};

export default PageTitle;
