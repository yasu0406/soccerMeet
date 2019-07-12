import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../../screen/HomeScreen';
import ScheduleScreen from '../../screen/ScheduleScreen';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Schedule: {
    screen: ScheduleScreen
  }
});
export default createAppContainer(TabNavigator);