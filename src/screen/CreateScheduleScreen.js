import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { CardSection } from '../components/common';
import ProfileScreen from '../screen/ProfileScreen';

const CreateScheduleScreen = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('ProfileScreen')}>
                  <CardSection>
                      <Text>Create Team</Text>
                </CardSection>
                </TouchableOpacity>
        </View>
    )
}
CreateScheduleScreen.navigationOptions = {
    headerRight: (
        <TouchableOpacity onPress={() => auth.signOut()} style={{marginRight: 20}}>
        <Text>Log out</Text>
        </TouchableOpacity>
    )
};
export default createStackNavigator({
    CreateSchedule: {
        screen: CreateScheduleScreen,
        navigationOptions: () => ({
            title: 'CreateSchedule',
            headerStyle: {
                backgroundColor: '#00807D',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        })
      },
      ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'ProfileScreen',
          headerStyle: {
              backgroundColor: '#00807D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              fontWeight: 'bold',
          }
      })
      }
});