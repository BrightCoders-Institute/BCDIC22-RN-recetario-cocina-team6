// Interfaces

import { IIngridientConstructor } from '../interfaces/Ingredient';

export default class Ingredient {
	public name: string;
	public quantity: number;
	public unit: string;

	constructor({ name, quantity, unit }: IIngridientConstructor) {
		this.name = name;
		this.quantity = quantity;
		this.unit = unit;
	}
}
