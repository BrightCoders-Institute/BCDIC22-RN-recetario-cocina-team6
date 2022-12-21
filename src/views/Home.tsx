import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Search from '../components/Search';
import Card from '../components/Card';

const Home = () => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [clicked, setClicked] = useState(false);

	return (
		<View style={{ marginTop: 40 }}>
			<Search searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} clicked={clicked} setClicked={setClicked} />
			<View>
				<Card />
			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	root: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		width: '100%',
		marginTop: 20,
		fontSize: 25,
		fontWeight: 'bold',
		marginLeft: '10%',
	},
});
