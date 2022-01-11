import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { WritingEntities } from '.';
import { capitalise } from '../../lib/strings';

const WritingCredits = props => {

	const { credits, isAppendage } = props;

	return (
		<React.Fragment>

			{
				credits
					.map((credit, index) => {

						const creditName = !isAppendage && index === 0
							? capitalise(credit.get('name'))
							: credit.get('name');

						return (
							<React.Fragment key={index}>

								<React.Fragment>{`${creditName} `}</React.Fragment>

								<WritingEntities entities={credit.get('entities')} />

							</React.Fragment>
						);

					})
					.reduce((prev, curr) => [prev, '; ', curr])
			}

		</React.Fragment>
	);

};

WritingCredits.propTypes = {
	credits: PropTypes.instanceOf(List).isRequired,
	isAppendage: PropTypes.bool.isRequired
};

export default WritingCredits;
