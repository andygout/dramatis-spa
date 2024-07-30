import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceFacet, InstanceLinksList } from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';

const Award = props => {

	const { award } = props;

	const { ceremonies } = award;

	return (
		<InstancePageWrapper instance={award}>

			{
				ceremonies?.length > 0 && (
					<InstanceFacet labelText='Ceremonies'>

						<InstanceLinksList instances={ceremonies} />

					</InstanceFacet>
				)
			}

		</InstancePageWrapper>
	);

};

Award.propTypes = {
	award: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	award: state.award
});

export default connect(mapStateToProps)(Award);
