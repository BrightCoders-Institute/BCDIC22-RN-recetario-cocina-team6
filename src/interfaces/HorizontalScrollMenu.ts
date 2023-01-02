// Classes
import Aliment from '../classes/Aliment';
import Home from '../screens/Home.js';

export interface IHorizontalScrollMenuProps {
	data?: Aliment[];
	elementsSize: 'sm' | 'lg';
	navigation: Home['props']['navigation'];
	title: string;
}
