import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Constants from 'expo-constants';

import Search from '../components/Search';
import HorizontalScrollMenu from '../components/HorizontalScrollMenu';

const Home = () => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [clicked, setClicked] = useState(false);

	return (
		<ScrollView style={{ marginTop: Constants.statusBarHeight }}>
			<Search searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} clicked={clicked} setClicked={setClicked} />
			<View>
				<HorizontalScrollMenu title='Trending' elementsSize='sm' />
			</View>
			<View>
				<HorizontalScrollMenu title='Recent' elementsSize='lg' />
			</View>
		</ScrollView>
	);
};

export default Home;
