import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { InstanceFacet, List } from '../../components';
import { InstanceWrapper } from '../../utils';

class Playtext extends React.Component {

	render () {

		const { playtext } = this.props;

		const productions = playtext.get('productions');
		const characters = playtext.get('characters');

		return (
			<InstanceWrapper instance={playtext}>

				{
					productions?.size > 0 && (
						<InstanceFacet labelText='Productions'>

							<List instances={productions} />

						</InstanceFacet>
					)
				}

				{
					characters?.size > 0 && (
						<InstanceFacet labelText='Characters'>

							<List instances={characters} />

						</InstanceFacet>
					)
				}

			</InstanceWrapper>
		);

	}

}

Playtext.propTypes = {
	playtext: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	playtext: state.get('playtext')
});

export default connect(mapStateToProps)(Playtext);
