import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { AppendedCreditedMembers, InstanceLink } from '.';

const CreditedEntities = props => {

	const { creditedEntities } = props;

	return (
		<React.Fragment>

			{
				creditedEntities
					.map((creditedEntity, index) =>
						<React.Fragment key={index}>

							<InstanceLink instance={creditedEntity} />

							{
								creditedEntity.get('creditedMembers')?.size > 0 && (
									<AppendedCreditedMembers creditedMembers={creditedEntity.get('creditedMembers')} />
								)
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ', ', curr])
			}

		</React.Fragment>
	);

};

CreditedEntities.propTypes = {
	creditedEntities: ImmutablePropTypes.list.isRequired
};

export default CreditedEntities;
