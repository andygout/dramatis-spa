import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { AppendedFormat, AppendedWritingCredits, InstanceFacet, InstanceLink, List } from '../../components';
import { InstanceWrapper } from '../../utils';

class Production extends React.Component {

	render () {

		const { production } = this.props;

		const theatre = production.get('theatre');
		const material = production.get('material');
		const cast = production.get('cast');

		return (
			<InstanceWrapper instance={production}>

				{
					material && (
						<InstanceFacet labelText='Material'>

							<InstanceLink instance={material} />

							{
								material.get('format') && (
									<AppendedFormat format={material.get('format')} />
								)
							}

							{
								material.get('writingCredits')?.size > 0 && (
									<AppendedWritingCredits writingCredits={material.get('writingCredits')} />
								)
							}

						</InstanceFacet>
					)
				}

				{
					theatre && (
						<InstanceFacet labelText='Theatre'>

							{
								theatre.get('surTheatre') && (
									<span><InstanceLink instance={theatre.get('surTheatre')} />: </span>
								)
							}

							<InstanceLink instance={theatre} />

						</InstanceFacet>
					)
				}

				{
					cast?.size > 0 && (
						<InstanceFacet labelText='Cast'>

							<List instances={cast} />

						</InstanceFacet>
					)
				}

			</InstanceWrapper>
		);

	}

}

Production.propTypes = {
	production: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	production: state.get('production')
});

export default connect(mapStateToProps)(Production);
