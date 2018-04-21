import { INCREASE } from '../actions/types';
const INITIAL_STATE = {
  num: 3
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE:
      return { num: state.num + action.payload };
    default:
      return state;
  }
};

export default appReducer;
