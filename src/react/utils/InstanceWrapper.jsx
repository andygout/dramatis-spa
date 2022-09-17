import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import getDifferentiatorSuffix from '../../lib/get-differentiator-suffix';
import getInstanceTitle from '../../lib/get-instance-title';
import { InstanceDocumentTitle, InstanceLabel, PageTitle } from '../components';

const InstanceWrapper = props => {

	const { instance, children } = props;

	const title = getInstanceTitle(instance);

	const differentiatorSuffix = getDifferentiatorSuffix(instance.get('differentiator'));

	const pageTitleText = [
		title,
		differentiatorSuffix
	]
		.filter(Boolean)
		.join(' ');

	return (
		<React.Fragment>

			{
				instance.get('name') && instance.get('model') && (
					<InstanceDocumentTitle
						title={title}
						model={instance.get('model')}
						differentiatorSuffix={differentiatorSuffix}
					/>
				)
			}

			<InstanceLabel model={instance.get('model', '')} />

			<PageTitle text={pageTitleText} />

			{ children }

		</React.Fragment>
	);

};

InstanceWrapper.propTypes = {
	instance: ImmutablePropTypes.map.isRequired,
	titleName: PropTypes.string,
	children: PropTypes.node
};

export default InstanceWrapper;
