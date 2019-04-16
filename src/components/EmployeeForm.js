import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
	render() {
		return (
			<View>
				<CardSection>
						<Input
							label="Nom"
							placeholder="Nom"
							value={this.props.name}
							onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
						/>
				</CardSection>

				<CardSection>
					<Input
						label="Telephone"
						placeholder="06-00-00-00-00"
						value={this.props.phone}
						onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
					/>
				</CardSection>

				<CardSection style={{ flexDirection: 'row' }}>
					<Text style={styles.pickerTextStyle}>
						Jour
					</Text>
					<Picker
						style={{ flex: 1 }}
						selectedValue={this.props.shift}
						onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
						value={this.props.shift}
					>
						<Picker.Item label="Lundi" value="Lundi" />
						<Picker.Item label="Mardi" value="Mardi" />
						<Picker.Item label="Mercredi" value="Mercredi" />
						<Picker.Item label="Jeudi" value="Jeudi" />
						<Picker.Item label="Vendredi" value="Vendredi" />
						<Picker.Item label="Samedi" value="Samedi" />
						<Picker.Item label="Dimanche" value="Dimanche" />
					</Picker>
				</CardSection>
			</View>
		);
	}
}

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
};

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);
