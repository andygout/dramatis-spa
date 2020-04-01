import React from 'react';

import { InstanceLink, JoinedRoles } from '.';

const List = props => {

	return (
		<ul className="list">
			{
				props.instances.map((instance, index) => (
					<li key={index}>

						<InstanceLink instance={instance}/>

						{
							instance.get('theatre')
								? (
									<span>

										&nbsp;-&nbsp;

										<InstanceLink instance={instance.get('theatre')}/>

									</span>
								)
								: null
						}

						{
							instance.get('roles') && instance.get('roles').size
								? (
									<span>

										&nbsp;…&nbsp;

										<span className="role-text">

											<JoinedRoles instances={instance.get('roles')}/>

										</span>

									</span>
								)
								: null
						}

						{
							instance.get('performers') && instance.get('performers').size
								? (
									<span>

										&nbsp;- performed by:&nbsp;

										{
											instance.get('performers')
												.map((performer, index) =>
													<span key={index}>

														<span>

															<InstanceLink instance={performer}/>

															&nbsp;…&nbsp;

															<span className="role-text">{performer.getIn(['role', 'name'])}</span>

														</span>

														{
															performer.get('otherRoles').size
																? (
																	<span>; also performed:&nbsp;

																		<span className="role-text">

																			<JoinedRoles instances={performer.get('otherRoles')}/>

																		</span>

																	</span>
																)
																: null
														}

													</span>
												)
												.reduce((prev, curr) => [prev, ' / ', curr])
										}

									</span>
								)
								: null
						}

					</li>
				))
			}
		</ul>
	);

};

export default List;
