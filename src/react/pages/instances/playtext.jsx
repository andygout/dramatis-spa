import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import RelatedInstance from '../../components/related-instance';
import InstanceWrapper from '../../utils/instance-wrapper';

class Playtext extends React.Component {

	render () {

		const { playtext } = this.props;

		const productions = playtext.get('productions');
		const characters = playtext.get('characters');

		return (
			<InstanceWrapper instance={playtext}>

				{
					productions && productions.size
						? <RelatedInstance labelText='Productions' instance={productions}/>
						: null
				}

				{
					characters && characters.size
						? <RelatedInstance labelText='Characters' instance={characters}/>
						: null
				}

			</InstanceWrapper>
		);

	};

};

Playtext.propTypes = { playtext: ImmutablePropTypes.map.isRequired };

const mapStateToProps = state => ({ playtext: state.get('playtext') });

export default connect(mapStateToProps)(Playtext);
