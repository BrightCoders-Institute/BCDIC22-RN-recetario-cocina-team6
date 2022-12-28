// Node modules
import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// Classes
import Aliment from '../classes/Aliment';
// Components
import Card from './Card';
// Databases
import aliments from '../database/aliments.json';
// Interfaces
import { IHorizontalScrollMenuProps, IHorizontalScrollMenuState } from '../interfaces/HorizontalScrollMenu.js';

export default class HorizontalScrollMenu extends Component<any, IHorizontalScrollMenuState> {
	constructor(props: any) {
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
						<TouchableOpacity key={aliment.id} onPress={() => {this.props.navigation.navigate('Recipe', {aliment})}}>
							<Card style={styles.card} aliment={aliment} elementsSize={this.props.elementsSize} />
						</TouchableOpacity>
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
