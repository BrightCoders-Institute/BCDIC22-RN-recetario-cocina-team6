// Node modules
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Constants from 'expo-constants';
// Components
import HorizontalScrollMenu from '../components/HorizontalScrollMenu';
import Search from '../components/Search';

export default class Home extends Component<object> {
	constructor({ props }: { props: object }) {
		super(props);
	}

	render() {
		return (
			<View style={{ marginTop: Constants.statusBarHeight }}>
				<Search />
				<ScrollView>
					<HorizontalScrollMenu title='Trending' elementsSize='sm' />
					<HorizontalScrollMenu title='Recent' elementsSize='lg' />
				</ScrollView>
			</View>
		);
	}
}
