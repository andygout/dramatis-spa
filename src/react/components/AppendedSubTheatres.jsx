import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { InstanceLink } from '.';

const AppendedSubTheatres = props => {

	const { subTheatres } = props;

	return (
		<React.Fragment>:&nbsp;
			{
				subTheatres
					.map((subTheatre, index) =>
						<InstanceLink key={index} instance={subTheatre} />
					)
					.reduce((prev, curr) => [prev, ' / ', curr])
			}
		</React.Fragment>
	);

};

AppendedSubTheatres.propTypes = {
	subTheatres: ImmutablePropTypes.list.isRequired
};

export default AppendedSubTheatres;
