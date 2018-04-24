import {
  FETCH_CUSTOMERS,
  SELECT_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  CREATE_CUSTOMER
} from '../actions/types';

const INITIAL_STATE = {
  customerList: [],
  selectedCustomer: {},
};

const customerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HOME_LOADING':
      return { ...state };
    case FETCH_CUSTOMERS:
      return { ...state, customerList: action.payload };
    case 'FETCH_CUSTOMERS_ERROR':
      return { ...state };
    case SELECT_CUSTOMER:
      return { ...state, selectedCustomer: action.payload };
    case UPDATE_CUSTOMER:
      return {
        ...state,
        customerList: state.customerList.map((customer) => {
          if (customer.id === action.payload.id) {
            return action.payload;
          }
          return customer;
        }),
        selectedCustomer: action.payload
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customerList: state.customerList.filter(customer =>
          customer.id !== action.payload
        ),
        selectedCustomer: {},
      };
    case CREATE_CUSTOMER:
      return {
        ...state,
        customerList: state.customerList.concat(action.payload)
      };
    default:
      return state;
  }
}

export default customerReducer;
