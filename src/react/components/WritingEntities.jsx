import PropTypes from 'prop-types';
import React from 'react';

import { AppendedFormatAndYear, InstanceLink, PrependedSurMaterial, WritingCredits } from '.';

const WritingEntities = props => {

	const { entities } = props;

	return (
		<React.Fragment>

			{
				entities
					.map((entity, index) =>
						<React.Fragment key={index}>

							{
								entity.surMaterial && (
									<PrependedSurMaterial surMaterial={entity.surMaterial} />
								)
							}

							<InstanceLink instance={entity} />

							{
								(entity.format || entity.year) && (
									<AppendedFormatAndYear format={entity.format} year={entity.year} />
								)
							}

							{
								entity.writingCredits?.length > 0 && (
									<React.Fragment>

										<React.Fragment>{' '}</React.Fragment>

										<WritingCredits credits={entity.writingCredits} isAppendage={true} />

									</React.Fragment>
								)
							}

						</React.Fragment>
					)
					.reduce((prev, curr) => [prev, ', ', curr])
			}

		</React.Fragment>
	);

};

WritingEntities.propTypes = {
	entities: PropTypes.array.isRequired
};

export default WritingEntities;
