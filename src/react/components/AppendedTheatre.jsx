import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { InstanceLink } from '.';

const AppendedTheatre = props => {

	const { theatre } = props;

	return (
		<React.Fragment>

			<span>&nbsp;-&nbsp;</span>

			{
				theatre.get('surTheatre') && (
					<span><InstanceLink instance={theatre.get('surTheatre')} />: </span>
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
