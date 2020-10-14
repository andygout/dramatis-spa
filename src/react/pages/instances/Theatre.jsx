import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { InstanceFacet, InstanceLink, List } from '../../components';
import { InstanceWrapper } from '../../utils';

class Theatre extends React.Component {

	render () {

		const { theatre } = this.props;

		const surTheatre = theatre.get('surTheatre');
		const subTheatres = theatre.get('subTheatres');
		const productions = theatre.get('productions');

		let titleName = theatre.get('name');

		if (surTheatre) titleName = `${surTheatre.get('name')}: ${titleName}`;

		return (
			<InstanceWrapper instance={theatre} titleName={titleName}>

				{
					surTheatre && (
						<InstanceFacet labelText='Part of'>

							<InstanceLink instance={surTheatre} />

						</InstanceFacet>
					)
				}

				{
					subTheatres?.size > 0 && (
						<InstanceFacet labelText='Comprises'>

							<List instances={subTheatres} />

						</InstanceFacet>
					)
				}

				{
					productions?.size > 0 && (
						<InstanceFacet labelText='Productions'>

							<List instances={productions} />

						</InstanceFacet>
					)
				}

			</InstanceWrapper>
		);

	}

}

Theatre.propTypes = {
	theatre: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	theatre: state.get('theatre')
});

export default connect(mapStateToProps)(Theatre);
