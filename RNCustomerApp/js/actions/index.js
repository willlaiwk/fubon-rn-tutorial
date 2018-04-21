import axios from 'axios';
import {
  INCREASE,
  FETCH_CUSTOMERS
} from './types';

const DOMAIN_NAME = 'http://172.20.10.2:7654';

export const increase = (num) => ({
  type: INCREASE,
  payload: num
});

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
      });
  }
}
