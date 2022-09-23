import TYPES from '../types';

// Initial State
const initialState = {
  accountsData: [],
  categoriesData: [],
  merchantData: [],
  planningData: [],
  spendingData: [],
};

const componentReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.COMPONENT.ON_ACCOUNTS_SUCCESS:
      return {
        accountsData: action.payload.accountsData,
      };
    case TYPES.COMPONENT.ON_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesData: action.payload.categoriesData,
      };
    case TYPES.COMPONENT.ON_MERCHANTS_SUCCESS:
      return {
        ...state,
        merchantData: action.payload.merchantData,
      };
    case TYPES.COMPONENT.ON_PLANNING_SUCCESS:
      return {
        ...state,
        planningData: action.payload.planningData,
      };
    case TYPES.COMPONENT.ON_SPENDING_SUCCESS:
      return {
        ...state,
        spendingData: action.payload.spendingData,
      };
    default:
      return {
        ...state,
      };
  }
};

export default componentReducer;
