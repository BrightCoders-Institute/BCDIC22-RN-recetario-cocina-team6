// Node modules
import React, { Component } from 'react';
import { ScrollView, View, ImageBackground, Text, Share } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
// Components
import VerticalScrollMenu from '../components/VerticalScrollMenu';
// Interfaces
import { IRecipeProps } from '../interfaces/Recipe';

export default class Recipe extends Component<IRecipeProps> {
	constructor(props: IRecipeProps) {
		super(props);
	}

	render() {
		return (
			<View style={{ marginTop: Constants.statusBarHeight }}>
				<ImageBackground
					source={{ uri: this.props.route.params.data.image }}
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
										this.props.navigation.navigate('Home', {});
									}}
								/>
							</View>
							<View style={{ flex: 0.7 }}></View>
							<View style={{ flex: 0.1 }}>
								<MaterialIcons
									name='ios-share'
									size={30}
									color='#fff'
									style={{ textAlign: 'center' }}
									onPress={async () => {
										await Share.share({ message: `Recipe ${this.props.route.params.data.name}` });
									}}
								/>
							</View>
							<View style={{ flex: 0.1 }}>
								<MaterialIcons
									name={this.props.route.params.data.favorite ? 'favorite' : 'favorite-border'}
									size={30}
									color='#fff'
									style={{ textAlign: 'center' }}
									onPress={() => {
										this.props.route.params.data.favorite = !this.props.route.params.data.favorite;
										this.setState({ favorite: this.props.route.params.data.favorite });
									}}
								/>
							</View>
						</View>
						<View style={{ flex: 1 }}>
							<Text style={{ fontSize: 20, color: '#ffff', textTransform: 'uppercase' }}>
								{this.props.route.params.category}
							</Text>
							<Text style={{ fontSize: 20, color: '#ffff' }}>{this.props.route.params.data.name}</Text>
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
							for {this.props.route.params.data.servings} servings
						</Text>
						<VerticalScrollMenu data={this.props.route.params.data.ingredients} />
					</View>
				</ScrollView>
			</View>
		);
	}
}
