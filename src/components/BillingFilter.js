
import React, { Component } from "react";
import "./../style/Base.css";
import "./../App.css";
import Form from "react-bootstrap/Form";
import Icon from "@mdi/react";
import { mdiCardsPlayingSpade, mdiMagnify } from "@mdi/js";
import BillingTable from "./BillingTable";
import CategoriesDropdown from "./shared/CategoriesDropdown/CategoriesDropdown";
import AccountListing from "./shared/AccountsListing/AccountListing";
import DateDropdown from "./DateDropdown";
import { connect } from "react-redux";
import { setSpendingData } from "../store/actions/component-action";
import { debounce } from "lodash";
import SearchTextFilter from "./shared/SearchTextFilter/SearchTextFilter";

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
    if (prevProps.activeAccount !== this.props.activeAccount)
      this.setState({ activeAccount: this.props.activeAccount }, () => {
        this.props.setSpendingData(this.props.token, this.state);
      });
  }

  filterbyAmount(value) {
    this.setState({ amountType: value }, () => {
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
    this.setState({ searchText: data }, () => {
      this.props.setSpendingData(this.props.token, this.state);
    });
  }

  debounceChange = debounce(() => {
    this.props.setSpendingData(this.props.token, this.state);
  }, 1000);

  uncertainHandleChange(event) {
    const flag = event.target.value == "on" ? true : false;
    this.setState({ onlyUncertain: flag }, () => {
      this.props.setSpendingData(this.props.token, this.state);
    });
  }

  categoryChange(cats) {
    this.setState({ categoryIds: cats.join(",") }, () => {
      this.props.setSpendingData(this.props.token, this.state);
    });
  }

  render() {
    return (
      <div className="billingFilter-wrapper">
        <Form className="billing-form-wrap">
          <div className="form-row">
            <SearchTextFilter onSearchChange={(event)=> this.onTextChange(event)} />
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <CategoriesDropdown
                placeholder="Select categories"
                onChange={(value) => this.categoryChange(value)}
              ></CategoriesDropdown>
              <div className="checkboxLabel-wrap">
                <Form.Check
                  aria-label="option 1"
                  onChange={this.uncertainHandleChange.bind(this)}
                />
                <span className="checkbox-text">
                  Only uncertain categorization
                </span>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputEmail4">Amount</label>
              {/* <Form.Select
                aria-label="Default select"
                onChange={(e) => {
                  this.filterbyAmount(e.target.value);
                  <BillingTable
                    amountFilterValue={e.target.value}
                  ></BillingTable>;
                }}
              > */}

                <Form.Select
                aria-label="Default select"
                onChange={(e) => this.filterbyAmount(e.target.value)}
              >
                <option value=''>Select type</option>
                <option value="0">Expenses</option>
                <option value="1">Income</option>
              </Form.Select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 col-sm-12">
              <Form.Control type="text" placeholder="From" />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <Form.Control type="text" placeholder="To" />
            </div>
          </div>
          <div className="form-row">
            <DateDropdown
              onChange={(date) => this.dateOnChange(date)}
            ></DateDropdown>
          </div>
          <div className="form-row">
              <AccountListing activeAccount={this.props.activeAccount} />
          </div>
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
