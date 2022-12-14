import TYPES from "../types";

// Initial State
const initialState = {
  accountsData: [],
  categoriesData: [],
  merchantData: [],
  planningData: [],
  spendingData: [],
  lineChartData:[],
  categoryFilterData: [],
  settings: {},
  errMeessage:'',
  loading:  false
};

const compare = (a, b) => {
  let x = a.name.toLowerCase(),
    y = b.name.toLowerCase();
  return x == y ? 0 : x > y ? 1 : -1;
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
        loading: false
      };
      case TYPES.COMPONENT.ON_LINECHART_SUCCESS:
        return {
          ...state,
          lineChartData: action.payload.lineChartData,
          loading: false
        };
    case TYPES.FILTER.ON_CATEGORY_FILTER_SUCCESS:
      const payload = action.payload.catFilterData;
      const filteredData =
        payload &&
        payload
          .filter((i) => i.children && i.children.length > 0)
          .sort(compare);
      return {
        ...state,
        categoryFilterData: filteredData,
      };

    case TYPES.COMPONENT.ON_SETTINGS_SUCCESS:
        return {
          ...state,
          settings: action.payload.settings,
        };

    case TYPES.COMPONENT.ERRMESSAGE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    case TYPES.COMPONENT.ON_REQUEST_LOAD:
      return {
        ...state,
        loading: true
      };
    default:
      return {
        ...state,
      };
  }
};

export default componentReducer;
