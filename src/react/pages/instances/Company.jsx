import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import {
	AppendedCoEntities,
	AppendedMembers,
	InstanceFacet,
	InstanceLink,
	List,
	Materials,
	Productions
} from '../../components';
import { InstanceWrapper } from '../../utils';

class Company extends React.Component {

	render () {

		const { company } = this.props;

		const materials = company.get('materials');
		const subsequentVersionMaterials = company.get('subsequentVersionMaterials');
		const sourcingMaterials = company.get('sourcingMaterials');
		const rightsGrantorMaterials = company.get('rightsGrantorMaterials');
		const producerProductions = company.get('producerProductions');
		const creativeProductions = company.get('creativeProductions');
		const crewProductions = company.get('crewProductions');
		const awards = company.get('awards');

		return (
			<InstanceWrapper instance={company}>

				{
					materials?.size > 0 && (
						<InstanceFacet labelText='Materials'>

							<List instances={materials} />

						</InstanceFacet>
					)
				}

				{
					subsequentVersionMaterials?.size > 0 && (
						<InstanceFacet labelText='Subsequent versions of their materials'>

							<List instances={subsequentVersionMaterials} />

						</InstanceFacet>
					)
				}

				{
					sourcingMaterials?.size > 0 && (
						<InstanceFacet labelText='Materials as source material writer'>

							<List instances={sourcingMaterials} />

						</InstanceFacet>
					)
				}

				{
					rightsGrantorMaterials?.size > 0 && (
						<InstanceFacet labelText='Materials as rights grantor'>

							<List instances={rightsGrantorMaterials} />

						</InstanceFacet>
					)
				}

				{
					producerProductions?.size > 0 && (
						<InstanceFacet labelText='Productions as producer'>

							<List instances={producerProductions} />

						</InstanceFacet>
					)
				}

				{
					creativeProductions?.size > 0 && (
						<InstanceFacet labelText='Productions as creative team member'>

							<List instances={creativeProductions} />

						</InstanceFacet>
					)
				}

				{
					crewProductions?.size > 0 && (
						<InstanceFacet labelText='Productions as crew member'>

							<List instances={crewProductions} />

						</InstanceFacet>
					)
				}

				{
					awards?.size > 0 && (
						<InstanceFacet labelText='Awards'>

							{
								awards.map((award, index) =>
									<React.Fragment key={index}>
										<InstanceLink instance={award} />

										<ul className="list">

											{
												award.get('ceremonies').map((ceremony, index) =>
													<li key={index}>
														<InstanceLink instance={ceremony} />{': '}

														{
															ceremony.get('categories')
																.map((category, index) =>
																	<React.Fragment key={index}>
																		{ category.get('name') }{': '}

																		{
																			category.get('nominations')
																				.map((nomination, index) =>
																					<React.Fragment key={index}>
																						{
																							nomination.get('isWinner')
																								? (<span>{'Winner'}</span>)
																								: (<span>{'Nomination'}</span>)
																						}

																						{
																							nomination.get('members')?.size > 0 && (
																								<AppendedMembers
																									members={nomination.get('members')}
																								/>
																							)
																						}

																						{
																							nomination.get('coEntities').size > 0 && (
																								<AppendedCoEntities
																									coEntities={nomination.get('coEntities')}
																								/>
																							)
																						}

																						{
																							nomination.get('productions').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{' for '}</React.Fragment>
																									<Productions
																										productions={nomination.get('productions')}
																									/>
																								</React.Fragment>
																							)
																						}

																						{
																							nomination.get('productions').size > 0 &&
																							nomination.get('materials').size > 0 && (
																								<React.Fragment>{';'}</React.Fragment>
																							)
																						}

																						{
																							nomination.get('materials').size > 0 && (
																								<React.Fragment>
																									<React.Fragment>{' for '}</React.Fragment>
																									<Materials
																										materials={nomination.get('materials')}
																									/>
																								</React.Fragment>
																							)
																						}
																					</React.Fragment>
																				)
																				.reduce((prev, curr) => [prev, ', ', curr])
																		}
																	</React.Fragment>
																)
																.reduce((prev, curr) => [prev, '; ', curr])
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

Company.propTypes = {
	company: PropTypes.instanceOf(Map).isRequired
};

const mapStateToProps = state => ({
	company: state.get('company')
});

export default connect(mapStateToProps)(Company);
