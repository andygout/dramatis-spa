import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { Entities, InstanceFacet, InstanceLink, Materials, Productions } from '../../components';
import { InstanceWrapper } from '../../utils';

const AwardCeremony = props => {

	const { awardCeremony } = props;

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
													<span className={nomination.get('isWinner') ? 'nomination-winner-text' : ''}>
														{`${nomination.get('type')}: `}
													</span>

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

};

AwardCeremony.propTypes = {
	awardCeremony: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	awardCeremony: state.get('awardCeremony')
});

export default connect(mapStateToProps)(AwardCeremony);
