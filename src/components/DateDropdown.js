import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { getdateRanges, getFromToDate } from "../utils";
import DateInput from "./shared/DateInput/DateInput";
import * as moment from "moment";
import { mdiCalendarMonth, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import Button from 'react-bootstrap/Button';
import "./../style/Base.css";

class DateDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateDropDown: [],
      showDateRange: false,
      period: null,
      periodFrom: null,
      periodTo: null,
    };
  }

  onDateRangeChange(event) {
    if (event.target.value) {
      if (event.target.value === "custom") {
        this.setState(
          {
            showDateRange: true,
            period: event.target.value,
          }
        );
      } else {
        const { startDate, endDate } = getFromToDate(event.target.value);
        this.setState(
          {
            showDateRange: false,
            period: event.target.value,
            periodFrom: startDate,
            periodTo: endDate,
          },
          () => {
            const data = {
              period: this.state.period,
              periodFrom: this.state.periodFrom,
              periodTo: this.state.periodTo,
            };
            this.props.onChange(data);
          }
        );
      }
    }else{
      this.props.onChange(null);
    }

  }

  onFromDateChange(date) {

      this.setState(
        {
          periodFrom: date,
        },
        () => {
          const data = {
            period: this.state.period,
            periodFrom: this.state.periodFrom,
            periodTo: this.state.periodTo
          };
          this.props.onChange(data);
        }
      );

    
  }

  onToDateChange(date) {

      this.setState(
        {
          periodTo: date,
        },
        () => {
          const data = {
            period: this.state.period,
            periodFrom: this.state.periodFrom,
            periodTo: this.state.periodTo
          };
          this.props.onChange(data);
        }
      );
 
  }

  render() {
    const { dateDropDown, showDateRange } = this.state;
    return (
      <div>
        <div className="form-group col-md-12 filterWrapper">
          <label htmlFor="inputEmail4">Date</label>
          <Form.Select
            aria-label="Default select example"
            onChange={this.onDateRangeChange.bind(this)}
          >
            <option value="">Select period</option>
            <option value="0">This month</option>
            <option value="1">Last month</option>
            <option value="3">Last 3 months</option>
            <option value="6">Last 6 months</option>
            <option value="12">Last 12 months</option>
            <option value="thisYear">This year</option>
            <option value="lastYear">Last year</option>
            <option value="custom">Custom</option>
          </Form.Select>
        </div>
        {showDateRange && (
          <>
            <div className="form-group col-md-6 col-sm-12">
              <DateInput
                placeholder="From"
                onDateChange={(date) => this.onFromDateChange(date)}
              ></DateInput>
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <DateInput
                placeholder="To"
                onDateChange={(date) => this.onToDateChange(date)}
              ></DateInput>
            </div>
          </>
        )}
       
      </div>
    );
  }
}

export default DateDropdown;
