import {
  FETCH_CUSTOMERS,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  SELECT_CUSTOMER
} from '../actions/types';

INITIAL_STATE = {
  customers: [],
  customer: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return { ...INITIAL_STATE, customers: action.payload };
    case CREATE_CUSTOMER:
      return { ...state, customers: state.customers.concat(action.payload) };
    case UPDATE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.map(customer =>
          customer.id === action.payload.id ? action.payload : customer
        ),
        customer: action.payload
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(customer =>
          customer.id !== action.payload.id
        ),
        customer: {}
      };
    case SELECT_CUSTOMER:
      return { ...state, customer: action.payload };
    default:
      return state;
  }
}
