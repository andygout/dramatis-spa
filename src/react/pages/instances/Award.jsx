import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { InstanceFacet, List } from '../../components';
import { InstanceWrapper } from '../../utils';

const Award = props => {

	const { award } = props;

	const ceremonies = award.get('ceremonies');

	return (
		<InstanceWrapper instance={award}>

			{
				ceremonies?.size > 0 && (
					<InstanceFacet labelText='Ceremonies'>

						<List instances={ceremonies} />

					</InstanceFacet>
				)
			}

		</InstanceWrapper>
	);

};

Award.propTypes = {
	award: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	award: state.get('award')
});

export default connect(mapStateToProps)(Award);
