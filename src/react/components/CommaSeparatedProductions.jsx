import PropTypes from 'prop-types';
import React from 'react';

import { ProductionLinkWithContext } from '.';

const CommaSeparatedProductions = props => {

	const { productions } = props;

	return (
		<>

			{
				productions
					.map((production, index) =>
						<React.Fragment key={index}>

							<ProductionLinkWithContext production={production} />

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ', ', curr])
			}

		</>
	);

};

CommaSeparatedProductions.propTypes = {
	productions: PropTypes.array.isRequired
};

export default CommaSeparatedProductions;
