import React from "react";
import DatePicker from "react-datepicker";
import Icon from "@mdi/react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { mdiCalendarMonth } from "@mdi/js";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from "moment";
import "../../../style/Base.css";
import "./DateInput.css";

const CustomInput = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder={props.placeholder}
          readOnly
          value={props.value}
          onClick={props.onClick}
        />
        <div className="calender_icon">
          {!props.value && <Icon path={mdiCalendarMonth} size={1.25} onClick={props.onClick} />  }
        </div>
      </InputGroup>
    </div>
  );
});

function DateInput(props) {
  const [date, setDate] = React.useState(null);
  const inputRef = React.useRef(null);

  React.useEffect(()=>{
      const formatedDate = moment(date).isValid() ? moment(date).format("YYYY-MM-DD") : '';
      props.onDateChange(formatedDate);
  },[date]);
  
  return (
      <DatePicker
        wrapperClassName="fincuro_wrapper"
        calendarClassName="fincuro_calender"
        popperClassName="fincuro_popper"
        isClearable
        clearButtonClassName="fincuro_calender_clear"
        placeholderText={props.placeholder}
        selected={date}
        customInput={<CustomInput inputRef={inputRef}/>}
        onChange={(date) => setDate(date)}
      ></DatePicker>
  );
}

export default DateInput;
