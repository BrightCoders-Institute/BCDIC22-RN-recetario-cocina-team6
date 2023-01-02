// CLasses
import Ingredient from '../classes/Ingredient';

export interface IAlimentConstructor {
	id: number;
	image: string;
	name: string;
	servings: number;
	ingredients: Ingredient[];
}
