import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { InstanceLink } from '.';

const AppendedTheatre = props => {

	const { theatre } = props;

	return (
		<React.Fragment>

			<React.Fragment>&nbsp;-&nbsp;</React.Fragment>

			{
				theatre.get('surTheatre') && (
					<React.Fragment><InstanceLink instance={theatre.get('surTheatre')} />:&nbsp;</React.Fragment>
				)
			}

			<InstanceLink instance={theatre} />

		</React.Fragment>
	);

};

AppendedTheatre.propTypes = {
	theatre: ImmutablePropTypes.map.isRequired
};

export default AppendedTheatre;
