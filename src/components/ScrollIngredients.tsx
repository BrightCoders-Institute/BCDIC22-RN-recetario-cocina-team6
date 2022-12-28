// Node modules
import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// Interfaces


export default class ScrollIngredients extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<View>
				<ScrollView showsHorizontalScrollIndicator={false}>
					{this.props.ingredients.map((ingredient: any) => (
						<View key={ingredient.name} style={{marginLeft: 30, marginTop: 30, flexDirection:'row'}}>
							<Text style={{color:'#ffff'}}>{ingredient.name}</Text>
							<Text style={{color:'#ffff',marginLeft: 200}}>{ingredient.quantity}</Text>
							<Text style={{color:'#ffff'}}>{ingredient.unit}</Text>
						</View>
					))}
				</ScrollView>
			</View>
		);
	}
}

