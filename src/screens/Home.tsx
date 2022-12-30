// Node modules
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Constants from 'expo-constants';
// Components
import HorizontalScrollMenu from '../components/HorizontalScrollMenu';
import Search from '../components/Search';
import Aliment from '../classes/Aliment.js';

export default class Home extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			aliments: this.props.route.params.aliments,
		};
	}

	render() {
		console.log(this.state.aliments);
		return (
			<View style={{ marginTop: Constants.statusBarHeight }}>
				<Search />
				<ScrollView>
					{this.state.aliments.some((aliment: Aliment) => aliment.favorite) > 0 && (
						<HorizontalScrollMenu
							title='Trending'
							elementsSize='sm'
							data={this.state.aliments}
							navigation={this.props.navigation}
						/>
					)}
					<HorizontalScrollMenu
						title='Recent'
						elementsSize='lg'
						data={this.state.aliments}
						navigation={this.props.navigation}
					/>
				</ScrollView>
			</View>
		);
	}
}
