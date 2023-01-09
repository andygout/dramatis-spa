import PropTypes from 'prop-types';
import React from 'react';

import { AppendedFormatAndYear, InstanceLink, PrependedSurInstance, WritingCredits } from '.';

const MaterialLinkWithContext = props => {

	const { material } = props;

	return (
		<React.Fragment>

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
					<React.Fragment>

						<React.Fragment>{' '}</React.Fragment>

						<WritingCredits credits={material.writingCredits} isAppendage={true} />

					</React.Fragment>
				)
			}

		</React.Fragment>
	);

};

MaterialLinkWithContext.propTypes = {
	material: PropTypes.object.isRequired
};

export default MaterialLinkWithContext;
