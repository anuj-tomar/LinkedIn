import React from 'react';
import { createAppContainer ,createStackNavigator} from 'react-navigation';
import Login from './pages/Login';
import Register from './pages/RegisterUser';
import HomeScreen from './pages/HomeScreen';
import Users from './pages/Users';

 
const App = createAppContainer(createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerStyle: { backgroundColor: 'rgb(246, 109, 34)' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerStyle: { backgroundColor: 'rgb(246, 109, 34)' },
      headerTintColor: '#ffffff',
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HomeScreen',
      headerStyle: { backgroundColor: 'rgb(246, 109, 34)' },
      headerTintColor: '#ffffff',
    },
  },
  Users: {
    screen: Users,
    navigationOptions: {
      title: 'People',
      headerStyle: { backgroundColor: 'rgb(246, 109, 34)' },
      headerTintColor: '#ffffff',
    },
  },
}));
export default App;
