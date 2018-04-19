import { combineReducers } from 'redux';
import customerReducer from './customerReducer';

const reducers = combineReducers({
  customer: customerReducer
});

export default reducers;
