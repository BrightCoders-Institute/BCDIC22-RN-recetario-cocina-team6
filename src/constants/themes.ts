import { DefaultTheme } from '@react-navigation/native';

export const NavigationContainerTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		//primary: '#282828',
		//secondary: '#282828',
		text: '#ffffff',
		background: '#282828',
		//border: '#ffffff',
		//notification: '#ffffff',
	},
};

export const DefaultStackScreenTheme = { headerShown: false, headerStyle: { backgroundColor: '#282828' } };

export const HomeStackScreenTheme = { ...DefaultStackScreenTheme, headerShown: false };
