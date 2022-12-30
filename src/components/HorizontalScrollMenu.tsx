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
import { IHorizontalScrollMenuProps } from '../interfaces/HorizontalScrollMenu.js';

export default class HorizontalScrollMenu extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.title}</Text>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{this.props.data.map((aliment: Aliment) => (
						<TouchableOpacity
							key={aliment.id}
							onPress={async () => {
								await this.props.navigation.navigate({
									name: 'Recipe',
									params: { aliment, category: this.props.title },
								});
							}}
						>
							{aliment.favorite && this.props.title === 'Trending' && (
								<Card style={styles.card} aliment={aliment} elementsSize={this.props.elementsSize} />
							)}
							{this.props.title !== 'Trending' && (
								<Card style={styles.card} aliment={aliment} elementsSize={this.props.elementsSize} />
							)}
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
