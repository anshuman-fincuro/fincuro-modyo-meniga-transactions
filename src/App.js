import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { setAuthToken } from './store/actions/auth-action';
import { SpinningCircles } from "react-loading-icons";
import AccountDropdown from './components/AccountDropdown';
import { setAccountsData, setCategoriesData, setMerchantData, setPlanningData, setSpendingData } from "./store/actions/component-action";
import BillingTable from './components/BillingTable';
import BillingFilter from './components/BillingFilter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidUpdate(previousProps, previousState) {
    if (previousProps.token !== this.props.token) {
      await Promise.all(
        [ 
          this.props.setAccounts(this.props.token),
          this.props.setCategories(this.props.token),
          this.props.setSpending(this.props.token),
          this.props.setPlanning(this.props.token),
          this.props.setMerchant(this.props.token)
        ]
      );
    }
    
  }
  async componentDidMount() {
    await this.props.setAuth();
  }

  render() {
    return (
      <div>
         { (this.props.token !== null && this.props.accountsData && this.props.categoriesData && this.props.spendingData && this.props.merchantData && this.props.planningData) ? 
      <div>
         <div id="billingDiv" className='toggleBilling'>
         <h2 class="mb-4">Account Summary</h2>
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
        </div> 
        </div>    
      </div>
    :
    <SpinningCircles/> }
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
  spendingData: state.componentReducer.spendingData
});

const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: () => dispatch(setAuthToken()),
    setAccounts: (token) => dispatch(setAccountsData(token)),
    setCategories: (token) => dispatch(setCategoriesData(token)),
    setPlanning: (token) => dispatch(setPlanningData(token)),
    setSpending: (token) => dispatch(setSpendingData(token)),
    setMerchant: (token) => dispatch(setMerchantData(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
