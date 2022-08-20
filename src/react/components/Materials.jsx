import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { AppendedFormatAndYear, AppendedWritingCredits, InstanceLink, PrependedSurMaterial } from '.';

const Materials = props => {

	const { materials } = props;

	return (
		<React.Fragment>

			{
				materials
					.map((material, index) =>
						<React.Fragment key={index}>

							{
								material.get('surMaterial') && (
									<PrependedSurMaterial surMaterial={material.get('surMaterial')} />
								)
							}

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
	materials: ImmutablePropTypes.list.isRequired
};

export default Materials;
