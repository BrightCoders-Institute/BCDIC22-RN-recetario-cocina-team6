// Node modules
import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
// Interfaces
import { ICardProps } from '../interfaces/Card';

export default class Card extends Component<ICardProps> {
	constructor(props: ICardProps) {
		super(props);
	}

	render() {
		return (
			<View style={[styles[`${this.props.elementsSize}_container`], this.props.style]}>
				<Image source={{ uri: this.props.aliment.image }} style={styles[`${this.props.elementsSize}_image`]} />
				<Text style={styles[`${this.props.elementsSize}_text`]}>{this.props.aliment.name}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	lg_container: {
		//backgroundColor: '#282828',
		//borderColor: '#282828',
		//borderWidth: 1,
		//borderRadius: 5,
	},
	sm_container: {
		//backgroundColor: '#282828',
		//borderColor: '#282828',
		//borderWidth: 1,
		//borderRadius: 5,
	},
	lg_text: {
		fontSize: 14,
		color: '#ffffff',
		width: 200,
		marginTop: 10,
		textAlign: 'center',
	},
	sm_text: {
		fontSize: 14,
		color: '#ffffff',
		width: 100,
		marginTop: 10,
		textAlign: 'left',
	},
	lg_image: { width: 200, height: 200, borderRadius: 5 },
	sm_image: { width: 100, height: 100, borderRadius: 5 },
});
