import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import * as moment from "moment";
import { connect } from "react-redux";
import {setSpendingData} from "../store/actions/component-action";
class ChartDateFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateDropDown: [],
      selectValue:{},
    };
    this.handleChange = this.handleChange.bind(this) 
}

handleChange(e){
   this.props.setSpendingData(this.props.token,e.target.value)
  }
  componentDidMount() {
    this.setState({ dateDropDown: this.getdateRange() });
  }
  componentDidUpdate(){
    console.log('spendingData...', this.props.spendingData)
  }
 
  getdateRange() {
    const dates = [
      "Last month",
      "Last 3 months",
      "Last 6 months",
      "Last 12 months",
      "This year",
      "Last year",
    ];
    const ranges = dates.map((item) => {
      let startDate = "";
      let endDate = "";
      if (item === "This month") {
        startDate = moment().startOf("month").format("YYYY-MM-DD");
        endDate = moment().endOf("month").format("YYYY-MM-DD");
      } else if (item === "Last month") {
        startDate = moment()
          .subtract(1, "months")
          .startOf("month")
          .format("YYYY-MM-DD");
        endDate = moment()
          .subtract(1, "months")
          .endOf("month")
          .format("YYYY-MM-DD");
      } else if (item === "Last 3 months") {
        startDate = moment()
          .subtract(3, "months")
          .startOf("month")
          .format("YYYY-MM-DD");
        endDate = moment()
          .subtract(1, "months")
          .endOf("month")
          .format("YYYY-MM-DD");
      } else if (item === "Last 6 months") {
        startDate = moment()
          .subtract(6, "months")
          .startOf("month")
          .format("YYYY-MM-DD");
        endDate = moment()
          .subtract(1, "months")
          .endOf("month")
          .format("YYYY-MM-DD");
      } else if (item === "Last 12 months") {
        startDate = moment()
          .subtract(12, "months")
          .startOf("month")
          .format("YYYY-MM-DD");
        endDate = moment()
          .subtract(1, "months")
          .endOf("month")
          .format("YYYY-MM-DD");
      } else if (item === "This year") {
        startDate = moment().startOf("year").format("YYYY-MM-DD");
        endDate = moment().endOf("month").format("YYYY-MM-DD");
      } else if (item === "Last year") {
        startDate = moment()
          .subtract(1, "year")
          .startOf("year")
          .format("YYYY-MM-DD");
        endDate = moment()
          .subtract(1, "year")
          .endOf("year")
          .format("YYYY-MM-DD");
      } else {
        startDate = null;
        endDate = null;
      }

      let value = startDate && endDate ? `${startDate},${endDate}` : "Custom";

      return { value: value, label: item };
    });
    return ranges;
  }

  render() {
    const ranges = this.state.dateDropDown;
    return (
      <>
        <div className="form-group col-md-12">
          <Form.Select aria-label="Default select example" onChange={(e) => {
                                                        this.handleChange(e)}}>
            <option>Select period</option>
            {ranges &&
              ranges.map((range, i) => (
                <>
                  <option key={i} value={range.value}>
                    {range.label}
                  </option>
                </>
              ))}
          </Form.Select>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
    token: state.authReducer.token,
    spendingData: state.componentReducer.spendingData,
    
  });
const mapDispatchToProps = (dispatch,) => {
    return {
        setSpendingData: (token,value) => dispatch(setSpendingData(token,{chartDateRange:value})),
    };
  };
  export default connect(mapStateToProps,mapDispatchToProps)(ChartDateFilter);
