import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyATkTi3VIn4r4MYQB89tlTBIkgifMv0fWg',
			authDomain: 'manager-4a32b.firebaseapp.com',
			databaseURL: 'https://manager-4a32b.firebaseio.com',
			projectId: 'manager-4a32b',
			storageBucket: 'manager-4a32b.appspot.com',
			messagingSenderId: '169404786878'
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
