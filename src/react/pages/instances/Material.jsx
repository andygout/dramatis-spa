import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { capitalise } from '../../../lib/strings';
import {
	AppendedFormat,
	AppendedWriterGroups,
	InstanceFacet,
	InstanceLink,
	List,
	WriterGroups
} from '../../components';
import { InstanceWrapper } from '../../utils';

class Material extends React.Component {

	render () {

		const { material } = this.props;

		const format = material.get('format');
		const writerGroups = material.get('writerGroups');
		const characterGroups = material.get('characterGroups');
		const originalVersionMaterial = material.get('originalVersionMaterial');
		const subsequentVersionMaterials = material.get('subsequentVersionMaterials');
		const productions = material.get('productions');
		const sourcingMaterials = material.get('sourcingMaterials');
		const sourcingMaterialProductions = material.get('sourcingMaterialProductions');

		const instanceFacetSubheader = subheaderText =>
			<div className="instance-facet-subheader">{ subheaderText }</div>;

		return (
			<InstanceWrapper instance={material}>

				{
					format && (
						<InstanceFacet labelText='Format'>

							<React.Fragment>{ capitalise(format) }</React.Fragment>

						</InstanceFacet>
					)
				}

				{
					writerGroups?.size > 0 && (
						<InstanceFacet labelText='Writers'>

							<WriterGroups writerGroups={writerGroups} isAppendage={false} />

						</InstanceFacet>
					)
				}

				{
					characterGroups?.size > 0 && (
						<InstanceFacet labelText='Characters'>

							{
								characterGroups.size === 1
									? (
										<React.Fragment>

											{
												!!characterGroups.first().get('name') && (
													instanceFacetSubheader(characterGroups.first().get('name'))
												)
											}

											<List instances={characterGroups.first().get('characters')} />

										</React.Fragment>
									)
									: (
										<ul className="list list--no-bullets">

											{
												characterGroups.map((characterGroup, index) =>
													<li key={index} className="instance-facet-group">

														{
															!!characterGroup.get('name') && (
																instanceFacetSubheader(characterGroup.get('name'))
															)
														}

														<List instances={characterGroup.get('characters')} />

													</li>
												)
											}

										</ul>
									)
							}

						</InstanceFacet>
					)
				}

				{
					originalVersionMaterial && (
						<InstanceFacet labelText='Original version'>

							<InstanceLink instance={originalVersionMaterial} />

							{
								originalVersionMaterial.get('format') && (
									<AppendedFormat format={originalVersionMaterial.get('format')} />
								)
							}

							{
								originalVersionMaterial.get('writerGroups')?.size > 0 && (
									<AppendedWriterGroups writerGroups={originalVersionMaterial.get('writerGroups')} />
								)
							}

						</InstanceFacet>
					)
				}

				{
					subsequentVersionMaterials?.size > 0 && (
						<InstanceFacet labelText='Subsequent versions'>

							<List instances={subsequentVersionMaterials} />

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

				{
					sourcingMaterials?.size > 0 && (
						<InstanceFacet labelText='Materials as source material'>

							<List instances={sourcingMaterials} />

						</InstanceFacet>
					)
				}

				{
					sourcingMaterialProductions?.size > 0 && (
						<InstanceFacet labelText='Productions of materials as source material'>

							<List instances={sourcingMaterialProductions} />

						</InstanceFacet>
					)
				}

			</InstanceWrapper>
		);

	}

}

Material.propTypes = {
	material: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	material: state.get('material')
});

export default connect(mapStateToProps)(Material);
