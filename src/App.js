import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { setAuthToken } from "./store/actions/auth-action";
import { SpinningCircles } from "react-loading-icons";
// import AccountDropdown from './components/AccountDropdown';
import {
  setAccountsData,
  setCategoriesData,
  setMerchantData,
  setPlanningData,
  setSpendingData,
} from "./store/actions/component-action";
// import BillingTable from './components/BillingTable';
// import BillingFilter from './components/BillingFilter';
import TransactionDetail from "./components/TransactionDetail";
import LineCharts from "./components/LineCharts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidUpdate(previousProps, previousState) {
    if (previousProps.token !== this.props.token) {
      await Promise.all([
        this.props.setAccounts(this.props.token),
        this.props.setCategories(this.props.token),
        this.props.setSpending(this.props.token),
        this.props.setPlanning(this.props.token),
        this.props.setMerchant(this.props.token),
      ]);
    }
  }
  async componentDidMount() {
    await this.props.setAuth();
  }

  render() {
    return (
      <div>
        {this.props.token !== null &&
        this.props.accountsData &&
        this.props.categoriesData &&
        this.props.spendingData &&
        this.props.merchantData &&
        this.props.planningData ? (
          <div>
            <div id="billingDiv" className="toggleBilling">
              {/* <h2 className="mb-4">Account Summary</h2>
        <div className='account-top-bar'>
        <AccountDropdown></AccountDropdown>
        </div>
        <div className='bill-table-form-wrap'>
          <div className='bill-tableFrom-left'>
        <BillingTable></BillingTable>
        </div>
        <div className='bill-tableFrom-right'>
        <BillingFilter></BillingFilter>
        </div>
        </div>  */}
              <TransactionDetail></TransactionDetail>
              <div className="linechart-wrapper">
                <h2 className="heading">Total expenses this period</h2>
                <div className="TransactionOverviewChart-dropdown">
                            <select>
                                <option value="fruit">Last 6 months</option>
                                <option value="vegetable">Last year</option>
                                <option value="meat">Last 1 year</option>
                                <option value="vegetable">Last 3 year</option>
                                <option value="meat">Last 6 year</option>
                            </select>
                        </div>
                <div className="TransactionOverviewChart-tabs-wrapper">
                  <div>
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          className="nav-item nav-link active"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#nav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          Home
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Profile
                        </a>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <LineCharts spendingData={this.props.spendingData} />
                        <table className="TransactionChartTable">
                          <thead>
                            <tr>
                              <th className="TransactionChartTable-icon"></th>
                              <th className="TransactionChartTable-name"></th>
                              <th className="TransactionChartTable-text">
                                Current month
                              </th>
                              <th className="TransactionChartTable-text">
                                Average
                              </th>
                              <th className="TransactionChartTable-text">
                                Total
                              </th>
                              <th className="TransactionChartTable-row-action"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="TransactionChartTable-row ">
                              <td
                                title="[object Object]"
                                className="TransactionChartTable-icon"
                              >
                                <div
                                  className="GraphColorBox TransactionChartTable-row-colorBox"
                                  
                                ></div>
                              </td>
                              <td className="TransactionChartTable-name">
                                <span className="TransactionChartTable-row-text">
                                  Public Transportation
                                </span>
                              </td>
                              <td className="TransactionChartTable-text">
                                <span
                                  className="FormatCurrency"
                                 
                                >
                                  <span className="FormatCurrency-symbol">£ </span>
                                  <span className="FormatCurrency-value">
                                    -30.00
                                  </span>
                                </span>
                              </td>
                              <td className="TransactionChartTable-text">
                                <span
                                  className="FormatCurrency"
                                  
                                >
                                  <span className="FormatCurrency-symbol">£ </span>
                                  <span className="FormatCurrency-value">
                                    -25.67
                                  </span>
                                </span>
                              </td>
                              <td className="TransactionChartTable-text">
                                <span
                                  className="FormatCurrency"
                                  
                                >
                                  <span className="FormatCurrency-symbol">£ </span>
                                  <span className="FormatCurrency-value">
                                    -184.00
                                  </span>
                                </span>
                              </td>
                              <td className="TransactionChartTable-row-action">
                                <i className="Icon Icon--normal Icon--xs Icon--line Icon--right"></i>
                              </td>
                            </tr>
                            <tr className="TransactionChartTable-row ">
                              <td
                                title="[object Object]"
                                className="TransactionChartTable-icon"
                              >
                                <div
                                  className="GraphColorBox TransactionChartTable-row-colorBox"
                                  
                                ></div>
                              </td>
                              <td className="TransactionChartTable-name">
                                <span className="TransactionChartTable-row-text">
                                  Transport for London
                                </span>
                              </td>
                              <td className="TransactionChartTable-text">
                                <span
                                  className="FormatCurrency"
                                 
                                >
                                  <span className="FormatCurrency-symbol">£ </span>
                                  <span className="FormatCurrency-value">
                                    -30.00
                                  </span>
                                </span>
                              </td>
                              <td className="TransactionChartTable-text">
                                <span
                                  className="FormatCurrency"
                             
                                >
                                  <span className="FormatCurrency-symbol">£ </span>
                                  <span className="FormatCurrency-value">
                                    -15.00
                                  </span>
                                </span>
                              </td>
                              <td className="TransactionChartTable-text">
                                <span
                                  className="FormatCurrency"
                                 
                                >
                                  <span className="FormatCurrency-symbol">£ </span>
                                  <span className="FormatCurrency-value">
                                    -120.00
                                  </span>
                                </span>
                              </td>
                              <td className="TransactionChartTable-row-action">
                                <i className="Icon Icon--normal Icon--xs Icon--line Icon--right"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <SpinningCircles />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  accountsData: state.componentReducer.accountsData,
  planningData: state.componentReducer.planningData,
  merchantData: state.componentReducer.merchantData,
  categoriesData: state.componentReducer.categoriesData,
  spendingData: state.componentReducer.spendingData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: () => dispatch(setAuthToken()),
    setAccounts: (token) => dispatch(setAccountsData(token)),
    setCategories: (token) => dispatch(setCategoriesData(token)),
    setPlanning: (token) => dispatch(setPlanningData(token)),
    setSpending: (token) => dispatch(setSpendingData(token)),
    setMerchant: (token) => dispatch(setMerchantData(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
