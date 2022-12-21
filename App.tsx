import { StyleSheet, View } from 'react-native';
import Home from './src/views/Home';

export default function App() {
	return (
		<View style={styles.container}>
			<Home />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#32cd32',
	},
});
