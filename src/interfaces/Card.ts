// Node modules
import { ViewStyle } from 'react-native';
// Classes
import Aliment from '../classes/Aliment';

export interface ICardProps {
	aliment: Aliment;
	elementsSize: 'sm' | 'lg';
	style?: ViewStyle;
}
