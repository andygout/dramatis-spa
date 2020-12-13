import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import { AppendedWriterGroups, InstanceFacet, InstanceLink, List, WriterGroups } from '../../components';
import { InstanceWrapper } from '../../utils';

class Playtext extends React.Component {

	render () {

		const { playtext } = this.props;

		const writerGroups = playtext.get('writerGroups');
		const characterGroups = playtext.get('characterGroups');
		const originalVersionPlaytext = playtext.get('originalVersionPlaytext');
		const subsequentVersionPlaytexts = playtext.get('subsequentVersionPlaytexts');
		const productions = playtext.get('productions');

		const instanceFacetSubheader = subheaderText =>
			<div className="instance-facet-subheader">{ subheaderText }</div>;

		return (
			<InstanceWrapper instance={playtext}>

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
												characterGroups.map((characterGroup, index) => (
													<li key={index} className="instance-facet-group">

														{
															!!characterGroup.get('name') && (
																instanceFacetSubheader(characterGroup.get('name'))
															)
														}

														<List instances={characterGroup.get('characters')} />

													</li>
												))
											}

										</ul>
									)
							}

						</InstanceFacet>
					)
				}

				{
					originalVersionPlaytext && (
						<InstanceFacet labelText='Original version'>

							<InstanceLink instance={originalVersionPlaytext} />

							{
								originalVersionPlaytext.get('writerGroups')?.size > 0 && (
									<AppendedWriterGroups writerGroups={originalVersionPlaytext.get('writerGroups')} />
								)
							}

						</InstanceFacet>
					)
				}

				{
					subsequentVersionPlaytexts?.size > 0 && (
						<InstanceFacet labelText='Subsequent versions'>

							<List instances={subsequentVersionPlaytexts} />

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

Playtext.propTypes = {
	playtext: ImmutablePropTypes.map.isRequired
};

const mapStateToProps = state => ({
	playtext: state.get('playtext')
});

export default connect(mapStateToProps)(Playtext);
