import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
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
	awardCeremony: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	awardCeremony: state.get('awardCeremony')
});

export default connect(mapStateToProps)(AwardCeremony);
