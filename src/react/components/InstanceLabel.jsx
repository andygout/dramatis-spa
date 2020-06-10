import React from 'react';

export default props => {

	const { text } = props;

	return (
		<div className="instance-label">
			{ text }
		</div>
	);

};
