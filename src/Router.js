import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 0 }}>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Veuillez vous connecter" />
				</Scene>

				<Scene key="main">
					<Scene 
						onRight={() => Actions.employeeCreate()}
						rightTitle="Ajouter"
						key="employeeList"
						component={EmployeeList} 
						title="Patients" 
						initial
					/>
					<Scene key="employeeCreate" component={EmployeeCreate} title="Ajouter Patient" />
					<Scene key="employeeEdit" component={EmployeeEdit} title="Modifier un Patient" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
