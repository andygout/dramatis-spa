import { InstanceLink, ListWrapper } from '../../components/index.js';
import { ListPageWrapper } from '../../page-wrappers/index.js';
import { useGetAwardCeremoniesQuery } from '../../../redux/slices/api.js';

const AwardCeremonies = () => {

	const { data: awardCeremonies = [] } = useGetAwardCeremoniesQuery();

	return (
		<ListPageWrapper pageTitleText='Award ceremonies'>

			<ListWrapper>

				{
					awardCeremonies.map((awardCeremony, index) =>
						<li key={index}>

							{
								awardCeremony.award && (
									<>

										<InstanceLink instance={awardCeremony.award} />

										<>{': '}</>

									</>
								)
							}

							<InstanceLink instance={awardCeremony} />

						</li>
					)
				}

			</ListWrapper>

		</ListPageWrapper>
	);

};

export default AwardCeremonies;
