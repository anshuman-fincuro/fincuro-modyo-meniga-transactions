import React from "react";
import "./../../../style/Base.css";

function AccountListing({ activeAccount }) {
  const accounts = ["Credit", "Current", "Savings"];
  return (
    <>
      <div className="form-group col-md-6">
        <label htmlFor="inputEmail4">Account</label>
        {accounts.map((account,index) => (
          <div className="checkboxLabel-wrap" key={index}>
            <span className="arrow-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill={"#706e6e"}
                  d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                />
              </svg>
            </span>

            <input
              type="checkbox"
              id="mycheck"
              checked={activeAccount === index ? "active" : ""}
              readOnly
            ></input>
            <span className="checkbox-text ">{account}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default AccountListing;
