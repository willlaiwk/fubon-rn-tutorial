import { combineReducers } from 'redux';
import appReducer from './appReducer';
import customerReducer from './customerReducer';

const rootReducer = combineReducers({
  app: appReducer,
  customer: customerReducer
});

export default rootReducer;
