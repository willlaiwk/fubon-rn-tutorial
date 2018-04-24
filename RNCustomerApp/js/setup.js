import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  Button
} from 'react-native';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import App from './screens/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
