import PropTypes from 'prop-types';
import React from 'react';

const AppendedDepictions = props => {

	const { depictions } = props;

	return (
		<>

			{
				depictions
					.map((depiction, index) =>
						<React.Fragment key={index}>

							{
								depiction.displayName && (
									<>
										{' (as '}<span className="fictional-name-text">{ depiction.displayName }</span>)
									</>
								)
							}

							{
								depiction.qualifier && (
									<>{` (${depiction.qualifier})`}</>
								)
							}

							{
								depiction.group && (
									<>{` (${depiction.group})`}</>
								)
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ' /', curr])
			}

		</>
	);

};

AppendedDepictions.propTypes = {
	depictions: PropTypes.array.isRequired
};

export default AppendedDepictions;
