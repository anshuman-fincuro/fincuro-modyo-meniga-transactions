import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { mdiCalendarMonth } from "@mdi/js";
import Icon from "@mdi/react";

const CustomInput = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <div ref={ref}>
      <InputGroup>
        <Form.Control type="text" placeholder={props.placeholder} readOnly />
        <Icon path={mdiCalendarMonth} size={1.25} onClick={props.onClick} />
      </InputGroup>
    </div>
  );
});

class DateDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateDropDown: [],
      showDateRange: false,
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


  dateChange(event){
    if(event.target.value === 'Custom'){
      this.setState({ showDateRange: true });
    }else{
      this.setState({ showDateRange: false });
    }
  }

  render() {
    const { dateDropDown, showDateRange } = this.state;
    return (
      <>
        <div className="form-group col-md-12">
          <label htmlFor="inputEmail4">Date</label>
          <Form.Select aria-label="Default select example" onChange={this.dateChange.bind(this)}>
            <option>Select period</option>
            {dateDropDown &&
              dateDropDown.map((range, i) => (
                
                  <option key={i} value={range.value}>
                    {range.label}
                  </option>
                
              ))}
          </Form.Select>
        </div>
        {showDateRange && (
          <>
            <div className="form-group col-md-6 col-sm-12">
              {/* <Form.Control type="text" placeholder="From" /> */}
              <DatePicker placeholderText="From" customInput={<CustomInput />} />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              {/* <Form.Control type="text" placeholder="To" /> */}
              <DatePicker customInput={<CustomInput />} placeholderText="To" />
            </div>
          </>
        )}
      </>
    );
  }
}

export default DateDropdown;
