import PropTypes from 'prop-types';
import React from 'react';

import { AppendedFormatAndYear, InstanceLink, PrependedSurInstance, WritingCredits } from './index.js';

const MaterialLinkWithContext = props => {

	const { material } = props;

	return (
		<>

			{
				material.surMaterial?.surMaterial && (
					<PrependedSurInstance surInstance={material.surMaterial.surMaterial} />
				)
			}

			{
				material.surMaterial && (
					<PrependedSurInstance surInstance={material.surMaterial} />
				)
			}

			<InstanceLink instance={material} />

			{
				(material.format || material.year) && (
					<AppendedFormatAndYear format={material.format} year={material.year} />
				)
			}

			{
				material.writingCredits?.length > 0 && (
					<>

						<>{' '}</>

						<WritingCredits credits={material.writingCredits} isAppendage={true} />

					</>
				)
			}

		</>
	);

};

MaterialLinkWithContext.propTypes = {
	material: PropTypes.object.isRequired
};

export default MaterialLinkWithContext;
