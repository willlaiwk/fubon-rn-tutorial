import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  Button
} from 'react-native';
import reduxThunk from 'redux-thunk';
import { StackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Details from './screens/Details';
import Edit from './screens/Edit';
import Add from './screens/Add';

import reducers from './reducers';

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
    },
    Edit: {
      screen: Edit,
    },
    Add: {
      screen: Add
    }
  },
  {
    initialRouteName: 'Home',
  }
);


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default App;
