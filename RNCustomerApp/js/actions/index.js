import axios from 'axios';
import {
  FETCH_CUSTOMERS,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  SELECT_CUSTOMER,
  USER_LOGIN,
  USER_LOGOUT
} from './types';

const DOMAIN_NAME = 'http://172.20.10.2:7654';

export const fetchCustomers = () => (dispatch) => {
  axios.get(`${DOMAIN_NAME}/api/customers`)
    .then(resp =>
      dispatch({ type: FETCH_CUSTOMERS, payload: resp.data })
    )
    .catch((err) => {
      const st = err.response.status;
      if (st === 404) {

      } else if (st === 500) {

      } else {
        console.log('err:', err);
      }
    });
}

export const createCustomer = (customer) => (dispatch) => {
  return axios.post(`http://172.20.10.2:7654/api/customers`, customer)
    .then(resp =>
      dispatch({ type: CREATE_CUSTOMER, payload: resp.data.customer })
    );
};

export const updateCustomer = (customer) => (dispatch) => {
  return axios.put(`http://172.20.10.2:7654/api/customers/${customer.id}`, customer)
    .then(resp =>
      dispatch({ type: UPDATE_CUSTOMER, payload: resp.data.customer })
    );
};

export const deleteCustomer = (customer) => (dispatch) => {
  return axios.delete(`http://172.20.10.2:7654/api/customers/${customer.id}`)
    .then(resp =>
      dispatch({ type: DELETE_CUSTOMER, payload: customer })
    );
};

export const selectCustomer = (customer) => ({
  type: SELECT_CUSTOMER,
  payload: customer
});

export const userLogin = () => ({
  type: USER_LOGIN
});

export const userLogout = () => ({
  type: USER_LOGOUT
});
