import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { CommaSeparatedInstanceLinks } from '.';
import { capitalise } from '../../lib/strings';

const WriterGroups = props => {

	const { writerGroups, isAppendage } = props;

	return (
		<React.Fragment>

			{
				writerGroups
					.map((writerGroup, index) => {

						const writerGroupName = !isAppendage && index === 0
							? capitalise(writerGroup.get('name'))
							: writerGroup.get('name');

						return (
							<React.Fragment key={index}>

								<React.Fragment>{ writerGroupName }&nbsp;</React.Fragment>

								<CommaSeparatedInstanceLinks instances={writerGroup.get('writers')} />

							</React.Fragment>
						);

					})
					.reduce((prev, curr) => [prev, '; ', curr])
			}

		</React.Fragment>
	);

};

WriterGroups.propTypes = {
	writerGroups: ImmutablePropTypes.list.isRequired,
	isAppendage: PropTypes.bool.isRequired
};

export default WriterGroups;
