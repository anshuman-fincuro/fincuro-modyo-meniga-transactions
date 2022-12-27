import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useSelector } from "react-redux";
import "../../../style/Base.css";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const AmountFilterDropdown = ({
  typeChange,
  amountFromChange,
  amountToChange,
  accountActiveId
}) => {
  const { token } = useSelector((store) => store.authReducer);
  const [categoryTypes, setCategoryTypes] = useState([]);
  const [fromVal, setFromVal] = useState('');
  const [toVal, setToVal] = useState('');

  const getCategoryTypes = () => {
    axios
      .get(`${API_URL}/categories/types?token=Bearer ${token}`)
      .then((response) => {
        if (response.status === 200 && response.data) {
          setCategoryTypes(response.data.data);
        } else {
          setCategoryTypes([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategoryTypes();
  }, []);
  useEffect(() => {
    setCategoryTypes([]);
    setFromVal('');
    setToVal('');
    getCategoryTypes();
  }, [accountActiveId]);

  const filteredCategoryTypes = React.useMemo(() => {
      return categoryTypes.filter((item) => (item.name === 'Expenses' || item.name === 'Income'));
  }, [categoryTypes]);

  return (
    <>
      <div className="form-row">
        <div className="form-group col-md-12">
          <label htmlFor="inputEmail4">Amount</label>

          <Form.Select
            aria-label="Amount Type"
            onChange={(e) => typeChange(e.target.value)}
          >
            <option value="">Select type</option>
            {filteredCategoryTypes && filteredCategoryTypes.length > 0 &&
              filteredCategoryTypes.map((type, index) => (
                <option key={index} value={type.name}>{type.name}</option>
              ))}
          </Form.Select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6 col-sm-12">
          <Form.Control
            type="text"
            placeholder="From"
            name="amountFrom"
            value={fromVal}
            onChange={(e) => e.target.value && setFromVal(e.target.value)}
            onBlur={(e) => e.target.value && amountFromChange(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6 col-sm-12">
          <Form.Control
            type="text"
            placeholder="To"
            name="amountTo"
            value={toVal}
            onChange={(e) => e.target.value && setToVal(e.target.value)}
            onBlur={(e) => e.target.value && amountToChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};
export default AmountFilterDropdown;
