/* eslint-disable prettier/prettier */
import {authData} from '../service/actionType';

const initialState = {
  datum: {},
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authData.authLogin:
      return {
        ...state,
        authLogin: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
