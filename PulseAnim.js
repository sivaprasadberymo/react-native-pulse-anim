import React, { Component } from 'react';
import { View, Image } from 'react-native';

import PropTypes from 'prop-types';

import Pulse from './Pulse';

export default class PulseAnim extends Component {
	constructor(props) {
		super(props);

		this.state = {
			circles: []
		};
	}

	componentWillUnmount = () => {
		clearTimeout(this.addCircleTimeout);
	}

	componentDidMount = () => {
		this.addCircle();
	}

	addCircle = () => {
		this.setState({ circles: [1] }, () => {
			this.addCircleTimeout = setTimeout(() => { this.setState({ circles: [...this.state.circles, 2] }) }, 1000);
		});
	}

	render() {
		const { size, avatar, avatarBackgroundColor } = this.props;

		return (
			<View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
				{this.state.circles.map((circle) => (
					<Pulse key={circle} delay={circle == 1 ? 0 : 1000} {...this.props} />
				))}

				<Image
					source={avatar}
					style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: avatarBackgroundColor }}
				/>
			</View>
		);
	}
}

PulseAnim.propTypes = {
	interval: PropTypes.number,
	size: PropTypes.number,
	pulseMaxSize: PropTypes.number,
	avatar: PropTypes.oneOfType([
		PropTypes.shape({
			uri: PropTypes.string
		}),
		PropTypes.number
	]),
	avatarBackgroundColor: PropTypes.string,
	borderColor: PropTypes.string,
	backgroundColor: PropTypes.string
};

PulseAnim.defaultProps = {
	interval: 2000,
	size: 100,
	pulseMaxSize: 250,
	avatarBackgroundColor: 'white',
	borderColor: '#ED225B55',
	backgroundColor: '#ED225B55'
};