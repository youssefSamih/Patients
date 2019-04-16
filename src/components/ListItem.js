import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
	onRowPress() {
		Actions.employeeEdit({ employee: this.props.employee });
	}

	render() {
		const { name } = this.props.employee;
		return (
			<TouchableOpacity style={styles.touch} onPress={this.onRowPress.bind(this)}>
				<View>
		        	<CardSection>
		        		<Text style={styles.titleStyle}>
		            		{name}
		        		</Text>
					</CardSection>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15,
	},
	touch: {
		paddingTop: 5,
		paddingBottom: 5
	}
};

export default ListItem;
