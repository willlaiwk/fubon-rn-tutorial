import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Details from './screens/Details';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Customers',
        headerBackTitle: '返回'
      },
    },
    Details: {
      screen: Details,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.customer.first_name} ${navigation.state.params.customer.last_name}`,
        headerBackTitle: '返回'
      }),
    }
  },
  {
    initialRouteName: 'Home',
  }
)

const App = () => <RootStack />;

export default App;
