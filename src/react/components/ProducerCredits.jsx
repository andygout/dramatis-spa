import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { ProducerEntities } from '.';
import { capitalise } from '../../lib/strings';

const ProducerCredits = props => {

	const { credits } = props;

	return (
		<React.Fragment>

			{
				credits
					.map((credit, index) => {

						const creditName = index === 0
							? capitalise(credit.get('name'))
							: credit.get('name');

						return (
							<React.Fragment key={index}>

								<React.Fragment>{ creditName }&nbsp;</React.Fragment>

								<ProducerEntities entities={credit.get('entities')} />

							</React.Fragment>
						);

					})
					.reduce((prev, curr) => [prev, '; ', curr])
			}

		</React.Fragment>
	);

};

ProducerCredits.propTypes = {
	credits: ImmutablePropTypes.list.isRequired
};

export default ProducerCredits;
