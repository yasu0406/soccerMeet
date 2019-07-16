import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';
import {Spinner, TabNavigator} from './src/components/common';
import LoginForm from './src/components/LoginForm';
import SignUpForm from './src/components/SignUpForm';
import HomeScreen from './src/screen/HomeScreen';

class App extends Component {
  state = { 
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyDV5fbCM9_12yJObvGIQTCKLntH0PHdZjM',
        authDomain: 'authentication-3a6af.firebaseapp.com',
        databaseURL: 'https://authentication-3a6af.firebaseio.com',
        projectId: 'authentication-3a6af',
        storageBucket: '',
        messagingSenderId: '556128285807',
        appId: '1:556128285807:web:fabcf779d204b816'
      }
    );

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
          return (
            <TabNavigator/>
          );
      case false:
          return <AppContainer/>;
      default:   
            return <Spinner size="large" />
    }
  }
  
  render() {
    return (
      <>
        {this.renderContent()}
      </>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Login: LoginForm,
    SignUp: SignUpForm,
    Home: HomeScreen
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default App;
