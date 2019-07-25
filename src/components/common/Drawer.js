import TabNavigator from './TabNavigator';
import ScheduleScreen from '../../screen/ScheduleScreen';
import { createDrawerNavigator, createAppContainer, createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../../screen/HomeScreen';
import Main from '../Main';

const Draw = createDrawerNavigator({
  Home: {
    screen: TabNavigator,
  },
  Main: {
    screen: Main
  },
});

export default createAppContainer(Draw);