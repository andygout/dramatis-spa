import React from 'react';

import InstanceLink from './instance-link';
import JoinedRoles from './joined-roles';

const List = props => {

	return (
		<ul className="list">
			{
				props.instances.map((instance, index) => (
					<li key={index}>

						<InstanceLink instance={instance} />

						{
							instance.theatre ?
							(
								<span>

									&nbsp;-&nbsp;

									<InstanceLink instance={instance.theatre} />

								</span>
							) :
							null
						}

						{
							instance.roles && instance.roles.length ?
							(
								<span>

									&nbsp;…&nbsp;

									<span className="role-text">

										<JoinedRoles instances={instance.roles} />

									</span>

								</span>
							) :
							null
						}

						{
							instance.performers && instance.performers.length ?
							(
								<span>

									&nbsp;- performed by:&nbsp;

									{
										instance.performers
											.map((performer, index) =>
												<span key={index}>

													<span>

														<InstanceLink instance={performer} />

														&nbsp;…&nbsp;

														<span className="role-text">{performer.role.name}</span>

													</span>

													{
														performer.otherRoles.length ?
														(
															<span>; also performed:&nbsp;

																<span className="role-text">

																	<JoinedRoles instances={performer.otherRoles} />

																</span>

															</span>
														) :
														null
													}

												</span>
											)
									}

								</span>
							) :
							null
						}

					</li>
				))
			}
		</ul>
	);

};

export default List;
