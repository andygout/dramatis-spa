import PropTypes from 'prop-types';
import React from 'react';

import { AppendedCoEntities, AppendedEmployerCompany, AppendedMembers } from './index.js';

const AppendedProductionTeamCredits = props => {

	const { credits } = props;

	return (
		<>

			<>{' … '}</>

			{
				credits
					.map((credit, index) =>
						<React.Fragment key={index}>

							<>{ credit.name }</>

							{
								credit.members?.length > 0 && (
									<AppendedMembers members={credit.members} />
								)
							}

							{
								credit.employerCompany && (
									<AppendedEmployerCompany employerCompany={credit.employerCompany} />
								)
							}

							{
								credit.coEntities?.length > 0 && (
									<AppendedCoEntities coEntities={credit.coEntities} />
								)
							}

						</React.Fragment>
					)
					.reduce((accumulator, currentValue) => [accumulator, '; ', currentValue])
			}

		</>
	);

};

AppendedProductionTeamCredits.propTypes = {
	credits: PropTypes.array.isRequired
};

export default AppendedProductionTeamCredits;
