// Node modules
import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
// Classes
import Aliment from '../classes/Aliment';
// Components
import Card from './Card';
// Databases
import aliments from '../database/aliments.json';
// Interfaces
import { IHorizontalScrollMenuProps, IHorizontalScrollMenuState } from '../interfaces/HorizontalScrollMenu.js';

export default class HorizontalScrollMenu extends Component<IHorizontalScrollMenuProps, IHorizontalScrollMenuState> {
	constructor({ props }: { props: IHorizontalScrollMenuProps }) {
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
						<Card style={styles.card} key={aliment.id} aliment={aliment} elementsSize={this.props.elementsSize} />
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
	card: {
		marginRight: 15,
	},
});
