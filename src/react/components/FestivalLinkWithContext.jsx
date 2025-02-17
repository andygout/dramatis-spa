import InstanceLink from './InstanceLink.jsx';
import PrependedSurInstance from './PrependedSurInstance.jsx';

const FestivalLinkWithContext = props => {

	const { festival } = props;

	return (
		<>

			{
				festival.festivalSeries && (
					<PrependedSurInstance surInstance={festival.festivalSeries} />
				)
			}

			<InstanceLink instance={festival} />

		</>
	);

};

export default FestivalLinkWithContext;
