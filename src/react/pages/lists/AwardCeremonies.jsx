import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceLink, ListWrapper } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';

const AwardCeremonies = props => {

	const { awardCeremonies } = props;

	return (
		<ListPageWrapper pageTitleText='Award ceremonies'>

			<ListWrapper>

				{
					awardCeremonies.map((awardCeremony, index) =>
						<li key={index}>

							{
								awardCeremony.award && (
									<>

										<InstanceLink instance={awardCeremony.award} />

										<>{': '}</>

									</>
								)
							}

							<InstanceLink instance={awardCeremony} />

						</li>
					)
				}

			</ListWrapper>

		</ListPageWrapper>
	);

};

AwardCeremonies.propTypes = {
	awardCeremonies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	awardCeremonies: state.awardCeremonies
});

export default connect(mapStateToProps)(AwardCeremonies);
