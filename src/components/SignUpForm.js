import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';


class SignUpForm extends Component {
    static navigationOptions = {
        title: 'Sign Up',
        headerStyle: {
          backgroundColor: '#82C760',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    };
   render() {
       return(
            <View>
                <Text>SignUpForm</Text>
            </View>
       );
   }
}

export default SignUpForm;