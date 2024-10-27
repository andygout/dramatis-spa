import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { InstanceLinksList } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const Characters = props => {

	const { characters } = props;

	return (
		<ListPageWrapper pageTitleText='Characters'>

			<InstanceLinksList instances={characters} />

		</ListPageWrapper>
	);

};

Characters.propTypes = {
	characters: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	characters: state.characters
});

export default connect(mapStateToProps)(Characters);
