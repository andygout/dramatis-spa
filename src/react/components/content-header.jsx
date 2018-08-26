import React from 'react';

const ContentHeader = props => {

	const { text } = props;

	return (
		text
			? (
				<div className="content-header">
					{text}
				</div>
			)
			: null
	);

};

export default ContentHeader;
