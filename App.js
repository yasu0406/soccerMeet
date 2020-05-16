import React, { Component } from 'react';
import {View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Spinner} from './src/components/common';
import TabNavigator from './src/components/common/TabNavigator';
import SignInForm from './src/components/SignInForm';
import SignUpForm from './src/components/SignUpForm';
import {auth, createUserProfileDocument} from './src/firebase/firebase.util';

class App extends Component {
  state = { 
    loggedIn: null
  };

  componentWillMount() {
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
        createUserProfileDocument(user);
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
          return (
            <>
            <TabNavigator />
            </>
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
    SignIn: SignInForm,
    SignUp: SignUpForm
  },
  {
    initialRouteName: 'SignIn',
  }
);

const AppContainer = createAppContainer(RootStack);

export default App;
