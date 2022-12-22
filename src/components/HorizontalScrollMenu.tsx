import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Card from './Card';
import Aliment from '../classes/Aliment.js';
import { IHorizontalScrollMenuProps } from '../interfaces/HorizontalScrollMenu.js';
import aliments from '../database/aliments.json';

export default class HorizontalScrollMenu extends Component<IHorizontalScrollMenuProps> {
	public state: { aliments: Aliment[] };
	constructor(props: IHorizontalScrollMenuProps) {
		super(props);
		this.state = {
			aliments: aliments as Aliment[],
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.title}</Text>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{this.state.aliments.map((aliment) => (
						<Card key={aliment.id} aliment={aliment} elementsSize={this.props.elementsSize} />
					))}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	title: {
		fontSize: 20,
		color: '#d91b73',
		textTransform: 'uppercase',
		marginBottom: 18,
	},
});
