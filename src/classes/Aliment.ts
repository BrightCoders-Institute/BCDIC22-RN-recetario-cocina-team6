// Classes
import Ingredient from './Ingredient';
// Interfaces
import { IAlimentConstructor } from '../interfaces/Aliment';

export default class Aliment {
	public id: number;
	public image: string;
	public name: string;
	public servings: number;
	public ingredients: Array<Ingredient>;
	public favorite: boolean;

	constructor({ id, image, name, servings, ingredients }: IAlimentConstructor) {
		this.id = id;
		this.image = image;
		this.name = name;
		this.servings = servings;
		this.ingredients = ingredients;
		this.favorite = false;
	}
}
