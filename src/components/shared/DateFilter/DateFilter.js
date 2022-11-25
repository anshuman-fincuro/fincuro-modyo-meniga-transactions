import React from "react";
import "./../../../style/Base.css";
import Form from "react-bootstrap/Form";
import { getFromToDate } from "../../../utils";
import DateInput from "../DateInput/DateInput";

function DateFilter({ onChange }) {
  const [showDateRange, setShowDateRange] = React.useState(false);
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setTodate] = React.useState(null);

  const periodChange = (value) => {
    if (value !== "custom") {
      setShowDateRange(false);
      if(value == null){
        onChange({ periodFrom: null, periodTo: null });
      }else{
        const { startDate, endDate } = getFromToDate(value);
        onChange({ periodFrom: startDate, periodTo: endDate });
      }
    } else {
      setShowDateRange(true);
    }
  };

  React.useEffect(()=>{
    if(fromDate && toDate){
        onChange({ periodFrom: fromDate, periodTo: toDate });
    }
  }, [fromDate, toDate]);

  return (
    <div>
      <div className="form-group col-md-12 filterWrapper">
        <label htmlFor="inputEmail4">Date</label>
        <Form.Select
          aria-label="Default select example"
          onChange={(event) => periodChange(event.target.value)}
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
              onDateChange={(date) => setFromDate(date)}
            ></DateInput>
          </div>
          <div className="form-group col-md-6 col-sm-12">
            <DateInput
              placeholder="To"
              onDateChange={(date) => setTodate(date)}
            ></DateInput>
          </div>
        </>
      )}
    </div>
  );
}
export default DateFilter;
