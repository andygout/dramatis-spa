import PropTypes from 'prop-types';
import React from 'react';

const PageTitle = props => {

	const { text } = props;

	return (
		<h1 className="title-text">
			{ text }
		</h1>
	);

};

PageTitle.propTypes = {
	text: PropTypes.string
};

export default PageTitle;
