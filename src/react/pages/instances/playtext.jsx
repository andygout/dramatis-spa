import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import RelatedInstance from '../../components/related-instance';
import InstanceWrapper from '../../utils/instance-wrapper';

class Playtext extends Component {

	render () {

		const { playtext } = this.props;

		return (
			<InstanceWrapper instance={playtext}>

				{
					playtext.productions && playtext.productions.length ?
						<RelatedInstance labelText='Productions' instance={playtext.productions} /> :
						null
				}

				{
					playtext.characters && playtext.characters.length ?
						<RelatedInstance labelText='Characters' instance={playtext.characters} /> :
						null
				}

			</InstanceWrapper>
		);

	};

};

Playtext.propTypes = { playtext: PropTypes.object.isRequired };

const mapStateToProps = ({ playtext }) => ({ playtext });

export default connect(mapStateToProps)(Playtext);
