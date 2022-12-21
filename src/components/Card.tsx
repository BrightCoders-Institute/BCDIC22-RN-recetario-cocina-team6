import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
//import { Constants } from 'expo';

const { width } = Dimensions.get('window');

export default class Cards extends Component {
	public scrollView: any;
	componentDidMount() {
		setTimeout(() => {
			this.scrollView.scrollTo({ x: -30 });
		}, 1); // scroll view position fix
	}

	render() {
		return (
			<ScrollView
				ref={(scrollView) => {
					this.scrollView = scrollView;
				}}
				style={styles.container}
				//pagingEnabled={true}
				horizontal={true}
				decelerationRate={0}
				snapToInterval={width - 60}
				snapToAlignment={'center'}
				contentInset={{
					top: 0,
					left: 30,
					bottom: 0,
					right: 30,
				}}
			>
				<View style={styles.view} />
				<View style={styles.view} />
				<View style={styles.view} />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {},
	view: {
		marginTop: 0,
		backgroundColor: 'darkgrey',
		width: width - 80,
		margin: 10,
		height: 200,
		borderRadius: 10,
		//paddingHorizontal : 30
	},
});
