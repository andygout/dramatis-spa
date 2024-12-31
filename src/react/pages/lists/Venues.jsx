import { InstanceLink, ListWrapper } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';
import { useGetVenuesQuery } from '../../../redux/slices/api.js';

const Venues = () => {

	const { data: venues = [] } = useGetVenuesQuery();

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

export default Venues;
