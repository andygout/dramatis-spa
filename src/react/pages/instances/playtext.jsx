import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import RelatedInstance from '../../components/related-instance';
import InstanceWrapper from '../../utils/instance-wrapper';

class Playtext extends Component {

	render () {

		const { playtext } = this.props;

		const { productions, characters } = playtext;

		return (
			<InstanceWrapper instance={playtext}>

				{
					productions && productions.length
						? <RelatedInstance labelText='Productions' instance={productions}/>
						: null
				}

				{
					characters && characters.length
						? <RelatedInstance labelText='Characters' instance={characters}/>
						: null
				}

			</InstanceWrapper>
		);

	};

};

Playtext.propTypes = { playtext: PropTypes.object.isRequired };

const mapStateToProps = ({ playtext }) => ({ playtext });

export default connect(mapStateToProps)(Playtext);
