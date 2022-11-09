import axios from 'axios';
import TYPES from '../types';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export function getToDate(){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${year}-${month<10?`0${month}`:`${month}`}-${date<10?`0${date}`:`${date}`}`
  }

  export function getFromDate(){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() -2;
    let year = newDate.getFullYear();
    return `${year}-${month<10?`0${month}`:`${month}`}-${date<10?`0${date}`:`${date}`}`
    }
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

export const setSpendingData = (token,filter={}) => {
  console.log(filter)
  let query = '';
  let fromDate = getFromDate()
  let toDate = getToDate()
  if(filter.chartDateRange && filter.chartDateRange != null){
    fromDate = filter.chartDateRange.split(',')[0]
    toDate = filter.chartDateRange.split(',')[1]
  }

  if(filter.period){
      query+= '&period='+filter.period;
    if(filter.periodFrom)
      query+= '&periodFrom='+filter.periodFrom;
    if(filter.periodTo)
      query+= '&periodTo='+filter.periodTo;
  }else{
    query+= `&periodFrom=${fromDate}&periodTo=${toDate}`;
  }

  if(filter.amountType){
    query+= `&amountType=${filter.amountType}`;
  }
  if(filter.searchText){
    query+= `&searchText=${filter.searchText}`;
  }
  if(filter.onlyUncertain){
    query+= `&onlyUncertain=${filter.onlyUncertain}`;
  }
  if(filter.activeAccount){
    const accountTypes = (filter.activeAccount == 0) ? 'Credit' :  (filter.activeAccount == 1) ? 'Current': 'Savings';
    query+= `&accountTypes=${accountTypes}`;
  }
  
  if(filter.categoryIds){
    query+= `&categoryIds=${filter.categoryIds}`;
  }

  return (dispatch) => {
    axios
      .get(`${API_URL}/transactions?token=Bearer ${token}${query}`)
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

export const setCategoryFilterData = (token) => {
  return (dispatch) => {
    axios.get(`${API_URL}/categories?token=Bearer ${token}`).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: TYPES.FILTER.ON_CATEGORY_FILTER_SUCCESS,
          payload: { catFilterData: response.data.data },
        });
      }
    });
  };
};

export const setSettingsData = (token) => {
  return (dispatch) => {
    axios.get(`${API_URL}/public/settings?token=Bearer ${token}`).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: TYPES.COMPONENT.ON_SETTINGS_SUCCESS,
          payload: { settings: response.data.data },
        });
      }
    });
  };
};

