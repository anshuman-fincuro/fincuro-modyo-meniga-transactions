import axios from 'axios';
import TYPES from '../types';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const setAccountsData = (token) => {
  return (dispatch) => {
    axios
      .get(`${API_URL}/accounts?token=Bearer ${token}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.COMPONENT.ON_ACCOUNTS_SUCCESS,
            payload:  { accountsData: response.data.data },
          });
        }
      });
  };
};

export const setCategoriesData = (token) => {
  return (dispatch) => {
    axios
      .get(`${API_URL}/categories?token=Bearer ${token}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.COMPONENT.ON_CATEGORIES_SUCCESS,
            payload: { categoriesData: response.data.data },
          });
        }
      });
  };
};

export const setPlanningData = (token) => {
  return (dispatch) => {
    axios
      .get(`${API_URL}/budgets?token=Bearer ${token}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.COMPONENT.ON_PLANNING_SUCCESS,
            payload: { planningData: response.data.data },
          });
        }
      });
  };
};

export const setSpendingData = (token) => {
  return (dispatch) => {
    axios
      .get(`${API_URL}/transactions?token=Bearer ${token}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.COMPONENT.ON_SPENDING_SUCCESS,
            payload: { spendingData: response.data.data },
          });
        }
      });
  };
};

export const setMerchantData = (token) => {
  return (dispatch) => {
    axios.get(`${API_URL}/merchants?token=Bearer ${token}`).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: TYPES.COMPONENT.ON_MERCHANTS_SUCCESS,
          payload: { merchantData: response.data.data },
        });
      }
    });
  };
};
