import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import RelatedInstance from '../../components/related-instance';
import InstanceWrapper from '../../utils/instance-wrapper';

class Character extends React.Component {

	render () {

		const { character } = this.props;

		const playtexts = character.get('playtexts');
		const variantNames = character.get('variantNames');
		const productions = character.get('productions');

		return (
			<InstanceWrapper instance={character}>

				{
					playtexts && playtexts.size
						? <RelatedInstance labelText='Playtexts' instance={playtexts}/>
						: null
				}

				{
					variantNames && variantNames.size
						? <RelatedInstance labelText='Variant names' instance={variantNames} join/>
						: null
				}

				{
					productions && productions.size
						? <RelatedInstance labelText='Productions' instance={productions}/>
						: null
				}

			</InstanceWrapper>
		);

	};

};

Character.propTypes = { character: ImmutablePropTypes.map.isRequired };

const mapStateToProps = state => ({ character: state.get('character') });

export default connect(mapStateToProps)(Character);
