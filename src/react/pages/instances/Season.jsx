import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { InstanceFacet, ProductionsList } from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';

const Season = props => {

	const { season } = props;

	const { productions } = season;

	return (
		<InstancePageWrapper instance={season}>

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

Season.propTypes = {
	season: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	season: state.season
});

export default connect(mapStateToProps)(Season);
