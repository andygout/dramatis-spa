import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { AppendedWriterGroups, InstanceFacet, InstanceLink, List } from '../../components';
import { InstanceWrapper } from '../../utils';

class Production extends React.Component {

	render () {

		const { production } = this.props;

		const theatre = production.get('theatre');
		const playtext = production.get('playtext');
		const cast = production.get('cast');

		return (
			<InstanceWrapper instance={production}>

				{
					playtext && (
						<InstanceFacet labelText='Playtext'>

							<InstanceLink instance={playtext} />

							{
								playtext.get('writerGroups')?.size > 0 && (
									<AppendedWriterGroups writerGroups={playtext.get('writerGroups')} />
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
