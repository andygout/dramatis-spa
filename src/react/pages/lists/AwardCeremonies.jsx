import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceLink, ListWrapper } from '../../components';
import { ListPageWrapper } from '../../page-wrappers';

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
									<React.Fragment>

										<InstanceLink instance={awardCeremony.award} />

										<React.Fragment>{': '}</React.Fragment>

									</React.Fragment>
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
