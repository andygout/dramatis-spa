import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { InstanceDocumentTitle, InstanceLabel, PageTitle } from '../components';

class InstanceWrapper extends React.Component {

	render () {

		const { instance, children } = this.props;

		return (
			<React.Fragment>

				{
					instance.get('name') && instance.get('model') && (
						<InstanceDocumentTitle
							name={instance.get('name')}
							model={instance.get('model')}
						/>
					)
				}

				<InstanceLabel text={instance.get('model', '')} />

				<PageTitle text={instance.get('name', '')} />

				{ children }

			</React.Fragment>
		);

	}

}

InstanceWrapper.propTypes = {
	instance: ImmutablePropTypes.map.isRequired,
	children: PropTypes.node.isRequired
};

export default InstanceWrapper;
