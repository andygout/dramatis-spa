import PropTypes from 'prop-types';
import React from 'react';

const ListWrapper = props => {

	const { isNested, children } = props;

	return (
		<ul className={isNested ? 'list--nested' : 'list'}>

			{ children }

		</ul>
	);

};

ListWrapper.propTypes = {
	isNested: PropTypes.bool,
	children: PropTypes.node.isRequired
};

export default ListWrapper;
