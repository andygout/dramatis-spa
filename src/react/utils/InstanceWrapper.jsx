import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import getDifferentiatorSuffix from '../../lib/get-differentiator-suffix';
import getInstanceTitle from '../../lib/get-instance-title';
import { InstanceDocumentTitle, InstanceLabel, PageTitle } from '../components';

class InstanceWrapper extends React.Component {

	render () {

		const { instance, children } = this.props;

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

	}

}

InstanceWrapper.propTypes = {
	instance: PropTypes.instanceOf(Map).isRequired,
	titleName: PropTypes.string,
	children: PropTypes.node
};

export default InstanceWrapper;
