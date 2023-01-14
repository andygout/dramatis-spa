import PropTypes from 'prop-types';
import React from 'react';

import { ProducerEntities } from '.';
import { capitalise } from '../../lib/strings';

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
							<React.Fragment key={index}>

								<>{`${creditName} `}</>

								<ProducerEntities entities={credit.entities} />

							</React.Fragment>
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
