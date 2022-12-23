// Classes
import Aliment from '../classes/Aliment';

export interface IHorizontalScrollMenuProps {
	title: string;
	elementsSize: 'sm' | 'lg';
}

export interface IHorizontalScrollMenuState {
	aliments: Aliment[];
}
