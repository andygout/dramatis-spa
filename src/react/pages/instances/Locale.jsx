import { useParams } from 'react-router';

import { useGetLocaleQuery } from '../../../redux/slices/api.js';
import { InstancePageWrapper } from '../../page-wrappers/index.js';

const Locale = () => {
	const { uuid } = useParams();

	const { data: locale = {} } = useGetLocaleQuery(uuid);

	return <InstancePageWrapper instance={locale} />;
};

export default Locale;
