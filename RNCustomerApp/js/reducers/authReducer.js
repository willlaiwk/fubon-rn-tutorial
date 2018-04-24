import {
  USER_LOGIN,
  USER_LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
  isLogin: false,
  username: '',
  token: '',
  salt: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, ...action.payload, isLogin: true };
    case USER_LOGOUT:
      return { ...state, isLogin: false };
    default:
      return state;
  }
}
