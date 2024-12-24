import { InstanceLink, ListWrapper } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';
import { useGetFestivalsQuery } from '../../../redux/slices/api.js';

const Festivals = () => {

	const { data: festivals = [] } = useGetFestivalsQuery();

	return (
		<ListPageWrapper pageTitleText='Festivals'>

			<ListWrapper>

				{
					festivals.map((festival, index) =>
						<li key={index}>

							{
								festival.festivalSeries && (
									<>

										<InstanceLink instance={festival.festivalSeries} />

										<>{': '}</>

									</>
								)
							}

							<InstanceLink instance={festival} />

						</li>
					)
				}

			</ListWrapper>

		</ListPageWrapper>
	);

};

export default Festivals;
