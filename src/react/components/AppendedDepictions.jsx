import { List } from 'immutable';
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
								depiction.get('displayName') && (
									<React.Fragment>{' (as '}<span className="role-text">{ depiction.get('displayName') }</span>)</React.Fragment>
								)
							}

							{
								depiction.get('qualifier') && (
									<React.Fragment>{` (${depiction.get('qualifier')})`}</React.Fragment>
								)
							}

							{
								depiction.get('group') && (
									<React.Fragment>{` (${depiction.get('group')})`}</React.Fragment>
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
	depictions: PropTypes.instanceOf(List).isRequired
};

export default AppendedDepictions;
