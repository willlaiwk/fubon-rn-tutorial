import React from 'react';
import {
  Button
} from 'react-native';
import Home from './screens/Home';
import Details from './screens/Details';
import Edit from './screens/Edit';
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Customers',
        headerBackTitle: 'Back'
      },
    },
    Details: {
      screen: Details,
      navigationOptions: ({ navigation }) => {
        const customer = navigation.state.params.customer;
        return {
          title: `${customer.first_name} ${customer.last_name}`,
          headerBackTitle: 'Cancel',
          headerRight: <Button title="Edit" onPress={() => {
            // todo: 換頁 => Edit
            navigation.navigate('Edit', { customer });
          }} />
        }
      },
    },
    Edit: {
      screen: Edit,
      // navigationOptions: {
      //   title: 'Edit'
      // },
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const App = () => <RootStack />;

export default App;
