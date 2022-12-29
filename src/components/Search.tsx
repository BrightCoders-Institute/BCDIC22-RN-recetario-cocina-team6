// Node modules
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// Interfaces
import { ISearchState } from '../interfaces/Search';

export default class Search extends Component<object, ISearchState> {
	constructor(props: object) {
		super(props);
		this.state = {
			searchPhrase: '',
			clicked: false,
		};
	}

	setClicked = (clicked: boolean) => {
		this.setState({ clicked });
	};

	setSearchPhrase = (searchPhrase: string) => {
		this.setState({ searchPhrase });
	};

	render() {
		return (
			<View style={styles.searchBar}>
				<MaterialIcons name='search' size={20} color='white' style={styles.icon} />
				<TextInput
					style={styles.input}
					placeholderTextColor={styles.input.placeholderTextColor}
					placeholder='What do you want to eat?'
					value={this.state.searchPhrase}
					onChangeText={this.setSearchPhrase}
					onFocus={() => {
						this.setClicked(true);
					}}
				/>
				<MaterialIcons
					name='cancel'
					size={this.state.clicked ? 20 : 0}
					color='#fff'
					style={styles.icon}
					onPress={() => {
						this.setSearchPhrase('');
						this.setClicked(false);
						Keyboard.dismiss();
					}}
				/>
				<MaterialIcons name='mic' size={20} color='#fff' style={styles.icon} />
			</View>
		);
	}
}

// styles
const styles = StyleSheet.create({
	searchBar: {
		margin: 10,
		padding: 10,
		flexDirection: 'row',
		backgroundColor: '#343435',
		borderRadius: 15,
		alignItems: 'center',
	},
	input: {
		fontSize: 16,
		width: '70%',
		color: '#fff',
		placeholderTextColor: '#ffffff',
	},
	icon: {
		width: '10%',
		textAlign: 'center',
	},
});
