import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { CommaSeparatedInstanceLinks, InstanceLink } from '.';

const AppendedNominatedEmployerCompany = props => {

	const { nominatedEmployerCompany } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;(</React.Fragment>

			{
				nominatedEmployerCompany.get('coNominatedMembers')?.size > 0 && (
					<React.Fragment>

						<React.Fragment>with&nbsp;</React.Fragment>

						<CommaSeparatedInstanceLinks instances={nominatedEmployerCompany.get('coNominatedMembers')} />

						<React.Fragment>&nbsp;</React.Fragment>

					</React.Fragment>
				)
			}

			<React.Fragment>for&nbsp;</React.Fragment>

			<InstanceLink instance={nominatedEmployerCompany} />

			<React.Fragment>)</React.Fragment>

		</React.Fragment>
	);

};

AppendedNominatedEmployerCompany.propTypes = {
	nominatedEmployerCompany: PropTypes.instanceOf(Map).isRequired
};

export default AppendedNominatedEmployerCompany;
