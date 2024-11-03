import PropTypes from 'prop-types';

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

AppendedEmployerCompany.propTypes = {
	employerCompany: PropTypes.object.isRequired
};

export default AppendedEmployerCompany;
