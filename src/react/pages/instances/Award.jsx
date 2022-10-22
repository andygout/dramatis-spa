import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceFacet, List } from '../../components';
import { InstanceWrapper } from '../../wrappers';

const Award = props => {

	const { award } = props;

	const {
		ceremonies
	} = award;

	return (
		<InstanceWrapper instance={award}>

			{
				ceremonies?.length > 0 && (
					<InstanceFacet labelText='Ceremonies'>

						<List instances={ceremonies} />

					</InstanceFacet>
				)
			}

		</InstanceWrapper>
	);

};

Award.propTypes = {
	award: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	award: state.award
});

export default connect(mapStateToProps)(Award);
