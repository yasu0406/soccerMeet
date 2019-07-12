import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Card, CardSection, Button } from '../components/common';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#00807D',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    render() {
        return (
            <Card>
                <CardSection >
                    <Text>Home</Text>
                </CardSection>
                <CardSection >
                    <Button onPress={() => firebase.auth().signOut()} >Log Out</Button>
                </CardSection>
            </Card>
        );
    }
}

export default HomeScreen;