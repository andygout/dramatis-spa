import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { RelatedInstance } from '../../components';
import { InstanceWrapper } from '../../utils';

class Playtext extends React.Component {

	render () {

		const { playtext } = this.props;

		const productions = playtext.get('productions');
		const characters = playtext.get('characters');

		return (
			<InstanceWrapper instance={playtext}>

				{
					productions && productions.size > 0 && (
						<RelatedInstance labelText='Productions' instance={productions} />
					)
				}

				{
					characters && characters.size > 0 && (
						<RelatedInstance labelText='Characters' instance={characters} />
					)
				}

			</InstanceWrapper>
		);

	};

};

Playtext.propTypes = { playtext: ImmutablePropTypes.map.isRequired };

const mapStateToProps = state => ({ playtext: state.get('playtext') });

export default connect(mapStateToProps)(Playtext);
