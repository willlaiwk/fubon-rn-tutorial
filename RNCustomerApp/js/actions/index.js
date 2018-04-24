import axios from 'axios';
import {
  FETCH_CUSTOMERS,
  SELECT_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  CREATE_CUSTOMER,
  USER_LOGIN,
  USER_LOGOUT
} from './types';

const DOMAIN_NAME = 'http://172.20.10.2:7654';


export const fetchCustomers = () => {
  return function (dispatch) {
    const requset = axios.get(`${DOMAIN_NAME}/api/customers`);
    requset
      .then((resp) => {
        dispatch({ type: FETCH_CUSTOMERS, payload: resp.data });
      })
      .catch((err) => {
        const st = err.response.status;
        if (st === 404) {

        } else if (st === 500) {

        } else {
          console.log('err:', err);
        }
        dispatch({ type: 'FETCH_CUSTOMERS_ERROR', payload: err });
      });
  }
}

export const selectCustomer = (customer) => ({
  type: SELECT_CUSTOMER,
  payload: customer
})

export const updateCustomer = (customer) => {
  return function (dispatch) {
    return axios.put(`${DOMAIN_NAME}/api/customers/${customer.id}`, customer)
      .then((resp) => {
        dispatch({ type: UPDATE_CUSTOMER, payload: customer });
      });
  }
}

export const deleteCustomer = (customerId) => {
  return function (dispatch) {
    return axios.delete(`${DOMAIN_NAME}/api/customers/${customerId}`)
      .then(() => {
        dispatch({ type: DELETE_CUSTOMER, payload: customerId });
      });
  }
}

export const createCustomer = (customer) => {
  return function (dispatch) {
    return axios.post(`${DOMAIN_NAME}/api/customers`, customer)
      .then((resp) => {
        dispatch({ type: CREATE_CUSTOMER, payload: resp.data.customer });
      });
  }
}

export const userLogin = (account, password) => {
  return function(dispatch) {
    return axios.post(`${DOMAIN_NAME}/api/login`, { account, password })
      .then((resp) => {
        dispatch({ type: USER_LOGIN, payload: resp.data });
      });
  }
};

export const userLogout = () => ({
  type: USER_LOGOUT
});
