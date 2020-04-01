import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import RelatedInstance from '../../components/RelatedInstance';
import InstanceWrapper from '../../utils/InstanceWrapper';

class Production extends React.Component {

	render () {

		const { production } = this.props;

		const theatre = production.get('theatre');
		const playtext = production.get('playtext');
		const cast = production.get('cast');

		return (
			<InstanceWrapper instance={production}>

				{
					theatre
						? <RelatedInstance labelText='Theatre' instance={theatre}/>
						: null
				}

				{
					playtext
						? <RelatedInstance labelText='Playtext' instance={playtext}/>
						: null
				}

				{
					cast && cast.size
						? <RelatedInstance labelText='Cast' instance={cast}/>
						: null
				}

			</InstanceWrapper>
		);

	};

};

Production.propTypes = { production: ImmutablePropTypes.map.isRequired };

const mapStateToProps = state => ({ production: state.get('production') });

export default connect(mapStateToProps)(Production);
