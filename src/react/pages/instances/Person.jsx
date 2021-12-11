import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import {
	AppendedCoEntities,
	AppendedEmployerCompany,
	InstanceFacet,
	InstanceLink,
	List,
	Productions
} from '../../components';
import { InstanceWrapper } from '../../utils';

class Person extends React.Component {

	render () {

		const { person } = this.props;

		const materials = person.get('materials');
		const subsequentVersionMaterials = person.get('subsequentVersionMaterials');
		const sourcingMaterials = person.get('sourcingMaterials');
		const rightsGrantorMaterials = person.get('rightsGrantorMaterials');
		const producerProductions = person.get('producerProductions');
		const castMemberProductions = person.get('castMemberProductions');
		const creativeProductions = person.get('creativeProductions');
		const crewProductions = person.get('crewProductions');
		const awards = person.get('awards');

		return (
			<InstanceWrapper instance={person}>

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
					castMemberProductions?.size > 0 && (
						<InstanceFacet labelText='Productions'>

							<List instances={castMemberProductions} />

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
																						nomination.get('employerCompany') && (
																							<AppendedEmployerCompany
																								employerCompany={nomination.get('employerCompany')}
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

Person.propTypes = {
	person: PropTypes.instanceOf(Map).isRequired
};

const mapStateToProps = state => ({
	person: state.get('person')
});

export default connect(mapStateToProps)(Person);
