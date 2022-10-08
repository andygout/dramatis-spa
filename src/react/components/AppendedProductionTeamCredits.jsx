import PropTypes from 'prop-types';
import React from 'react';

import { AppendedCoEntities, AppendedEmployerCompany, AppendedMembers } from '.';

const AppendedProductionTeamCredits = props => {

	const { credits } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' … '}</React.Fragment>

			{
				credits
					.map((credit, index) =>
						<React.Fragment key={index}>

							<React.Fragment>{ credit.name }</React.Fragment>

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
					.reduce((prev, curr) => [prev, '; ', curr])
			}

		</React.Fragment>
	);

};

AppendedProductionTeamCredits.propTypes = {
	credits: PropTypes.array.isRequired
};

export default AppendedProductionTeamCredits;
