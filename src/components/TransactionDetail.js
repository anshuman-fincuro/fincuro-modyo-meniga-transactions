import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "@mdi/react";
import "./../style/Base.css";
import "./../App.css";
import { mdiCarTireAlert, mdiArrowLeft } from "@mdi/js";
import LineCharts from "./LineCharts";


class TransactionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: this.props.showDetails
    };
  }

  render() {
    const data = [
        {									
            color: "steelblue", 
            points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
        }
    ];
    return (
      <div>
        { this.state.showDetails===true ? (
        <div>
          <Icon path={mdiArrowLeft}
            onClick={()=>this.props.changeShowDetails(false)}
            size={2}
            color="#1c242c"/>
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
                                tabIndex="0"
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
          <h2 className="heading">Total expenses this year</h2>
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
          <div className="linechart-wrapper">
            <h2 className="heading">Total expenses this period</h2>
            <div className="TransactionOverviewChart-dropdown">
                        <select>
                            <option value="fruit">Last 6 months</option>
                            <option value="vegetable">Last year</option>
                            <option value="meat">Last 1 year</option>
                            <option value="vegetable">Last 3 year</option>
                            <option value="meat">Last 6 year</option>
                        </select>
                    </div>
            <div className="TransactionOverviewChart-tabs-wrapper">
              <div>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Home
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Profile
                    </a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <LineCharts spendingData={this.props.spendingData} />
                    <table className="TransactionChartTable">
                      <thead>
                        <tr>
                          <th className="TransactionChartTable-icon"></th>
                          <th className="TransactionChartTable-name"></th>
                          <th className="TransactionChartTable-text">
                            Current month
                          </th>
                          <th className="TransactionChartTable-text">
                            Average
                          </th>
                          <th className="TransactionChartTable-text">
                            Total
                          </th>
                          <th className="TransactionChartTable-row-action"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="TransactionChartTable-row ">
                          <td
                            title="[object Object]"
                            className="TransactionChartTable-icon"
                          >
                            <div
                              className="GraphColorBox TransactionChartTable-row-colorBox"
                              
                            ></div>
                          </td>
                          <td className="TransactionChartTable-name">
                            <span className="TransactionChartTable-row-text">
                              Public Transportation
                            </span>
                          </td>
                          <td className="TransactionChartTable-text">
                            <span
                              className="FormatCurrency"
                              
                            >
                              <span className="FormatCurrency-symbol">£ </span>
                              <span className="FormatCurrency-value">
                                -30.00
                              </span>
                            </span>
                          </td>
                          <td className="TransactionChartTable-text">
                            <span
                              className="FormatCurrency"
                              
                            >
                              <span className="FormatCurrency-symbol">£ </span>
                              <span className="FormatCurrency-value">
                                -25.67
                              </span>
                            </span>
                          </td>
                          <td className="TransactionChartTable-text">
                            <span
                              className="FormatCurrency"
                              
                            >
                              <span className="FormatCurrency-symbol">£ </span>
                              <span className="FormatCurrency-value">
                                -184.00
                              </span>
                            </span>
                          </td>
                          <td className="TransactionChartTable-row-action">
                            <i className="Icon Icon--normal Icon--xs Icon--line Icon--right"></i>
                          </td>
                        </tr>
                        <tr className="TransactionChartTable-row ">
                          <td
                            title="[object Object]"
                            className="TransactionChartTable-icon"
                          >
                            <div
                              className="GraphColorBox TransactionChartTable-row-colorBox"
                              
                            ></div>
                          </td>
                          <td className="TransactionChartTable-name">
                            <span className="TransactionChartTable-row-text">
                              Transport for London
                            </span>
                          </td>
                          <td className="TransactionChartTable-text">
                            <span
                              className="FormatCurrency"
                              
                            >
                              <span className="FormatCurrency-symbol">£ </span>
                              <span className="FormatCurrency-value">
                                -30.00
                              </span>
                            </span>
                          </td>
                          <td className="TransactionChartTable-text">
                            <span
                              className="FormatCurrency"
                          
                            >
                              <span className="FormatCurrency-symbol">£ </span>
                              <span className="FormatCurrency-value">
                                -15.00
                              </span>
                            </span>
                          </td>
                          <td className="TransactionChartTable-text">
                            <span
                              className="FormatCurrency"
                              
                            >
                              <span className="FormatCurrency-symbol">£ </span>
                              <span className="FormatCurrency-value">
                                -120.00
                              </span>
                            </span>
                          </td>
                          <td className="TransactionChartTable-row-action">
                            <i className="Icon Icon--normal Icon--xs Icon--line Icon--right"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ) : (
          <div/>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  accountsData: state.componentReducer.accountsData,
  planningData: state.componentReducer.planningData,
  merchantData: state.componentReducer.merchantData,
  categoriesData: state.componentReducer.categoriesData,
  spendingData: state.componentReducer.spendingData,
});

export default connect(mapStateToProps)(TransactionDetail);