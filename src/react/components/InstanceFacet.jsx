import PropTypes from 'prop-types';
import React from 'react';

const InstanceFacet = props => {

	const { labelText, children } = props;

	return (
		<div className="instance-facet-wrapper">

			<div className="instance-facet-label">
				{ labelText }
			</div>

			<div className="instance-facet">
				{ children }
			</div>

		</div>
	);

};

InstanceFacet.propTypes = {
	labelText: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default InstanceFacet;
