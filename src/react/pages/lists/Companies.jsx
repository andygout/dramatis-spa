import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const Companies = props => {

	const { companies } = props;

	return (
		<ListPageWrapper pageTitleText='Companies'>

			<InstanceLinksList instances={companies} />

		</ListPageWrapper>
	);

};

Companies.propTypes = {
	companies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	companies: state.companies
});

export default connect(mapStateToProps)(Companies);
