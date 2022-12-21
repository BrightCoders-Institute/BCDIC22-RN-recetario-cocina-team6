import React from 'react';
import { StyleSheet, TextInput, View, Keyboard, Pressable, Text } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }: any) => {
	return (
		<View style={styles.container}>
			<View style={styles.searchBar__unclicked}>
				{/* search Icon */}
				<Feather name='search' size={20} color='white' style={{ marginLeft: 1 }} />
				{/* Input field */}
				<TextInput
					style={styles.input}
					placeholder='Search'
					value={searchPhrase}
					onChangeText={setSearchPhrase}
					onFocus={() => {
						setClicked(true);
					}}
				/>
				<Entypo
					name='mic'
					size={20}
					color='#fff'
					style={{ padding: 1 }}
					onPress={() => {
						Keyboard.dismiss();
						setSearchPhrase('');
						setClicked(false);
					}}
				/>
				{/* cross Icon, depending on whether the search bar is clicked or not */}
				{clicked && (
					<Entypo
						name='cross'
						size={20}
						color='#fff'
						style={{ padding: 1 }}
						onPress={() => {
							Keyboard.dismiss();
							setSearchPhrase('');
							setClicked(false);
						}}
					/>
				)}
			</View>
		</View>
	);
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
	container: {
		margin: 15,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		width: '90%',
	},
	searchBar__unclicked: {
		padding: 10,
		flexDirection: 'row',
		width: '100%',
		backgroundColor: '#343434',
		borderRadius: 15,
		alignItems: 'center',
	},
	searchBar__clicked: {
		padding: 10,
		flexDirection: 'row',
		width: '80%',
		backgroundColor: '#343434',
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	input: {
		fontSize: 20,
		marginLeft: 10,
		width: '80%',
		color: '#fff',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 12,
		elevation: 3,
		shadowOpacity: 0,
	},
	button__text: {
		lineHeight: 21,
		letterSpacing: 0.25,
		color: 'blue',
	},
});