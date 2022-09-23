import axios from 'axios';
import TYPES from '../types';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const setAuthToken = () => {
  return (dispatch) => {
    axios.get(`${API_URL}/auth`).then((response) => {
      console.log('Response', response);
      if (response.status === 200) {
        dispatch({
          type: TYPES.AUTH.TOKEN,
          payload: { token: response.data.data.accessToken },
        });
      }
    });
  };
};
