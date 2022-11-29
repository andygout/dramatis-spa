import PropTypes from 'prop-types';
import React from 'react';

import { AppendedFormatAndYear, AppendedWritingCredits, InstanceLink, PrependedSurInstance } from '.';

const Materials = props => {

	const { materials } = props;

	return (
		<React.Fragment>

			{
				materials
					.map((material, index) =>
						<React.Fragment key={index}>

							{
								material.surMaterial && (
									<PrependedSurInstance surInstance={material.surMaterial} />
								)
							}

							<InstanceLink instance={material} />

							{
								(material.format || material.year) && (
									<AppendedFormatAndYear
										format={material.format}
										year={material.year}
									/>
								)
							}

							{
								material.writingCredits?.length > 0 && (
									<AppendedWritingCredits credits={material.writingCredits} />
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
	materials: PropTypes.array.isRequired
};

export default Materials;
