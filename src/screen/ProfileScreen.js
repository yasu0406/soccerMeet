import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {auth} from '../firebase/firebase.util';
 
class ProfileScreen extends React.Component {
  static navigationOptions = {
    headerRight: (
      <TouchableOpacity onPress={() => auth.signOut()} style={{marginRight: 20}}>
        <Text>Log out</Text>
      </TouchableOpacity>
    )
  };
  render() {
    return (
    <Text>ScheduleScreen</Text>
    );
  }
}

export default createStackNavigator({
  Main: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
        title: 'ProfileScreen',
        headerStyle: {
            backgroundColor: '#00807D',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image 
            source={require('../../assets/drawer-150x150.png')} 
            style={{ width: 30, height: 30}}
          />
        </TouchableOpacity>
      )
    })
  },
});