import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import RelatedInstance from '../../components/related-instance';
import InstanceWrapper from '../../utils/instance-wrapper';

class Theatre extends React.Component {

	render () {

		const { theatre } = this.props;

		const { productions } = theatre;

		return (
			<InstanceWrapper instance={theatre}>

				{
					productions && productions.length
						? <RelatedInstance labelText='Productions' instance={productions}/>
						: null
				}

			</InstanceWrapper>
		);

	};

};

Theatre.propTypes = { theatre: PropTypes.object.isRequired };

const mapStateToProps = ({ theatre }) => ({ theatre });

export default connect(mapStateToProps)(Theatre);
