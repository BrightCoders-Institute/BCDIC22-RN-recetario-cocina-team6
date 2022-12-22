import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ISearchProps } from '../interfaces/Search';

export default class Search extends Component<ISearchProps> {
	constructor(props: ISearchProps) {
		super(props);
	}

	render() {
		return (
			<View style={styles.searchBar}>
				<Feather name='search' size={20} color='white' style={styles.icon} />
				<TextInput
					style={styles.input}
					placeholderTextColor={styles.input.placeholderTextColor}
					placeholder='What do you want to eat?'
					value={this.props.searchPhrase}
					onChangeText={this.props.setSearchPhrase}
					onFocus={() => {
						this.props.setClicked(true);
					}}
				/>
				<Feather
					name='x'
					size={this.props.clicked ? 20 : 0}
					color='#fff'
					style={styles.icon}
					onPress={() => {
						Keyboard.dismiss();
						this.props.setSearchPhrase('');
						this.props.setClicked(false);
					}}
				/>
				<Feather
					name='mic'
					size={20}
					color='#fff'
					style={styles.icon}
					onPress={() => {
						Keyboard.dismiss();
						this.props.setSearchPhrase('');
						this.props.setClicked(false);
					}}
				/>
			</View>
		);
	}
}

// styles
const styles = StyleSheet.create({
	searchBar: {
		margin: 10,
		padding: 10,
		marginTop: 20,
		flexDirection: 'row',
		backgroundColor: '#343435',
		borderRadius: 15,
		alignItems: 'center',
	},
	input: {
		fontSize: 20,
		width: '70%',
		color: '#fff',
		placeholderTextColor: '#ffffff',
	},
	icon: {
		width: '10%',
	},
});
