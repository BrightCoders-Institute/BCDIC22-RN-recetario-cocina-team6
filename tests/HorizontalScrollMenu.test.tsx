// Node modules
import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { create } from 'react-test-renderer';
// Classes
import Aliment from '../src/classes/Aliment';
// Components
import VerticalScrollMenu from '../src/components/VerticalScrollMenu';
// Databases
import aliments from '../src/databases/aliments.json';

describe('<HorizontalScrollMenu />', () => {
	it('has the same number of childs as aliments database', () => {
		const data = aliments as Aliment[];
		const ingredients = data[0].ingredients;
		const component = create(<VerticalScrollMenu data={ingredients} />).toJSON();
		if (!(component instanceof Array) && component !== null) {
			expect(component.children?.length).toBe(ingredients.length);
		}
	});
});
