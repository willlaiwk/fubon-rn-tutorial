import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import reducers from './reducers';
import Home from './screens/Home';
import Add from './screens/Add';
import Details from './screens/Details';
import Edit from './screens/Edit';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Customers',
        headerBackTitle: 'Back'
      },
    },
    Add: {
      screen: Add,
    },
    Details: {
      screen: Details,
    },
    Edit: {
      screen: Edit,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default App;
