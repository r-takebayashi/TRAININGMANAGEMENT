import HomeScreen from './screens/HomeScreen';
import AddDataScreen from './screens/AddDataScreen';
import {createAppContainer} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    AddData: {screen: AddDataScreen},
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
