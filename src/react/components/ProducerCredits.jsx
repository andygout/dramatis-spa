import PropTypes from 'prop-types';
import { Fragment } from 'react';

import { capitalise } from '../../lib/strings.js';
import ProducerEntities from './ProducerEntities.jsx';

const ProducerCredits = props => {

	const { credits } = props;

	return (
		<>

			{
				credits
					.map((credit, index) => {

						const creditName = index === 0
							? capitalise(credit.name)
							: credit.name;

						return (
							<Fragment key={index}>

								<>{`${creditName} `}</>

								<ProducerEntities entities={credit.entities} />

							</Fragment>
						);

					})
					.reduce((accumulator, currentValue) => [accumulator, '; ', currentValue])
			}

		</>
	);

};

ProducerCredits.propTypes = {
	credits: PropTypes.array.isRequired
};

export default ProducerCredits;
