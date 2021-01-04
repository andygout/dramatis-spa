import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { AppendedFormat, InstanceLink, WriterGroups } from '.';

const WriterEntities = props => {

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
								entity.get('format') && (
									<AppendedFormat format={entity.get('format')} />
								)
							}

							{
								entity.get('sourceMaterialWriterGroups')?.size > 0 && (
									<React.Fragment>&nbsp;

										<WriterGroups
											writerGroups={entity.get('sourceMaterialWriterGroups')}
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

WriterEntities.propTypes = {
	entities: ImmutablePropTypes.list.isRequired
};

export default WriterEntities;
