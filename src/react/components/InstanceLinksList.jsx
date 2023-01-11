import PropTypes from 'prop-types';
import React from 'react';

import { InstanceLink, ListWrapper } from '.';

const InstanceLinksList = props => {

	const { instances } = props;

	return (
		<ListWrapper>

			{
				instances.map((instance, index) =>
					<li key={index}>

						<InstanceLink instance={instance} />

					</li>
				)
			}

		</ListWrapper>
	);

};

InstanceLinksList.propTypes = {
	instances: PropTypes.array.isRequired
};

export default InstanceLinksList;
