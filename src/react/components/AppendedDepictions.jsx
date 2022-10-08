import PropTypes from 'prop-types';
import React from 'react';

const AppendedDepictions = props => {

	const { depictions } = props;

	return (
		<React.Fragment>

			{
				depictions
					.map((depiction, index) =>
						<React.Fragment key={index}>

							{
								depiction.displayName && (
									<React.Fragment>{' (as '}<span className="role-text">{ depiction.displayName }</span>)</React.Fragment>
								)
							}

							{
								depiction.qualifier && (
									<React.Fragment>{` (${depiction.qualifier})`}</React.Fragment>
								)
							}

							{
								depiction.group && (
									<React.Fragment>{` (${depiction.group})`}</React.Fragment>
								)
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ' /', curr])
			}

		</React.Fragment>
	);

};

AppendedDepictions.propTypes = {
	depictions: PropTypes.array.isRequired
};

export default AppendedDepictions;
