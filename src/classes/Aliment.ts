// Interfaces
import { IAlimentConstructor } from '../interfaces/Aliment';

export default class Aliment {
	public id: number;
	public image: string;
	public name: string;

	constructor({ id, image, name }: IAlimentConstructor) {
		this.id = id;
		this.image = image;
		this.name = name;
	}
}
