import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const FestivalSerieses = props => {

	const { festivalSerieses } = props;

	return (
		<ListPageWrapper pageTitleText='Festival serieses'>

			<InstanceLinksList instances={festivalSerieses} />

		</ListPageWrapper>
	);

};

FestivalSerieses.propTypes = {
	festivalSerieses: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	festivalSerieses: state.festivalSerieses
});

export default connect(mapStateToProps)(FestivalSerieses);
