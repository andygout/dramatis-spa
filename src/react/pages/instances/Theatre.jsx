import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { InstanceFacet, List } from '../../components';
import { InstanceWrapper } from '../../utils';

class Theatre extends React.Component {

	render () {

		const { theatre } = this.props;

		const productions = theatre.get('productions');

		return (
			<InstanceWrapper instance={theatre}>

				{
					productions?.size > 0 && (
						<InstanceFacet labelText='Productions'>

							<List instances={productions} />

						</InstanceFacet>
					)
				}

			</InstanceWrapper>
		);

	};

};

Theatre.propTypes = { theatre: ImmutablePropTypes.map.isRequired };

const mapStateToProps = state => ({ theatre: state.get('theatre') });

export default connect(mapStateToProps)(Theatre);
