import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Spinner} from './src/components/common';
import Drawer from './src/components/common/Drawer';
import SignInForm from './src/components/SignInForm';
import SignUpForm from './src/components/SignUpForm';
import { db } from './src/components/common/config';

class App extends Component {
  state = { 
    loggedIn: null
  };

  componentWillMount() {
    db.auth().onAuthStateChanged((user) => {
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
            <>
            <Drawer />
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
