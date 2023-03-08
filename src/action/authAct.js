/* eslint-disable prettier/prettier */
import {authData} from '../service/actionType';

export const authActDatum = data => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: authData.authLogin,
      payload: data,
    });
  });
};
