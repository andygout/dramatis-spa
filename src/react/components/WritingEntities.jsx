import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { AppendedFormat, InstanceLink, WritingCredits } from '.';

const WritingEntities = props => {

	const { writingEntities } = props;

	return (
		<React.Fragment>

			{
				writingEntities
					.map((writingEntity, index) =>
						<React.Fragment key={index}>

							{
								writingEntity.get('uuid')
									? <InstanceLink instance={writingEntity} />
									: writingEntity.get('name')
							}

							{
								writingEntity.get('format') && (
									<AppendedFormat format={writingEntity.get('format')} />
								)
							}

							{
								writingEntity.get('sourceMaterialWritingCredits')?.size > 0 && (
									<React.Fragment>&nbsp;

										<WritingCredits
											writingCredits={writingEntity.get('sourceMaterialWritingCredits')}
											isAppendage={true}
										/>

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
	writingEntities: ImmutablePropTypes.list.isRequired
};

export default WritingEntities;
