import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { InstanceFacet, InstanceLink, List } from '../../components';
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
					theatre && (
						<InstanceFacet labelText='Theatre'>

							<InstanceLink instance={theatre} />

						</InstanceFacet>
					)
				}

				{
					playtext && (
						<InstanceFacet labelText='Playtext'>

							<InstanceLink instance={playtext} />

						</InstanceFacet>
					)
				}

				{
					cast && cast.size > 0 && (
						<InstanceFacet labelText='Cast'>

							<List instances={cast} />

						</InstanceFacet>
					)
				}

			</InstanceWrapper>
		);

	};

};

Production.propTypes = { production: ImmutablePropTypes.map.isRequired };

const mapStateToProps = state => ({ production: state.get('production') });

export default connect(mapStateToProps)(Production);
