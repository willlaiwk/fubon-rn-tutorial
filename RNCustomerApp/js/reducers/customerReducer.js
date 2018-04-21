import {
  FETCH_CUSTOMERS
} from '../actions/types';

const INITIAL_STATE = {
  customerList: [{ id: 0, first_name: '33' }],
  customer: {},
};

const customerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return { ...state, customerList: action.payload };
    default:
      return state;
  }
}

export default customerReducer;
