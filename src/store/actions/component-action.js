import axios from "axios";
import TYPES from "../types";
import { isNumeric, getFromDate, getToDate } from "../../utils";

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
      }).catch((error) => {
        if(error) {        
          dispatch({  
            type: TYPES.COMPONENT.ERRMESSAGE,
            payload:  { errorMessage: 'something snappped. please try later !' },
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
      }).catch((error) => {
        if(error) {        
          dispatch({  
            type: TYPES.COMPONENT.ERRMESSAGE,
            payload:  { errorMessage: 'something snappped. please try later !' },
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
      }).catch((error) => {
        if(error) {        
          dispatch({  
            type: TYPES.COMPONENT.ERRMESSAGE,
            payload:  { errorMessage: 'something snappped. please try later !' },
          });
        }
      });
  };
};

export const setSpendingData = (token, filter = {}) => {
  console.log(filter);
  let query = "";
  let fromDate = getFromDate();
  let toDate = getToDate();
  if (filter.chartDateRange && filter.chartDateRange != null) {
    fromDate = filter.chartDateRange.split(",")[0];
    toDate = filter.chartDateRange.split(",")[1];
  }

  // if ((filter.periodFrom || filter.periodTo) && filter.period) {
  //   query += "&period=" + filter.period;

  //   if (filter.periodFrom) query += "&periodFrom=" + filter.periodFrom;
  //   if (filter.periodTo) query += "&periodTo=" + filter.periodTo;
  // }else{
  //   query+= `&periodFrom=${fromDate}&periodTo=${toDate}`;
  // }


  if(filter.periodFrom  && filter.periodTo){
    query += `&periodFrom=${filter.periodFrom}&periodTo=${filter.periodTo}`;
  }else{
     query+= `&periodFrom=${fromDate}&periodTo=${toDate}`;
  }

  if (filter.amountType) {
    query += `&categoryTypes=${filter.amountType}`;
  }

  if (filter.amountFrom && isNumeric(filter.amountFrom)) {
    if (!filter.amountType || filter.amountType === "Income")
      query += `&amountFrom=${filter.amountFrom}`;
    else query += `&amountTo=-${filter.amountFrom}`;
  }

  if (filter.amountTo && isNumeric(filter.amountTo)) {
    if (!filter.amountType || filter.amountType === "Income")
      query += `&amountTo=${filter.amountTo}`;
    else query += `&amountFrom=-${filter.amountTo}`;
  }

  if (filter.searchText) {
    query += `&searchText=${encodeURIComponent(filter.searchText)}`;
  }
  if (filter.onlyUncertain) {
    query += `&onlyUncertain=${filter.onlyUncertain}`;
  }
  if (filter.activeAccount) {
    query += `&accountTypes=${filter.activeAccount}`;
  }

  if (filter.categoryIds) {
    query += `&categoryIds=${filter.categoryIds}`;
  }

  return (dispatch, getState) => {
    console.log(getState())
    dispatch({
      type: TYPES.COMPONENT.ON_REQUEST_LOAD
    });
    axios
      .get(`${API_URL}/transactions?token=Bearer ${token}${query}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.COMPONENT.ON_SPENDING_SUCCESS,
            payload: { spendingData: response.data.data },
          });
        }
      }).catch((error) => {
        if(error) {        
          dispatch({  
            type: TYPES.COMPONENT.ERRMESSAGE,
            payload:  { errorMessage: 'something snappped. please try later !' },
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
    }).catch((error) => {
      if(error) {        
        dispatch({  
          type: TYPES.COMPONENT.ERRMESSAGE,
          payload:  { errorMessage: 'something snappped. please try later !' },
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
    }).catch((error) => {
      if(error) {        
        dispatch({  
          type: TYPES.COMPONENT.ERRMESSAGE,
          payload:  { errorMessage: 'something snappped. please try later !' },
        });
      }
    });
  };
};

export const setSettingsData = (token) => {
  return (dispatch) => {
    axios
      .get(`${API_URL}/public/settings?token=Bearer ${token}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: TYPES.COMPONENT.ON_SETTINGS_SUCCESS,
            payload: { settings: response.data.data },
          });
        }
      });
  };
};
