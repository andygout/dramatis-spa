import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { CommaSeparatedInstanceLinks, InstanceLink } from '.';

const AppendedEmployerCompany = props => {

	const { employerCompany } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' ('}</React.Fragment>

			{
				employerCompany.get('coMembers')?.size > 0 && (
					<React.Fragment>

						<React.Fragment>{'with '}</React.Fragment>

						<CommaSeparatedInstanceLinks instances={employerCompany.get('coMembers')} />

						<React.Fragment>{' '}</React.Fragment>

					</React.Fragment>
				)
			}

			<React.Fragment>{'for '}</React.Fragment>

			<InstanceLink instance={employerCompany} />

			<React.Fragment>{')'}</React.Fragment>

		</React.Fragment>
	);

};

AppendedEmployerCompany.propTypes = {
	employerCompany: ImmutablePropTypes.map.isRequired
};

export default AppendedEmployerCompany;
