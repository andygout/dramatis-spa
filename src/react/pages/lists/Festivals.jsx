import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceLink, ListWrapper } from '../../components';
import { ListPageWrapper } from '../../page-wrappers';

const Festivals = props => {

	const { festivals } = props;

	return (
		<ListPageWrapper pageTitleText='Festivals'>

			<ListWrapper>

				{
					festivals.map((festival, index) =>
						<li key={index}>

							{
								festival.festivalSeries && (
									<>

										<InstanceLink instance={festival.festivalSeries} />

										<>{': '}</>

									</>
								)
							}

							<InstanceLink instance={festival} />

						</li>
					)
				}

			</ListWrapper>

		</ListPageWrapper>
	);

};

Festivals.propTypes = {
	festivals: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	festivals: state.festivals
});

export default connect(mapStateToProps)(Festivals);
