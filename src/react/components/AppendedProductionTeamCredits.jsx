import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

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

							<React.Fragment>{ credit.get('name') }</React.Fragment>

							{
								credit.get('members')?.size > 0 && (
									<AppendedMembers members={credit.get('members')} />
								)
							}

							{
								credit.get('employerCompany') && (
									<AppendedEmployerCompany employerCompany={credit.get('employerCompany')} />
								)
							}

							{
								credit.get('coEntities')?.size > 0 && (
									<AppendedCoEntities coEntities={credit.get('coEntities')} />
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
	credits: ImmutablePropTypes.list.isRequired
};

export default AppendedProductionTeamCredits;
