import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { AppendedCoCreditedEntities, AppendedCreditedEmployerCompany, AppendedCreditedMembers } from '.';

const AppendedCreativeCrewCredits = props => {

	const { credits } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;…&nbsp;</React.Fragment>

			{
				credits
					.map((credit, index) =>
						<React.Fragment key={index}>

							<React.Fragment>{ credit.get('name') }</React.Fragment>

							{
								credit.get('creditedMembers')?.size > 0 && (
									<AppendedCreditedMembers creditedMembers={credit.get('creditedMembers')} />
								)
							}

							{
								credit.get('creditedEmployerCompany') && (
									<AppendedCreditedEmployerCompany
										creditedEmployerCompany={credit.get('creditedEmployerCompany')}
									/>
								)
							}

							{
								credit.get('coCreditedEntities')?.size > 0 && (
									<AppendedCoCreditedEntities
										coCreditedEntities={credit.get('coCreditedEntities')}
									/>
								)
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, '; ', curr])
			}

		</React.Fragment>
	);

};

AppendedCreativeCrewCredits.propTypes = {
	credits: ImmutablePropTypes.list.isRequired
};

export default AppendedCreativeCrewCredits;
