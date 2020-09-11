import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

const AppendedQualifiers = props => {

	const { qualifiers } = props;

	return (
		<React.Fragment>

			<span> ({qualifiers.reduce((prev, curr) => [prev, ', ', curr])})</span>

		</React.Fragment>
	);

};

AppendedQualifiers.propTypes = {
	qualifiers: ImmutablePropTypes.list.isRequired
};

export default AppendedQualifiers;
