import PropTypes from 'prop-types';
import React from 'react';

import { CommaSeparatedInstanceLinks, InstanceLink } from '.';

const AppendedEmployerCompany = props => {

	const { employerCompany } = props;

	return (
		<React.Fragment>

			<React.Fragment>{' ('}</React.Fragment>

			{
				employerCompany.coMembers?.length > 0 && (
					<React.Fragment>

						<React.Fragment>{'with '}</React.Fragment>

						<CommaSeparatedInstanceLinks instances={employerCompany.coMembers} />

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
	employerCompany: PropTypes.object.isRequired
};

export default AppendedEmployerCompany;
