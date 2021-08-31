import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceFacet, List } from '../../components';
import { InstanceWrapper } from '../../utils';

class Award extends React.Component {

	render () {

		const { award } = this.props;

		const awardCeremonies = award.get('awardCeremonies');

		return (
			<InstanceWrapper instance={award}>

				{
					awardCeremonies?.size > 0 && (
						<InstanceFacet labelText='Award ceremonies'>

							<List instances={awardCeremonies} />

						</InstanceFacet>
					)
				}

			</InstanceWrapper>
		);

	}

}

Award.propTypes = {
	award: PropTypes.instanceOf(Map).isRequired
};

const mapStateToProps = state => ({
	award: state.get('award')
});

export default connect(mapStateToProps)(Award);
