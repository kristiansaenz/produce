import axios from 'axios';
import { returnErrors } from './errorActions';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';

export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });


  axios
    .get('/auth/user', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const register = ({ name, email, password }) => dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }

  const body = JSON.stringify({ name, email, password })

  axios.post('/auth/register', body, config)
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    }))
    .catch(err => {
      dispatch({
        type: REGISTER_FAIL
      })
    })

}

export const tokenConfig = getState => {
  const token = getState().auth.token;
  
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }

  if(token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
}