// Node modules
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Constants from 'expo-constants';
// Components
import HorizontalScrollMenu from '../components/HorizontalScrollMenu';
import Search from '../components/Search';

export default class Home extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<View style={{ marginTop: Constants.statusBarHeight }}>
				<Search />
				<ScrollView>
					<HorizontalScrollMenu navigation={this.props.navigation} title='Trending' elementsSize='sm' />
					<HorizontalScrollMenu navigation={this.props.navigation} title='Recent' elementsSize='lg' />
				</ScrollView>
			</View>
		);
	}
}
