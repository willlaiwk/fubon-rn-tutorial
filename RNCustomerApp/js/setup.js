import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  Button
} from 'react-native';
import reduxThunk from 'redux-thunk';
import Home from './screens/Home';
import Details from './screens/Details';
import Edit from './screens/Edit';
import { StackNavigator } from 'react-navigation';
import reducers from './reducers';

// 告訴 Reducer 要做什麼改變
// actions: pure function
// action function(n) {
//   return {
//     type: 'Add',
//     payload: n
//   };
// }

// 改變 State
// reducer: pure function
// function(state, action) {
//   switch (action) {
//     case Add:
//       return { number: action.payload + 1 };
//     default:
//     return state;
//   }
// }



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

// const INITIAL_STATE = {
//   num: 3
// };

// homeReducer

// editReducer

// detailsReducer

// customerReducer

// authReducer

// const reducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'INCREASE':
//       return { num: state.num + action.payload };
//     default:
//       return state;
//   }
// };



const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default App;
