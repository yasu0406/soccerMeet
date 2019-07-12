import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Card, CardSection, Button } from '../components/common';

class ScheduleScreen extends Component {
    render() {
        return (
            <Card>
                <CardSection >
                    <Text>ScheduleScreen</Text>
                </CardSection>
                <CardSection >
                    <Button onPress={() => firebase.auth().signOut()} >Log Out</Button>
                </CardSection>
            </Card>
        );
    }
}

export default ScheduleScreen;