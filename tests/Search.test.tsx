// Node modules
import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { create } from 'react-test-renderer';
// Components
import Search from '../src/components/Search';

describe('<Search />', () => {
	it('has the same number of childs as aliments database', () => {
		const component = create(<Search />).toJSON();
		if (!(component instanceof Array) && component !== null) {
			expect(component.children?.length).toBe(4);
		}
	});
});
