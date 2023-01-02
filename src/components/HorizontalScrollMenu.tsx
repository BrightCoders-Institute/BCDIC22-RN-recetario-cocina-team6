// Node modules
import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// Classes
import Aliment from '../classes/Aliment';
// Components
import Card from './Card';
// Interfaces
import { IHorizontalScrollMenuProps } from '../interfaces/HorizontalScrollMenu.js';

export default class HorizontalScrollMenu extends Component<IHorizontalScrollMenuProps> {
	constructor(props: IHorizontalScrollMenuProps) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.title}</Text>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{this.props.data
						?.sort((a: Aliment, b: Aliment) => (a.name > b.name ? 1 : -1))
						.map((item: Aliment) => (
							<TouchableOpacity
								key={item.id}
								onPress={() => {
									this.props.navigation.navigate({
										name: 'Recipe',
										params: { data: item, category: this.props.title },
									});
								}}
							>
								{item.favorite && this.props.title === 'Trending' && (
									<Card style={styles.card} item={item} elementsSize={this.props.elementsSize} />
								)}
								{this.props.title !== 'Trending' && (
									<Card style={styles.card} item={item} elementsSize={this.props.elementsSize} />
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
