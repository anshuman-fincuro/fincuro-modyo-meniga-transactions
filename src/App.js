// import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import "./../src/style/Base.css";
import { setAuthToken } from "./store/actions/auth-action";
import { SpinningCircles } from "react-loading-icons";
import AccountDropdown from './components/AccountDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  setAccountsData,
  setCategoriesData,
  setMerchantData,
  setPlanningData,
  setSpendingData,
  setSettingsData
} from "./store/actions/component-action";
import BillingTable from './components/BillingTable';
import BillingFilter from './components/BillingFilter';
import TransactionDetail from "./components/TransactionDetail";
import { mdiMagnify, mdiRhombusSplit  } from "@mdi/js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAccount: 0,
      activeCheckbox: false,
      showDetails: false,
      AmountFilterType: false,
      activeCheckboxCurrent:false,
      activeCheckboxSaving: false,
      selectedTransaction: null,
      selectedTransactionGroup: null,
    };
  }

  async componentDidUpdate(previousProps, previousState) {
    if (previousProps.token !== this.props.token) {
      await Promise.all([
        this.props.setAccounts(this.props.token),
        this.props.setCategories(this.props.token),
        this.props.setSpending(this.props.token),
        this.props.setPlanning(this.props.token),
        this.props.setMerchant(this.props.token),
        this.props.setSettings(this.props.token),
      ]);
    }
  }
  async componentDidMount() {
    await this.props.setAuth();
  }

  getTransactionData(accountDropdownData) {
    return this.props.spendingData ?
      this.props.spendingData.filter((x) => x.accountId===accountDropdownData[this.state.activeAccount].id) : [];
  }


  setShowDetails(value, item, group) {
    this.setState({showDetails: value, selectedTransaction: item, selectedTransactionGroup:group});    
  }

  setAmountFilterType(value){
this.setState({AmountFilterType: value});
  }
  setAmountFilterValue(value){
    this.setState({amountFilterValue: value});
  }
  onTrigger = (index) => {
    if (this.props.activeCheckboxCurrent) {
      return  this.setState({activeCheckboxCurrent: true});
    }
    else {
      this.setState({activeCheckbox: true});
    }
    const items = 'itemCheck';
    switch(items) {
      case 'itemCheck':
        this.setState({activeCheckbox: true});
        break;
        case 'activeCheckboxCurrent':
        this.setState({activeCheckboxCurrent: true});
        break;
    }
    this.setState({activeAccount: index});
    this.setState({activeCheckbox: true});
    this.setState({activeCheckboxCurrent: true});
    this.setState({activeCheckboxSaving: true});

  }

  render() {
    var categorydata = this.props.categoriesData
    var accountDropdownData = this.props.accountsData ?
      this.props.accountsData.filter((acc) => acc.accountCategory!=="Wallet") : [];
    var transactionData = this.getTransactionData(accountDropdownData);
    var months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var groups = transactionData.reduce((r, o) => {
      var m = o.date.split(("-"))[1];
      (r[m])? r[m].data.push(o) : r[m] = {group: months[parseInt(m)], data: [o]};
      return r;
    }, {});
    var groupedTransactions = Object.keys(groups).sort().reverse().map((k) => {return groups[k]; });
    return (
      <div>
        {this.state.showDetails===false ? (
        <div>
          {this.props.token !== null &&
          this.props.accountsData &&
          this.props.categoriesData &&
          this.props.spendingData &&
          this.props.merchantData &&
          this.props.planningData ? (
            <div>
              <div id="billingDiv" className="toggleBilling">
                <h2 className="mb-4">Transactions</h2>
              <div className='account-top-bar'>
              <AccountDropdown changeAccount={this.onTrigger.bind(this)} accountsData={accountDropdownData} activeAccount={this.state.activeAccount}></AccountDropdown>
              </div>
              <div className='bill-table-form-wrap'>
                <div className='bill-tableFrom-left'>
              <BillingTable  changetransactionDetails={this.setAmountFilterType.bind(this)} amountFilterValue = {this.setAmountFilterValue.bind(this)} AmountFilterType={this.state.AmountFilterType} changeShowDetails={this.setShowDetails.bind(this)} transactionData={groupedTransactions} categorydata = {categorydata}></BillingTable>
              </div>
              <div className='bill-tableFrom-right'>
              <BillingFilter changetransactionDetails={this.setAmountFilterType.bind(this)} amountFilterValue = {this.setAmountFilterValue.bind(this)}  activeAccount={this.state.activeAccount}></BillingFilter>
              </div>
              </div> 
              </div>
            </div>
          ) : (
            <SpinningCircles />
          )}
        </div>
        ) : (
        <TransactionDetail 
          changeShowDetails={this.setShowDetails.bind(this)} 
          showDetails={this.state.showDetails} 
          selectedTransaction={this.state.selectedTransaction} 
          selectedTransactionGroup={this.state.selectedTransactionGroup} 
          categorydata = {categorydata} 
          spendingData = {this.state.spendingData}
        ></TransactionDetail>
        )}
      </div>
    );
  }
}





//
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
    setSettings: (token) => dispatch(setSettingsData(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
