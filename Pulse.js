import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

export default class Pulse extends Component {
	constructor(props) {
		super(props);

		this.anim = new Animated.Value(0);
	}

	componentDidMount() {
		this.startAnimate();
	}

	componentWillUnmount = () => {
		this.anim.stopAnimation();
	}

	startAnimate = () => {
		Animated.timing(this.anim, {
			toValue: 1,
			delay: 1000,
			duration: this.props.interval,
			easing: Easing.in
		}).start(o => {
			if (o.finished) this.resetAnimate();
		});
	}

	resetAnimate = () => {
		this.anim.setValue(0);
		this.startAnimate();
	}

	render() {
		const { size, pulseMaxSize, borderColor, backgroundColor } = this.props;

		return (
			<View style={[styles.circleWrapper, {
				width: pulseMaxSize,
				height: pulseMaxSize,
				marginLeft: -pulseMaxSize / 2,
				marginTop: -pulseMaxSize / 2,
			}]}>
				<Animated.View
					style={[styles.circle, {
						borderColor,
						backgroundColor,
						width: this.anim.interpolate({
							inputRange: [0, 1],
							outputRange: [size, pulseMaxSize]
						}),
						height: this.anim.interpolate({
							inputRange: [0, 1],
							outputRange: [size, pulseMaxSize]
						}),
						borderRadius: pulseMaxSize / 2,
						opacity: this.anim.interpolate({
							inputRange: [0, 1],
							outputRange: [1, 0]
						})
					}]}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	circleWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute'
	},
	circle: {
		borderWidth: 4 * StyleSheet.hairlineWidth,
	}
});