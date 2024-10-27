import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const Seasons = props => {

	const { seasons } = props;

	return (
		<ListPageWrapper pageTitleText='Seasons'>

			<InstanceLinksList instances={seasons} />

		</ListPageWrapper>
	);

};

Seasons.propTypes = {
	seasons: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	seasons: state.seasons
});

export default connect(mapStateToProps)(Seasons);
