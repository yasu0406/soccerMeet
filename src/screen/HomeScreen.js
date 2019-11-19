import React, {useEffect} from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {auth} from '../firebase/firebase.util';
import ScheduleDetailScreen from './ScheduleDetailScreen';

import ScheduleList from '../components/ScheduleList';

const HomeScreen = (props) => {
  return(
    <View style={styles.containerStyle}>
      <ScheduleList navigate={props.navigation.navigate}/>
    </View>
  )
}
 
const styles = {
  containerStyle: {
    height: '100%',
    backgroundColor: '#F2F3FA',
    padding: 10,
  }
}

HomeScreen.navigationOptions = {
  headerRight: (
    <TouchableOpacity onPress={() => auth.signOut()} style={{marginRight: 20}}>
      <Text>Log out</Text>
    </TouchableOpacity>
  )
};


export default createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
        title: 'Home',
        headerStyle: {
            backgroundColor: '#00807D',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    })
  },
  ScheduleDetail: {
    screen: ScheduleDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'ScheduleDetail',
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