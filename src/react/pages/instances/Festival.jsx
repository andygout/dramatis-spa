import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceFacet, InstanceLink, ProductionsList } from '../../components';
import { InstancePageWrapper } from '../../page-wrappers';

const Festival = props => {

	const { festival } = props;

	const { festivalSeries, productions } = festival;

	return (
		<InstancePageWrapper instance={festival}>

			{
				festivalSeries && (
					<InstanceFacet labelText='Festival series'>

						<InstanceLink instance={festivalSeries} />

					</InstanceFacet>
				)
			}

			{
				productions?.length > 0 && (
					<InstanceFacet labelText='Productions'>

						<ProductionsList productions={productions} />

					</InstanceFacet>
				)
			}

		</InstancePageWrapper>
	);

};

Festival.propTypes = {
	festival: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	festival: state.festival
});

export default connect(mapStateToProps)(Festival);
