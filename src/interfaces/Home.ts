// Node modules
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// Classes
import Aliment from '../classes/Aliment';
// Interfaces
import { RootStackParamList } from './RootStackParamList';

export type IHomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export interface IHomeState {
	data?: Aliment[];
}
