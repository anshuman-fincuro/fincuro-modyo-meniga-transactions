import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import * as moment from "moment";

class DateDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateDropDown: [],
    };
  }

  componentDidMount() {
    this.setState({ dateDropDown: this.getdateRange() });
  }

  getdateRange() {
    const dates = [
      "This month",
      "Last month",
      "Last 3 months",
      "Last 6 months",
      "Last 12 months",
      "This year",
      "Last year",
      "Custom",
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
        <label htmlFor="inputEmail4">Date</label>
        <Form.Select aria-label="Default select example">
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
      </>
    );
  }
}

export default DateDropdown;
