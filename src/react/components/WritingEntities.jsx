import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { AppendedFormatAndYear, InstanceLink, WritingCredits } from '.';

const WritingEntities = props => {

	const { entities } = props;

	return (
		<React.Fragment>

			{
				entities
					.map((entity, index) =>
						<React.Fragment key={index}>

							{
								entity.get('uuid')
									? <InstanceLink instance={entity} />
									: entity.get('name')
							}

							{
								(entity.get('format') || entity.get('year')) && (
									<AppendedFormatAndYear format={entity.get('format')} year={entity.get('year')} />
								)
							}

							{
								entity.get('writingCredits')?.size > 0 && (
									<React.Fragment>

										<React.Fragment>{' '}</React.Fragment>

										<WritingCredits credits={entity.get('writingCredits')} isAppendage={true} />

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
	entities: PropTypes.instanceOf(List).isRequired
};

export default WritingEntities;
