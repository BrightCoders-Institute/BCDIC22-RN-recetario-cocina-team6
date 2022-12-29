// Node modules
import React, { Component } from 'react';
import { DataTable } from 'react-native-paper';
// Classes
import Ingridient from '../classes/Ingredient';
// Interfaces

export default class ScrollIngredients extends Component<any> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<DataTable>
				{this.props.ingredients.map((ingredient: Ingridient) => (
					<DataTable.Row key={ingredient.name}>
						<DataTable.Cell textStyle={{ color: '#fff' }} style={{}}>
							{' '}
							{ingredient.name}{' '}
						</DataTable.Cell>
						<DataTable.Cell textStyle={{ color: '#fff' }} style={{ justifyContent: 'flex-end' }}>
							{ingredient.quantity} {ingredient.unit}
						</DataTable.Cell>
					</DataTable.Row>
				))}
				{this.props.ingredients.map((ingredient: Ingridient) => (
					<DataTable.Row key={ingredient.name}>
						<DataTable.Cell textStyle={{ color: '#fff' }} style={{}}>
							{' '}
							{ingredient.name}{' '}
						</DataTable.Cell>
						<DataTable.Cell textStyle={{ color: '#fff' }} style={{ justifyContent: 'flex-end' }}>
							{ingredient.quantity} {ingredient.unit}
						</DataTable.Cell>
					</DataTable.Row>
				))}
				{this.props.ingredients.map((ingredient: Ingridient) => (
					<DataTable.Row key={ingredient.name}>
						<DataTable.Cell textStyle={{ color: '#fff' }} style={{}}>
							{' '}
							{ingredient.name}{' '}
						</DataTable.Cell>
						<DataTable.Cell textStyle={{ color: '#fff' }} style={{ justifyContent: 'flex-end' }}>
							{ingredient.quantity} {ingredient.unit}
						</DataTable.Cell>
					</DataTable.Row>
				))}
			</DataTable>
		);
	}
}
