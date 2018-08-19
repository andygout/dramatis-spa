import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentWrapper from '../../components/content-wrapper';
import InstanceWrapper from '../../utils/instance-wrapper';

class Playtext extends Component {

	render () {

		const { playtext } = this.props;

		return (
			<InstanceWrapper instance={playtext}>

				{
					playtext.productions && playtext.productions.length ?
						<ContentWrapper labelText='Productions' instance={playtext.productions} /> :
						null
				}

				{
					playtext.characters && playtext.characters.length ?
						<ContentWrapper labelText='Characters' instance={playtext.characters} /> :
						null
				}

			</InstanceWrapper>
		);

	};

};

Playtext.propTypes = { playtext: PropTypes.object.isRequired };

const mapStateToProps = ({ playtext }) => ({ playtext });

export default connect(mapStateToProps)(Playtext);
