// Node modules
import React, { Component } from 'react';
import { ScrollView, View, ImageBackground, Text } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
// Components
import ScrollIngredients from '../components/ScrollIngredients';
// Interfaces
import { IRecipeProps } from '../interfaces/Recipe';

export default class Recipe extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<View style={{ marginTop: Constants.statusBarHeight }}>
				<ImageBackground
					source={{ uri: this.props.route.params.aliment.image }}
					imageStyle={{ opacity: 0.4 }}
					style={{ width: '100%', height: 300 }}
				>
					<View style={{ flexDirection: 'column', flex: 3, margin: 20 }}>
						<View style={{ flexDirection: 'row', flex: 2 }}>
							<View style={{ flex: 0.1 }}>
								<MaterialIcons
									name='close'
									size={30}
									color='#fff'
									style={{ textAlign: 'center' }}
									onPress={() => {
										this.props.navigation.pop();
									}}
								/>
							</View>
							<View style={{ flex: 0.7 }}></View>
							<View style={{ flex: 0.1 }}>
								<MaterialIcons name='ios-share' size={30} color='#fff' style={{ textAlign: 'center' }} />
							</View>
							<View style={{ flex: 0.1 }}>
								<MaterialIcons name='favorite-outline' size={30} color='#fff' style={{ textAlign: 'center' }} />
							</View>
						</View>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 20, color: '#ffff', textTransform: 'uppercase' }}>
								{this.props.route.params.category}
							</Text>
							<Text style={{ fontSize: 20, color: '#ffff' }}>{this.props.route.params.aliment.name}</Text>
						</View>
					</View>
				</ImageBackground>
				<ScrollView>
					<View>
						<Text
							style={{
								flexDirection: 'row',
								fontSize: 15,
								marginTop: 10,
								marginLeft: 10,
								color: '#ffff',
							}}
						>
							Ingredients
						</Text>
						<Text
							style={{
								flexDirection: 'row',
								fontSize: 15,
								marginTop: 10,
								marginLeft: 10,
								color: '#ffff',
							}}
						>
							for {this.props.route.params.aliment.servings} servings
						</Text>
						<ScrollIngredients ingredients={this.props.route.params.aliment.ingredients} />
					</View>
				</ScrollView>
			</View>
		);
	}
}
