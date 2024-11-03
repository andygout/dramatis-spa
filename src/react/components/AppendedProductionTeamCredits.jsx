import PropTypes from 'prop-types';
import { Fragment } from 'react';

import AppendedCoEntities from './AppendedCoEntities.jsx';
import AppendedEmployerCompany from './AppendedEmployerCompany.jsx';
import AppendedMembers from './AppendedMembers.jsx';

const AppendedProductionTeamCredits = props => {

	const { credits } = props;

	return (
		<>

			<>{' … '}</>

			{
				credits
					.map((credit, index) =>
						<Fragment key={index}>

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

						</Fragment>
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
