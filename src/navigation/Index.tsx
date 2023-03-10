// Node modules
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Classes
import Aliment from '../classes/Aliment';
//Constants
import { NavigationContainerTheme, HomeStackScreenTheme, DefaultStackScreenTheme } from '../constants/themes';
// Databases
import aliments from '../databases/aliments.json';
// Interfaces
import { RootStackParamList } from '../interfaces/RootStackParamList';
// Screens
import Home from '../screens/Home';
import Recipe from '../screens/Recipe';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class Navigation extends Component {
	constructor(props: object) {
		super(props);
	}

	render() {
		return (
			<NavigationContainer theme={NavigationContainerTheme}>
				<Stack.Navigator initialRouteName='Home'>
					<Stack.Screen
						name='Home'
						component={Home}
						options={HomeStackScreenTheme}
						initialParams={{ aliments: aliments as Aliment[] }}
					/>
					<Stack.Screen name='Recipe' component={Recipe} options={DefaultStackScreenTheme} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
