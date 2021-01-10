import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { WritingEntities } from '.';
import { capitalise } from '../../lib/strings';

const WritingCredits = props => {

	const { writingCredits, isAppendage } = props;

	return (
		<React.Fragment>

			{
				writingCredits
					.map((writingCredit, index) => {

						const writingCreditName = !isAppendage && index === 0
							? capitalise(writingCredit.get('name'))
							: writingCredit.get('name');

						return (
							<React.Fragment key={index}>

								<React.Fragment>{ writingCreditName }&nbsp;</React.Fragment>

								<WritingEntities writingEntities={writingCredit.get('writingEntities')} />

							</React.Fragment>
						);

					})
					.reduce((prev, curr) => [prev, '; ', curr])
			}

		</React.Fragment>
	);

};

WritingCredits.propTypes = {
	writingCredits: ImmutablePropTypes.list.isRequired,
	isAppendage: PropTypes.bool.isRequired
};

export default WritingCredits;
