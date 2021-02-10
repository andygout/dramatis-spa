import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { InstanceFacet, List } from '../../components';
import { InstanceWrapper } from '../../utils';

class Company extends React.Component {

	render () {

		const { company } = this.props;

		const materials = company.get('materials');
		const subsequentVersionMaterials = company.get('subsequentVersionMaterials');
		const sourcingMaterials = company.get('sourcingMaterials');
		const rightsGrantorMaterials = company.get('rightsGrantorMaterials');

		return (
			<InstanceWrapper instance={company}>

				{
					materials?.size > 0 && (
						<InstanceFacet labelText='Materials'>

							<List instances={materials} />

						</InstanceFacet>
					)
				}

				{
					subsequentVersionMaterials?.size > 0 && (
						<InstanceFacet labelText='Subsequent versions of their materials'>

							<List instances={subsequentVersionMaterials} />

						</InstanceFacet>
					)
				}

				{
					sourcingMaterials?.size > 0 && (
						<InstanceFacet labelText='Materials as source material writer'>

							<List instances={sourcingMaterials} />

						</InstanceFacet>
					)
				}

				{
					rightsGrantorMaterials?.size > 0 && (
						<InstanceFacet labelText='Materials as rights grantor'>

							<List instances={rightsGrantorMaterials} />

						</InstanceFacet>
					)
				}

			</InstanceWrapper>
		);

	}

}

Company.propTypes = {
	company: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	company: state.get('company')
});

export default connect(mapStateToProps)(Company);
