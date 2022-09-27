import React, { Component } from "react";
import Icon from "@mdi/react";
import "./../style/Base.css";
import "./../App.css";
import { mdiCarTireAlert } from "@mdi/js";


class TransactionDetail extends Component {
  render() {
    const data = [
        {									
            color: "steelblue", 
            points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
        }
    ];
    return (
      <>
        <div className="transactionDetail-wrapper">
          <div className="overlay-content">
            <div className="receipt--info">
              <div className="receipt-date">
                <span
                  data-format="YYYY"
                  className="formattedDate receipt-date-year"
                >
                  2022
                </span>
                <span
                  data-format="DD"
                  className="formattedDate receipt-date-day"
                >
                  25
                </span>
                <span
                  data-format="MMM"
                  className="formattedDate receipt-date-month"
                >
                  Sep
                </span>
              </div>
              <div className="receipt-content">
                <div className="transactionReceipt-text">
                  <h1 className="transactionReceipt-heading">
                    Transport for London
                  </h1>
                  <div className="transactionReceipt-category">
                    <div className="transactionCategoryContainer">
                      <div className="CategoryTreeContainer ">
                        <div className="Select Select--primaryAction Select--light Select--floating is-filtered">
                          <div className="Select-wrapper">
                            <div
                              className="SelectPlaceholder SelectPlaceholder--primaryAction SelectPlaceholder--light SelectPlaceholder--floating Select-placeholder"
                              tabindex="0"
                              title="Public Transportation"
                            >
                              <span className="SelectPlaceholder-text">
                                <div className="SelectOptionPlaceholder">
                                  <span className="SelectOptionPlaceholder-icon">
                                    <Icon
                                      path={mdiCarTireAlert}
                                      size={1}
                                      horizontal
                                      vertical
                                      rotate={180}
                                      color="#000"
                                    />
                                  </span>
                                  <span className="billingTable-right-dropdown transaction-detail-dropdown">
                                    <select>
                                      <option value="fruit">
                                        Public Transportation
                                      </option>
                                      <option value="vegetable">
                                        Last year
                                      </option>
                                      <option value="meat">Last 1 year</option>
                                      <option value="vegetable">
                                        Last 3 year
                                      </option>
                                      <option value="meat">Last 6 year</option>
                                    </select>
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="TransactionReceipt-ok"></div>
                  </div>
                </div>
                <div className="transactionReceipt-amountAndAccount">
                  <span className="transactionReceipt-account">
                    My Creditcard
                  </span>
                  <span className="transactionReceipt-amount">
                    <span className="formatCurrency-symbol">£ </span>
                    <span className="formatCurrency-value">-10.00</span>
                  </span>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transactionActionList">
              <div className="transactionActionList-list">
                <div className="transactionActionList-item">
                  <button className="transactionActionList-btn" type="button">
                    <span className="Button-label">
                      <Icon
                        path={mdiCarTireAlert}
                        size={1.5}
                        horizontal
                        vertical
                        rotate={180}
                        color="#fff"
                      />
                      Change category
                    </span>
                  </button>
                </div>
                <div className="transactionActionList-item">
                  <button className="transactionActionList-btn" type="button">
                    <span className="Button-label">
                      <Icon
                        path={mdiCarTireAlert}
                        size={1.5}
                        horizontal
                        vertical
                        rotate={180}
                        color="#fff"
                      />
                      Change date
                    </span>
                  </button>
                </div>
                <div className="transactionActionList-item">
                  <button className="transactionActionList-btn" type="button">
                    <span className="Button-label">
                      <Icon
                        path={mdiCarTireAlert}
                        size={1.5}
                        horizontal
                        vertical
                        rotate={180}
                        color="#fff"
                      />
                      Split
                    </span>
                  </button>
                </div>
                <div className="transactionActionList-item">
                  <button className="transactionActionList-btn" type="button">
                    <span className="Button-label">
                      <Icon
                        path={mdiCarTireAlert}
                        size={1.5}
                        horizontal
                        vertical
                        rotate={180}
                        color="#fff"
                      />
                      Rule
                    </span>
                  </button>
                </div>
                <div className="transactionActionList-item">
                  <button className="transactionActionList-btn" type="button">
                    <span className="Button-label">
                      <Icon
                        path={mdiCarTireAlert}
                        size={1.5}
                        horizontal
                        vertical
                        rotate={180}
                        color="#fff"
                      />
                      Add comment
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="transactionOverviewCarbon">
          <div className="content-left">
            <h2 className="heading ">Carbon Footprint</h2>
            <span className="estimated-text ">
              Estimated carbon footprint of transaction
            </span>
          </div>
          <div className="content-right">
            <span className="formattedNumber">99</span>
            <span className="estimated-text ">kg CO2e</span>
          </div>
        </div>
        {/*  */}
        <div className="transactionOverviewChart-graph-wrapper">
        <h2 class="heading">Total expenses this year</h2>
         <div className="transactionOverviewChart-list">
          <div className="transactionOverviewChart-list-item">
            <div className="transactionOverviewChart-text">
            Transport for London
            </div>
            <div className="transactionOverviewChart-amount">
            £ -180.00
            </div>
          </div>
          
         

         
          <div className="transactionOverviewChart-list-item border-color-blue">
            <div className="transactionOverviewChart-text">
            Carbon footprint
            </div>
            <div className="transactionOverviewChart-amount">
            £ 0.00
            </div>
          </div>
        
         
          <div className="transactionOverviewChart-list-item border-color-purpel">
            <div className="transactionOverviewChart-text">
            Transport for London
            </div>
            <div className="transactionOverviewChart-amount">
            £ -180.00
            </div>
         </div>
        </div>
        </div>

        
      </>
    
    );
  }
}

export default TransactionDetail;
