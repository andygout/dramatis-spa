import PropTypes from 'prop-types';
import { Fragment } from 'react';

import { ProductionLinkWithContext } from './index.js';

const CommaSeparatedProductions = props => {

	const { productions } = props;

	return (
		<>

			{
				productions
					.map((production, index) =>
						<Fragment key={index}>

							<ProductionLinkWithContext production={production} />

						</Fragment>
					)
					.reduce((accumulator, currentValue) => [accumulator, ', ', currentValue])
			}

		</>
	);

};

CommaSeparatedProductions.propTypes = {
	productions: PropTypes.array.isRequired
};

export default CommaSeparatedProductions;
