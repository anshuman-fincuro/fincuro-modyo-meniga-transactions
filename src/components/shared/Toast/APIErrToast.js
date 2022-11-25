import React, {useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "./Toast.css";

import 'react-toastify/dist/ReactToastify.css';

const APIErrToast = (props) => {

  useEffect(() => {
    toast.error(props.errmsg, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        });
  });
  return (
    <div className='custom-toast-wrapper'>
      <ToastContainer />
    </div>
  );
}
export default APIErrToast;