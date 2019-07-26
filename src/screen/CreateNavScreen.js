import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Card, CardSection, Button } from '../components/common';
import CreateTeamScreen from './CreateTeamScreen';
import CreateScheduleScreen from './CreateScheduleScreen';
import Icon from '@expo/vector-icons/FontAwesome';

class CreateNavScreen extends React.Component {
    static navigationOptions = {
        headerRight: (
          <TouchableOpacity onPress={() => firebase.auth().signOut()} style={{marginRight: 20}}>
            <Text>Log out</Text>
          </TouchableOpacity>
        )
      };
    render() {
        return (
        <>
        <Card>
            <CardSection>
                <View  style={styles.container}>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateTeamScreen')}>
                    <Icon
                        name='home'
                        size={50}
                        style={styles.icons}
                    />
                    <Text style={styles.textStyle}>Create Team</Text>
                    </TouchableOpacity>    
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateScheduleScreen')}>
                    <Icon
                        name='home'
                        size={50}
                        style={styles.icons}
                    />
                    <Text style={styles.textStyle}>Create Schedule</Text>
                    </TouchableOpacity>    
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateTeamScreen')}>
                    <Icon
                        name='home'
                        size={50}
                        style={styles.icons}
                    />
                    <Text style={styles.textStyle}>Join Team</Text>
                    </TouchableOpacity>    
                </View>
                </View>
            </CardSection>
        </Card>
      </>
        )
    }
}
const styles = {
    container: {
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      textAlgin: 'center'
    },
    icons: {
        color: '#161F3D',
        textAlign: 'center'
    },
    textStyle: {
        textAlign: 'center'
    }
  }
   
  export default createStackNavigator({
    CreateNavScreen: {
      screen: CreateNavScreen,
      navigationOptions: ({ navigation }) => ({
          title: 'Nav List',
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
    CreateTeamScreen: {
        screen: CreateTeamScreen,
        navigationOptions: {
            title: 'CreateTeam',
            headerStyle: {
                backgroundColor: '#00807D',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
      },
      CreateScheduleScreen: {
        screen: CreateScheduleScreen,
        navigationOptions: {
            title: 'CreateTeam',
            headerStyle: {
                backgroundColor: '#00807D',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
      }
  });