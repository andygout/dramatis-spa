import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { Entities, InstanceFacet, InstanceLink, Materials, Productions } from '../../components';
import { InstanceWrapper } from '../../utils';

class AwardCeremony extends React.Component {

	render () {

		const { awardCeremony } = this.props;

		const award = awardCeremony.get('award');
		const categories = awardCeremony.get('categories');

		return (
			<InstanceWrapper instance={awardCeremony}>

				{
					award && (
						<InstanceFacet labelText='Award'>

							<InstanceLink instance={award} />

						</InstanceFacet>
					)
				}

				{
					categories?.size > 0 && (
						<InstanceFacet labelText='Categories'>

							{
								categories.map((category, index) =>
									<React.Fragment key={index}>
										{ category.get('name') }

										<ul className="list">

											{
												category.get('nominations').map((nomination, index) =>
													<li key={index}>
														{
															nomination.get('isWinner')
																? (<span>{'Winner: '}</span>)
																: (<span>{'Nomination: '}</span>)
														}

														{
															nomination.get('entities').size > 0 && (
																<Entities entities={nomination.get('entities')} />
															)
														}

														{
															nomination.get('entities').size > 0 &&
															(
																nomination.get('productions').size > 0 ||
																nomination.get('materials').size > 0
															) && (
																<React.Fragment>{' for '}</React.Fragment>
															)
														}

														{
															nomination.get('productions').size > 0 && (
																<Productions
																	productions={nomination.get('productions')}
																/>
															)
														}

													{
														nomination.get('productions').size > 0 &&
														nomination.get('materials').size > 0 && (
															<React.Fragment>{'; '}</React.Fragment>
														)
													}

														{
															nomination.get('materials').size > 0 && (
																<Materials materials={nomination.get('materials')} />
															)
														}
													</li>
												)
											}

										</ul>
									</React.Fragment>
								)
							}

						</InstanceFacet>
					)
				}

			</InstanceWrapper>
		);

	}

}

AwardCeremony.propTypes = {
	awardCeremony: PropTypes.instanceOf(Map).isRequired
};

const mapStateToProps = state => ({
	awardCeremony: state.get('awardCeremony')
});

export default connect(mapStateToProps)(AwardCeremony);