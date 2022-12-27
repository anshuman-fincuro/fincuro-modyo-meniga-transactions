
import React, { Component } from "react";
import "./../style/Base.css";
import "./../App.css";
import Form from "react-bootstrap/Form";
import CategoriesDropdown from "./shared/CategoriesDropdown/CategoriesDropdown";
import AccountListing from "./shared/AccountsListing/AccountListing";
import { connect } from "react-redux";
import { setSpendingData } from "../store/actions/component-action";
import { debounce } from "lodash";
import SearchTextFilter from "./shared/SearchTextFilter/SearchTextFilter";
import DateFilter from "./shared/DateFilter/DateFilter";
import AmountFilterDropdown from "./shared/AmountFilterDropdown/AmountFilterDropdown";

class BillingFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataChange: false,
      activeAccount: this.props.activeAccount,
      activeCheckbox: this.props.activeCheckbox,
      activeCheckboxSaving: this.props.activeCheckboxSaving,
      activeCheckboxCurrent: this.props.activeCheckboxCurrent,
      amountFilterValue: this.props.amountFilterValue,
      period: null,
      periodFrom: null,
      periodTo: null,
      amountType: null,
      amountFrom: null,
      amountTo: null,
      onlyUncertain: false,
      categoryIds: null,
      searchText: '',
    };

    this.categoryChange = this.categoryChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.accountActiveId !== this.props.accountActiveId){
        this.setState({ searchText: '' });
        this.setState({ onlyUncertain: false})
      }
  }

  filterbyAmount(value) {
    this.setState({ amountType: value, accountIds : this.props.accountActiveId }, () => {
      this.props.setSpendingData(this.props.token, this.state);
    });
  }

  filterbyAmountFrom(value) {
    this.setState({ amountFrom: value, accountIds : this.props.accountActiveId }, () => {
      this.props.setSpendingData(this.props.token, this.state);
    });
  }

  filterbyAmountTo(value) {
    this.setState({ amountTo: value , accountIds : this.props.accountActiveId}, () => {
      this.props.setSpendingData(this.props.token, this.state);
    });
  }

  dateOnChange(e) {
    let dateFilter = {};
    if (e) {
      dateFilter = { dateFilter: e };
      this.setState({ ...e }, () => {
        this.props.setSpendingData(this.props.token, this.state);
      });
    } else {
      this.setState({ period: null, periodFrom: null, amountTo: null }, () => {
        this.props.setSpendingData(this.props.token, this.state);
      });
    }
  }

  onTextChange(data) {
    if(this.props.accountActiveId !== undefined && data === null) {
      this.props.setSpendingData(this.props.token, { accountIds : this.props.accountActiveId});
    }
    else {      
      this.setState({ searchText: data , accountIds : this.props.accountActiveId}, () => {
      this.props.setSpendingData(this.props.token, this.state);
    });
    }
  }

  debounceChange = debounce(() => {
    this.props.setSpendingData(this.props.token, this.state);
  }, 1000);

  uncertainHandleChange(event) {
    const flag = event.target.value == "on" ? true : false;
    this.setState({ onlyUncertain: !this.state.onlyUncertain, accountIds : this.props.accountActiveId }, () => {
      this.props.setSpendingData(this.props.token, this.state);
    });
  }

  categoryChange(cats) {
    this.setState({ categoryIds: cats.join(","), accountIds : this.props.accountActiveId }, () => {
      this.props.setSpendingData(this.props.token, this.state);
    });
  }

  render() {
    return (
      <div className="billingFilter-wrapper">
        <Form className="billing-form-wrap">
          <div className="form-row">
            <SearchTextFilter accountActiveId={this.props.accountActiveId} onSearchChange={(event)=> this.onTextChange(event)} />
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <CategoriesDropdown
                accountActiveId={this.props.accountActiveId}
                placeholder="Select categories"
                onChange={(value) => this.categoryChange(value)}
              ></CategoriesDropdown>
              <div className="checkboxLabel-wrap">
                <Form.Check
                  aria-label="option 1"
                  onChange={this.uncertainHandleChange.bind(this)}
                  checked={this.state.onlyUncertain}
                />
                <span className="checkbox-text">
                  Only uncertain categorization
                </span>
              </div>
            </div>
          </div>

          <AmountFilterDropdown
            accountActiveId={this.props.accountActiveId} 
            typeChange={(val) => this.filterbyAmount(val)}
            amountFromChange = {(val) => this.filterbyAmountFrom(val)}
            amountToChange = {(val) => this.filterbyAmountTo(val)}
          ></AmountFilterDropdown>


          <div className="form-row">
            <DateFilter accountActiveId={this.props.accountActiveId} onChange={(date) => this.dateOnChange(date)}></DateFilter>
          </div>
          {/* <div className="form-row">
              <AccountListing activeAccount={this.props.activeAccount} />
          </div> */}
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
});
const mapDispatchToProps = (dispatch) => {
  return {
    setSpendingData: (token, value) => dispatch(setSpendingData(token, value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BillingFilter);
