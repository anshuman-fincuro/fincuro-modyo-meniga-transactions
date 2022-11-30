import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useSelector } from "react-redux";
import "../../../style/Base.css";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const AmountFilterDropdown = ({typeChange, amountFromChange, amountToChange}) =>{

    const { token } = useSelector((store) => store.authReducer);
    const [categories, setCategories]  = useState([]);

    const getCategories = () => {
        axios
          .get(
            `${API_URL}/categories/types?token=Bearer ${token}`
          )
          .then((response) => {
            if (response.status === 200 && response.data) {
                setCategories(response.data.data);
            } else {
                setCategories([]);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

    useEffect(()=>{
        getCategories();
    },[]);

    return (
        <>
        <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputEmail4">Amount</label>
              
                <Form.Select
                aria-label="Default select"
                onChange={(e) => typeChange(e.target.value)}
              >
                <option value=''>Select type</option>
                <option value="Expenses">Expenses</option>
                <option value="Income">Income</option>
              </Form.Select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 col-sm-12">
              <Form.Control type="text" placeholder="From" name="amountFrom" onBlur={(e) => e.target.value && amountFromChange(e.target.value)} />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <Form.Control type="text" placeholder="To" name="amountTo" onBlur={(e) => e.target.value && amountToChange(e.target.value)} />
            </div>
          </div>
        </>
    )
}
export default AmountFilterDropdown;