// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "./../style/Base.css";
import "./../App.css";
import Form from "react-bootstrap/Form";
import Icon from "@mdi/react";
import { mdiCardsPlayingSpade, mdiMagnify } from "@mdi/js";
import BillingTable from "./BillingTable";
import CategoriesDropdown from "./CategoriesDropdown";
import DateDropdown from "./DateDropdown";
import { connect } from "react-redux";
import { setSpendingData } from "../store/actions/component-action";

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
      searchText: null,
    };

    this.categoryChange = this.categoryChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log("prevProps", prevProps);
    if (prevProps.activeAccount !== this.props.activeAccount)
      this.setState({ activeAccount: this.props.activeAccount }, () => {
        this.props.setSpendingData(this.props.token, this.state);
      });
  }
  filterbyAmount(value) {
    //this.props.changetransactionDetails(true, value);
    this.setState({ amountType: value }, () => {
      this.props.setSpendingData(this.props.token, this.state);
    });
  }

  dateOnChange(e) {
    console.log(e);
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

  onTextChange(e) {
    if (e.target.value) {
      this.setState({ searchText: e.target.value }, () => {
        this.props.setSpendingData(this.props.token, this.state);
      });
    }
  }

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
            <div className="search-icon-container form-group col-md-12">
              <Form.Control
                type="text"
                className="search-bar"
                placeholder="Search..."
                value={this.state.searchText}
                onChange={this.onTextChange.bind(this)}
              />
              <span className="search-icon">
                <Icon
                  path={mdiMagnify}
                  size={1.5}
                  horizontal
                  vertical
                  rotate={180}
                  color="#dddddd"
                />
              </span>
            </div>
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
                {/* <input type="checkbox" id="mycheck" onClick={myFunction()}></input> */}
                <span className="checkbox-text">
                  Only uncertain categorization
                </span>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputEmail4">Amount</label>
              <Form.Select
                aria-label="Default select"
                onChange={(e) => {
                  this.filterbyAmount(e.target.value);
                  <BillingTable
                    amountFilterValue={e.target.value}
                  ></BillingTable>;
                }}
              >
                <option>Select type</option>
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
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Account</label>
              <div className="checkboxLabel-wrap">
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      fill={"#706e6e"}
                      d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                    />
                  </svg>
                </span>

                <input
                  type="checkbox"
                  id="mycheck"
                  checked={this.props.activeAccount === 0 ? "active" : ""}
                ></input>
                <span className="checkbox-text ">credit</span>
              </div>
              <div className="checkboxLabel-wrap">
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      fill={"#706e6e"}
                      d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                    />
                  </svg>
                </span>

                <input
                  type="checkbox"
                  aria-label="option 10"
                  checked={this.props.activeAccount === 1 ? "active" : ""}
                />
                <span className="checkbox-text">Current</span>
              </div>
              <div className="checkboxLabel-wrap">
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      fill={"#706e6e"}
                      d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                    />
                  </svg>
                </span>
                {/* <Form.Check aria-label="option 1"  /> */}
                <input
                  type="checkbox"
                  aria-label="option 10"
                  checked={this.props.activeAccount === 2 ? "active" : ""}
                />
                <span className="checkbox-text">Savings</span>
              </div>
            </div>
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
