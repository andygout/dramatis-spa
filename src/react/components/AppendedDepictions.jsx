import { Fragment } from 'react';

const AppendedDepictions = props => {

	const { depictions } = props;

	return (
		<>

			{
				depictions
					.map((depiction, index) =>
						<Fragment key={index}>

							{
								depiction.displayName && (
									<>
										{' (as '}<span className="fictional-name-text">{ depiction.displayName }</span>)
									</>
								)
							}

							{
								depiction.qualifier && (
									<>{` (${depiction.qualifier})`}</>
								)
							}

							{
								depiction.group && (
									<>{` (${depiction.group})`}</>
								)
							}

						</Fragment>
					)
					.reduce((accumulator, currentValue) => [accumulator, ' /', currentValue])
			}

		</>
	);

};

export default AppendedDepictions;
