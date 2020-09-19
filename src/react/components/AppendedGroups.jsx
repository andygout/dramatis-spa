import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

const AppendedGroups = props => {

	const { groups } = props;

	return (
		<React.Fragment>

			<span> ({groups.reduce((prev, curr) => [prev, ', ', curr])})</span>

		</React.Fragment>
	);

};

AppendedGroups.propTypes = {
	groups: ImmutablePropTypes.list.isRequired
};

export default AppendedGroups;
