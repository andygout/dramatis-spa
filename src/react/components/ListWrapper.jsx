import PropTypes from 'prop-types';
import React from 'react';

const ListWrapper = props => {

	const { children } = props;

	return (
		<ul className="list">

			{ children }

		</ul>
	);

};

ListWrapper.propTypes = {
	children: PropTypes.node.isRequired
};

export default ListWrapper;
