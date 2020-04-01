import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import RelatedInstance from '../../components/RelatedInstance';
import InstanceWrapper from '../../utils/InstanceWrapper';

class Person extends React.Component {

	render () {

		const { person } = this.props;

		const productions = person.get('productions');

		return (
			<InstanceWrapper instance={person}>

				{
					productions && productions.size
						? <RelatedInstance labelText='Productions' instance={productions}/>
						: null
				}

			</InstanceWrapper>
		);

	};

};

Person.propTypes = { person: ImmutablePropTypes.map.isRequired };

const mapStateToProps = state => ({ person: state.get('person') });

export default connect(mapStateToProps)(Person);
