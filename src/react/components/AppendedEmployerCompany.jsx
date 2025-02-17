import CommaSeparatedInstanceLinks from './CommaSeparatedInstanceLinks.jsx';
import InstanceLink from './InstanceLink.jsx';

const AppendedEmployerCompany = props => {

	const { employerCompany } = props;

	return (
		<>

			<>{' ('}</>

			{
				employerCompany.coMembers?.length > 0 && (
					<>

						<>{'with '}</>

						<CommaSeparatedInstanceLinks instances={employerCompany.coMembers} />

						<>{' '}</>

					</>
				)
			}

			<>{'for '}</>

			<InstanceLink instance={employerCompany} />

			<>{')'}</>

		</>
	);

};

export default AppendedEmployerCompany;
