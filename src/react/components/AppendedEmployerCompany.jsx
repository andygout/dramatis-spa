import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { CommaSeparatedInstanceLinks, InstanceLink } from '.';

const AppendedEmployerCompany = props => {

	const { employerCompany } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;(</React.Fragment>

			{
				employerCompany.get('coMembers')?.size > 0 && (
					<React.Fragment>

						<React.Fragment>with&nbsp;</React.Fragment>

						<CommaSeparatedInstanceLinks instances={employerCompany.get('coMembers')} />

						<React.Fragment>&nbsp;</React.Fragment>

					</React.Fragment>
				)
			}

			<React.Fragment>for&nbsp;</React.Fragment>

			<InstanceLink instance={employerCompany} />

			<React.Fragment>)</React.Fragment>

		</React.Fragment>
	);

};

AppendedEmployerCompany.propTypes = {
	employerCompany: PropTypes.instanceOf(Map).isRequired
};

export default AppendedEmployerCompany;
