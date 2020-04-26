import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { RelatedInstance } from '../../components';
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
						<RelatedInstance labelText='Theatre' instance={theatre} />
					)
				}

				{
					playtext && (
						<RelatedInstance labelText='Playtext' instance={playtext} />
					)
				}

				{
					cast && cast.size > 0 && (
						<RelatedInstance labelText='Cast' instance={cast} />
					)
				}

			</InstanceWrapper>
		);

	};

};

Production.propTypes = { production: ImmutablePropTypes.map.isRequired };

const mapStateToProps = state => ({ production: state.get('production') });

export default connect(mapStateToProps)(Production);
