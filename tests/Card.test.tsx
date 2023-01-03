// Node modules
import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { create } from 'react-test-renderer';
// Classes
import Aliment from '../src/classes/Aliment';
// Components
import Card from '../src/components/Card';
// Databases
import aliments from '../src/databases/aliments.json';

describe('<Card />', () => {
	it('has the same number of childs as aliments database', () => {
		const data = aliments as Aliment[];
		const components = [];
		for (const item of data) {
			const component = create(<Card style={{}} elementsSize='lg' item={item} />).toJSON();
			if (component) {
				components.push(component);
			}
		}
		expect(components.length).toBe(aliments.length);
	});
});
