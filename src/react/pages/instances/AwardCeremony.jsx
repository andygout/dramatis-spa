import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { connect } from 'react-redux';

import {
	CommaSeparatedMaterials,
	CommaSeparatedProductions,
	Entities,
	InstanceFacet,
	InstanceLink,
	ListWrapper
} from '../../components/index.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';

const AwardCeremony = props => {

	const { awardCeremony } = props;

	const { award, categories } = awardCeremony;

	return (
		<InstancePageWrapper instance={awardCeremony}>

			{
				award && (
					<InstanceFacet labelText='Award'>

						<InstanceLink instance={award} />

					</InstanceFacet>
				)
			}

			{
				categories?.length > 0 && (
					<InstanceFacet labelText='Categories'>

						{
							categories.map((category, index) =>
								<Fragment key={index}>
									{ category.name }

									<ListWrapper>

										{
											category.nominations.map((nomination, index) =>
												<li key={index}>
													<span className={nomination.isWinner ? 'nomination-winner-text' : ''}>
														{`${nomination.type}: `}
													</span>

													{
														nomination.entities.length > 0 && (
															<Entities entities={nomination.entities} />
														)
													}

													{
														nomination.entities.length > 0 &&
														(
															nomination.productions.length > 0 ||
															nomination.materials.length > 0
														) && (
															<>{' for '}</>
														)
													}

													{
														nomination.productions.length > 0 && (
															<CommaSeparatedProductions
																productions={nomination.productions}
															/>
														)
													}

													{
														nomination.productions.length > 0 &&
														nomination.materials.length > 0 && (
															<>{'; '}</>
														)
													}

													{
														nomination.materials.length > 0 && (
															<CommaSeparatedMaterials
																materials={nomination.materials}
															/>
														)
													}
												</li>
											)
										}

									</ListWrapper>
								</Fragment>
							)
						}

					</InstanceFacet>
				)
			}

		</InstancePageWrapper>
	);

};

AwardCeremony.propTypes = {
	awardCeremony: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	awardCeremony: state.awardCeremony
});

export default connect(mapStateToProps)(AwardCeremony);
