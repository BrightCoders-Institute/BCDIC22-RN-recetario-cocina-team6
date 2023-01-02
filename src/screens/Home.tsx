// Node modules
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Constants from 'expo-constants';
// Components
import HorizontalScrollMenu from '../components/HorizontalScrollMenu';
import Search from '../components/Search';
// Interfaces
import { IHomeProps, IHomeState } from '../interfaces/Home';

export default class Home extends Component<IHomeProps, IHomeState> {
	constructor(props: IHomeProps) {
		super(props);
		this.state = {
			data: this.props.route.params.aliments,
		};
	}

	render() {
		return (
			<View style={{ marginTop: Constants.statusBarHeight }}>
				<Search />
				<ScrollView>
					{this.state.data?.some((aliment) => aliment.favorite) && (
						<HorizontalScrollMenu
							title='Trending'
							elementsSize='sm'
							data={this.state.data}
							navigation={this.props.navigation}
						/>
					)}
					<HorizontalScrollMenu
						title='Recent'
						elementsSize='lg'
						data={this.state.data}
						navigation={this.props.navigation}
					/>
				</ScrollView>
			</View>
		);
	}
}
