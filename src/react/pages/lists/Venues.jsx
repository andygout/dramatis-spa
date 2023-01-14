import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { InstanceLink, ListWrapper } from '../../components';
import { ListPageWrapper } from '../../page-wrappers';

const Venues = props => {

	const { venues } = props;

	return (
		<ListPageWrapper pageTitleText='Venues'>

			<ListWrapper>

				{
					venues.map((venue, index) =>
						<li key={index}>

							<InstanceLink instance={venue} />

							{
								venue.subVenues?.length > 0 && (
									<>

										<>{': '}</>

										{
											venue.subVenues
												.map((subVenue, index) =>
													<InstanceLink key={index} instance={subVenue} />
												)
												.reduce((accumulator, currentValue) => [accumulator, ' / ', currentValue])
										}

									</>
								)
							}

						</li>
					)
				}

			</ListWrapper>

		</ListPageWrapper>
	);

};

Venues.propTypes = {
	venues: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	venues: state.venues
});

export default connect(mapStateToProps)(Venues);
