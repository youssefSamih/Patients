import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.employeeCreate({ name, phone, shift: shift || 'Lundi' });
	}
	render() {
		console.log(this.props.employee);

		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Ajouter
					</Button>
				</CardSection>
			</Card>
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

export default connect(mapStateToProps, { 
	employeeUpdate, employeeCreate
})(EmployeeCreate);
