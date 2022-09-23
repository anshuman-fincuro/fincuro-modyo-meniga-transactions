import React, { Component } from "react";
import "./../style/Base.css";
import "./../App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

class AccountDropdown extends Component {
  render() {
    return (
      <div className="account-warapper">
        <ul>
          <li className="active">
            <span className="tab-nav-item-link icon-1">
              <div className="accountMenuItem ">
                <div className="amountWithLabel">
                  <span className="amountWithLabel-label">CURRENT</span>
                  <span
                    className="amountWithLabel-amount green-color">
                    <span className="formatCurrency-symbol">£ </span>
                    <span className="formatCurrency-value">459.00</span>
                  </span>
                </div>
            <span className="arrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" >
   <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>
            </span>
              </div>
            </span>
          </li>
          {/*  */}
          <li>
            <span className="tab-nav-item-link">
              <div className="accountMenuItem ">
                <div className="amountWithLabel">
                  <span className="amountWithLabel-label">CREDIT</span>
                  <span
                    className="amountWithLabel-amount brown-color">
                    <span className="formatCurrency-symbol">£ </span>
                    <span className="formatCurrency-value">960.00</span>
                  </span>
                </div>
                <span className="arrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" >
   <path  d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>
            </span>
              </div>
            </span>
          </li>
          {/*  */}
          <li>
            <span className="tab-nav-item-link">
              <div className="accountMenuItem ">
                <div className="amountWithLabel">
                  <span className="amountWithLabel-label">SAVINGS</span>
                  <span
                    className="amountWithLabel-amount purple-color">
                    <span className="formatCurrency-symbol">£ </span>
                    <span className="formatCurrency-value">1,246.00</span>
                  </span>
                </div>
                <span className="arrow-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" >
   <path  d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>
            </span>
              </div>
            </span>
          </li>
        </ul>
      </div>
    );
    // function hideShow() {
    //   var billingSection = document.getElementById("billingDiv");
    //   billingSection.classList.toggle('toggleBilling');  
    // }
  }
 
}

export default AccountDropdown;
