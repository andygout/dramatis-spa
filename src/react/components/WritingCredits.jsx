import PropTypes from 'prop-types';
import { Fragment } from 'react';

import { WritingEntities } from './index.js';
import { capitalise } from '../../lib/strings.js';

const WritingCredits = props => {

	const { credits, isAppendage } = props;

	return (
		<>

			{
				credits
					.map((credit, index) => {

						const creditName = !isAppendage && index === 0
							? capitalise(credit.name)
							: credit.name;

						return (
							<Fragment key={index}>

								<>{`${creditName} `}</>

								<WritingEntities entities={credit.entities} />

							</Fragment>
						);

					})
					.reduce((accumulator, currentValue) => [accumulator, '; ', currentValue])
			}

		</>
	);

};

WritingCredits.propTypes = {
	credits: PropTypes.array.isRequired,
	isAppendage: PropTypes.bool.isRequired
};

export default WritingCredits;
