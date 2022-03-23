import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { AppendedFormatAndYear, AppendedWritingCredits, InstanceLink } from '.';

const Materials = props => {

	const { materials } = props;

	return (
		<React.Fragment>

			{
				materials
					.map((material, index) =>
						<React.Fragment key={index}>

							<InstanceLink instance={material} />

							{
								(material.get('format') || material.get('year')) && (
									<AppendedFormatAndYear
										format={material.get('format')}
										year={material.get('year')}
									/>
								)
							}

							{
								material.get('writingCredits')?.size > 0 && (
									<AppendedWritingCredits credits={material.get('writingCredits')} />
								)
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ', ', curr])
			}

		</React.Fragment>
	);

};

Materials.propTypes = {
	materials: PropTypes.instanceOf(List).isRequired
};

export default Materials;
