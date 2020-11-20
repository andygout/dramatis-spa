import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

const AppendedDepictions = props => {

	const { depictions } = props;

	return (
		<React.Fragment>

			{
				depictions
					.map((depiction, index) =>
						<React.Fragment key={index}>

							{
								depiction.get('displayName') && (
									<React.Fragment>&nbsp;(as <span className="role-text">{ depiction.get('displayName') }</span>)</React.Fragment>
								)
							}

							{
								depiction.get('qualifier') && (
									<React.Fragment>&nbsp;({ depiction.get('qualifier') })</React.Fragment>
								)
							}

							{
								depiction.get('group') && (
									<React.Fragment>&nbsp;({ depiction.get('group') })</React.Fragment>
								)
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ' / ', curr])
			}

		</React.Fragment>
	);

};

AppendedDepictions.propTypes = {
	depictions: ImmutablePropTypes.listOf(
		ImmutablePropTypes.contains({
			displayName: PropTypes.string,
			qualifier: PropTypes.string,
			group: PropTypes.string
		})
	).isRequired
};

export default AppendedDepictions;
