import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceFacet, InstanceLink } from '../../components';
import { InstanceWrapper } from '../../utils';

class AwardCeremony extends React.Component {

	render () {

		const { awardCeremony } = this.props;

		const award = awardCeremony.get('award');

		return (
			<InstanceWrapper instance={awardCeremony}>

				{
					award && (
						<InstanceFacet labelText='Award'>

							<InstanceLink instance={award} />

						</InstanceFacet>
					)
				}

			</InstanceWrapper>
		);

	}

}

AwardCeremony.propTypes = {
	awardCeremony: PropTypes.instanceOf(Map).isRequired
};

const mapStateToProps = state => ({
	awardCeremony: state.get('awardCeremony')
});

export default connect(mapStateToProps)(AwardCeremony);
