import PropTypes from 'prop-types';

import { ListWrapper, MaterialLinkWithContext } from './index.js';

const MaterialsList = props => {

	const { materials } = props;

	return (
		<ListWrapper>

			{
				materials.map((material, index) =>
					<li key={index}>

						<MaterialLinkWithContext material={material} />

					</li>
				)
			}

		</ListWrapper>
	);

};

MaterialsList.propTypes = {
	materials: PropTypes.array.isRequired
};

export default MaterialsList;
