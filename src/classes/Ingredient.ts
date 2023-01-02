// Interfaces

import { IIngredientConstructor } from '../interfaces/Ingredient';

export default class Ingredient {
	public name: string;
	public quantity: number;
	public unit: string;

	constructor({ name, quantity, unit }: IIngredientConstructor) {
		this.name = name;
		this.quantity = quantity;
		this.unit = unit;
	}
}
