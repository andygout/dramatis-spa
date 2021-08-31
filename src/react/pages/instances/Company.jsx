import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
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
		const producerProductions = company.get('producerProductions');
		const creativeProductions = company.get('creativeProductions');
		const crewProductions = company.get('crewProductions');

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

				{
					producerProductions?.size > 0 && (
						<InstanceFacet labelText='Productions as producer'>

							<List instances={producerProductions} />

						</InstanceFacet>
					)
				}

				{
					creativeProductions?.size > 0 && (
						<InstanceFacet labelText='Productions as creative team member'>

							<List instances={creativeProductions} />

						</InstanceFacet>
					)
				}

				{
					crewProductions?.size > 0 && (
						<InstanceFacet labelText='Productions as crew member'>

							<List instances={crewProductions} />

						</InstanceFacet>
					)
				}

			</InstanceWrapper>
		);

	}

}

Company.propTypes = {
	company: PropTypes.instanceOf(Map).isRequired
};

const mapStateToProps = state => ({
	company: state.get('company')
});

export default connect(mapStateToProps)(Company);
