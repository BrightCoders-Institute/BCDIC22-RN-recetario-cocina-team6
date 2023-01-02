// Node modules
import React, { Component } from 'react';
import { DataTable } from 'react-native-paper';
// Classes
import Ingredient from '../classes/Ingredient';
// Interfaces
import { IVerticalScrollMenuProps } from '../interfaces/VerticalScrollMenu.js';

export default class VerticalScrollMenu extends Component<IVerticalScrollMenuProps> {
	constructor(props: IVerticalScrollMenuProps) {
		super(props);
	}

	render() {
		return (
			<DataTable>
				{this.props.data
					.sort((a: Ingredient, b: Ingredient) => (a.name > b.name ? 1 : -1))
					.map((item: Ingredient) => (
						<DataTable.Row key={item.name}>
							<DataTable.Cell textStyle={{ color: '#fff' }}>{item.name}</DataTable.Cell>
							<DataTable.Cell textStyle={{ color: '#fff' }} style={{ justifyContent: 'flex-end' }}>
								{item.quantity} {item.unit}
							</DataTable.Cell>
						</DataTable.Row>
					))}
			</DataTable>
		);
	}
}
