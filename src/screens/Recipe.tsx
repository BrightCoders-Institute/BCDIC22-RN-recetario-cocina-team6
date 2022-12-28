// Node modules
import React, { Component } from 'react';
import { ScrollView, View, Image, Button, Text } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
// Components
import HorizontalScrollMenu from '../components/HorizontalScrollMenu';
// Interfaces
import { IRecipeProps } from '../interfaces/Recipe'
import ScrollIngredients from '../components/ScrollIngredients';


export default class Home extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<View style={{ marginTop: Constants.statusBarHeight }}>
				<MaterialIcons
					name='cancel-schedule-send'
					size={20}
					color='#fff'
					onPress={() => {
						this.props.navigation.pop()
					}}
				/>
				<ScrollView>
					<Image source={{ uri: this.props.route.params.aliment.image }} style={{ width: 385, height: 300, opacity: 0.4 }} />
					<View>
						<Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, marginLeft: 10, color: '#ffff' }}>{this.props.route.params.aliment.name}</Text>
						<Text style={{ fontSize: 15, marginTop: 10, marginLeft: 10, color: '#ffff' }}>Ingresa prps</Text>
						<ScrollIngredients ingredients={this.props.route.params.aliment.ingredients} />
					</View>
				</ScrollView>
			</View>
		);
	}
}
