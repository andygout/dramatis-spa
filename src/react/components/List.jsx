import React from 'react';

import { InstanceLink, JoinedRoles } from '.';

export default function (props) {

	return (
		<ul className="list">
			{
				props.instances.map((instance, index) => (
					<li key={index}>

						<InstanceLink instance={instance} />

						{
							instance.get('theatre') && (
								<span>

									<span>&nbsp;-&nbsp;</span>

									<InstanceLink instance={instance.get('theatre')} />

								</span>
							)
						}

						{
							instance.get('roles') && instance.get('roles').size > 0 && (
								<React.Fragment>

									<span>&nbsp;…&nbsp;</span>

									<JoinedRoles instances={instance.get('roles')} />

								</React.Fragment>
							)
						}

						{
							instance.get('performers') && instance.get('performers').size > 0 && (
								<React.Fragment>

									<span>&nbsp;- performed by:&nbsp;</span>

									{
										instance.get('performers')
											.map((performer, index) =>
												<React.Fragment key={index}>

													<React.Fragment>

														<InstanceLink instance={performer} />

														<span>&nbsp;…&nbsp;</span>

														<span className="role-text">{performer.getIn(['role', 'name'])}</span>

													</React.Fragment>

													{
														performer.get('otherRoles').size > 0 && (
															<React.Fragment>

																<span>; also performed:&nbsp;</span>

																<JoinedRoles instances={performer.get('otherRoles')} />

															</React.Fragment>
														)
													}

												</React.Fragment>
											)
											.reduce((prev, curr) => [prev, ' / ', curr])
									}

								</React.Fragment>
							)
						}

					</li>
				))
			}
		</ul>
	);

};
