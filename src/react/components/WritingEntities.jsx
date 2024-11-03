import PropTypes from 'prop-types';
import { Fragment } from 'react';

import AppendedFormatAndYear from './AppendedFormatAndYear.jsx';
import InstanceLink from './InstanceLink.jsx';
import PrependedSurInstance from './PrependedSurInstance.jsx';
import WritingCredits from './WritingCredits.jsx';

const WritingEntities = props => {

	const { entities } = props;

	return (
		<>

			{
				entities
					.map((entity, index) =>
						<Fragment key={index}>

							{
								entity.surMaterial?.surMaterial && (
									<PrependedSurInstance surInstance={entity.surMaterial.surMaterial} />
								)
							}

							{
								entity.surMaterial && (
									<PrependedSurInstance surInstance={entity.surMaterial} />
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
									<>

										<>{' '}</>

										<WritingCredits credits={entity.writingCredits} isAppendage={true} />

									</>
								)
							}

						</Fragment>
					)
					.reduce((accumulator, currentValue, currentIndex) => {

						let separator = ', ';

						if (entities.length === 2) {

							separator = ' and ';

						} else {

							const isFinalIteration = currentIndex === entities.length - 1;

							if (isFinalIteration) separator = ', and ';

						}

						return [accumulator, separator, currentValue];

					})
			}

		</>
	);

};

WritingEntities.propTypes = {
	entities: PropTypes.array.isRequired
};

export default WritingEntities;
