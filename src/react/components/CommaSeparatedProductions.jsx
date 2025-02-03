import { Fragment } from 'react';

import ProductionLinkWithContext from './ProductionLinkWithContext.jsx';

const CommaSeparatedProductions = props => {

	const { productions } = props;

	return (
		<>

			{
				productions
					.map((production, index) =>
						<Fragment key={index}>

							<ProductionLinkWithContext production={production} />

						</Fragment>
					)
					.reduce((accumulator, currentValue) => [accumulator, ', ', currentValue])
			}

		</>
	);

};

export default CommaSeparatedProductions;
