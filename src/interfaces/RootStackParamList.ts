// Node modules
import { ParamListBase } from '@react-navigation/native';
// Classes
import Aliment from '../classes/Aliment';

export interface RootStackParamList extends ParamListBase {
	Home: { aliments?: Aliment[] };
	Recipe: { data: Aliment; category: string };
}
