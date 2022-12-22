import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { ICardProps } from '../interfaces/Card.js';

export default class Card extends Component<ICardProps> {
	constructor(props: ICardProps) {
		super(props);
	}

	render() {
		return (
			<View style={styles[`${this.props.elementsSize}_container`]}>
				<Image source={{ uri: this.props.aliment.image }} style={styles[`${this.props.elementsSize}_image`]} />
				<Text style={styles[`${this.props.elementsSize}_text`]}>{this.props.aliment.name}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	lg_container: {
		width: 220,
		height: 240,
		//marginRight: 10,
		borderColor: '#282828',
		borderWidth: 1,
		backgroundColor: '#282828',
		borderRadius: 5,
	},
	sm_container: {
		width: 150,
		height: 160,
		//marginRight: 10,
		borderColor: '#282828',
		borderWidth: 1,
		backgroundColor: '#282828',
		borderRadius: 5,
	},
	lg_text: {
		fontSize: 14,
		color: '#ffffff',
		width: 130,
		marginTop: 10,
	},
	sm_text: {
		fontSize: 14,
		color: '#ffffff',
		width: 130,
		marginTop: 10,
	},
	lg_image: { width: 200, height: 200, borderRadius: 5 },
	sm_image: { width: 130, height: 120, borderRadius: 5 },
});
