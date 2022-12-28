// Node modules
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Constants
import { NavigationContainerTheme, HomeStackScreenTheme, DefaultStackScreenTheme } from '../constants/themes';
// Screens
import Home from '../screens/Home';
import Recipe from '../screens/Recipe';

const Stack = createNativeStackNavigator();

export default class Navigation extends Component {
	constructor(props: object) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<NavigationContainer theme={NavigationContainerTheme}>
				<Stack.Navigator>
					<Stack.Screen name='Home' component={Home} options={HomeStackScreenTheme} />
					<Stack.Screen name='Recipe' component={Recipe} options={DefaultStackScreenTheme} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
