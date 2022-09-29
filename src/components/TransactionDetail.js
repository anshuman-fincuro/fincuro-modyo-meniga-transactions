import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "@mdi/react";
import "./../style/Base.css";
import "./../App.css";
import { mdiCarTireAlert, mdiArrowLeft, mdiBank, mdiCalendarMonthOutline, mdiUnfoldMoreVertical, mdiCogOutline, mdiChat  } from "@mdi/js";
import LineCharts from "./LineCharts";

class TransactionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: this.props.showDetails,
    };
  }

  render() {
    const data = [
      {
        color: "steelblue",
        points: [
          { x: 1, y: 2 },
          { x: 3, y: 5 },
          { x: 7, y: -3 },
        ],
      },
    ];
    return (
      <div>
        {this.state.showDetails === true ? (
          <div className="transactionDetail-container">
            <div className="icon-header">
              {" "}
              <Icon
                path={mdiArrowLeft}
                onClick={() => this.props.changeShowDetails(false)}
                size={2}
                color="#fff"
              />
            </div>

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
                                          path={mdiBank}
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
                                          Bank Fees
                                          </option>
                                          <option value="vegetable">
                                            Last year
                                          </option>
                                          <option value="meat">
                                            Last 1 year
                                          </option>
                                          <option value="vegetable">
                                            Last 3 year
                                          </option>
                                          <option value="meat">
                                            Last 6 year
                                          </option>
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
                      <button
                        className="transactionActionList-btn"
                        type="button"
                      >
                        <span className="Button-label">
                          <Icon
                            path={mdiBank}
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
                      <button
                        className="transactionActionList-btn"
                        type="button"
                      >
                        <span className="Button-label">
                          <Icon
                            path={mdiCalendarMonthOutline}
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
                      <button
                        className="transactionActionList-btn"
                        type="button"
                      >
                        <span className="Button-label">
                          <Icon
                            path={mdiUnfoldMoreVertical}
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
                      <button
                        className="transactionActionList-btn"
                        type="button"
                      >
                        <span className="Button-label">
                          <Icon
                            path={mdiCogOutline }
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
                      <button
                        className="transactionActionList-btn"
                        type="button"
                      >
                        <span className="Button-label">
                          <Icon
                            path={mdiChat }
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
                  <div className="transactionOverviewChart-amount">£ 0.00</div>
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
                      {/* <LineCharts spendingData={this.props.spendingData} /> */}

                      {/* menega line chart */}
                      <div className="Graph AreaGraph TransactionChart-wrapper">
                        <div className="Graph-tooltip">
                          <div className="GraphTooltip GraphTooltip--top">
                            <div className="GraphTooltip-caret"></div>
                            <div className="GraphTooltip-table">
                              <div className="GraphTooltipTable GraphTooltipTable--tooltip">
                                <header className="GraphTooltipTable-header">
                                  May 2022
                                </header>
                                <div className="GraphTooltipTable-row">
                                  <div className="GraphTooltipTable-inner-row">
                                    <div className="GraphTooltipTable-col GraphTooltipTable-col--box">
                                      <div className="GraphColorBox GraphTooltipTable-box"></div>
                                    </div>
                                    <div className="GraphTooltipTable-col GraphTooltipTable-col--text">
                                      <div className="GraphTooltipTable-content">
                                        <span className="Text Text--25">
                                          Fast Food Restaurants
                                        </span>
                                      </div>
                                    </div>
                                    <div className="GraphTooltipTable-col GraphTooltipTable-col--amount">
                                      <div className="GraphTooltipTable-content">
                                        <span className="FormatCurrency">
                                          <span className="FormatCurrency-symbol">
                                            £
                                          </span>
                                          <span className="FormatCurrency-value">
                                            -63.00
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="GraphTooltipTable-row">
                                  <div className="GraphTooltipTable-inner-row">
                                    <div className="GraphTooltipTable-col GraphTooltipTable-col--box">
                                      <div className="GraphColorBox GraphTooltipTable-box"></div>
                                    </div>
                                    <div className="GraphTooltipTable-col GraphTooltipTable-col--text">
                                      <div className="GraphTooltipTable-content">
                                        <span className="Text Text--25">
                                          Burger King
                                        </span>
                                      </div>
                                    </div>
                                    <div className="GraphTooltipTable-col GraphTooltipTable-col--amount">
                                      <div className="GraphTooltipTable-content">
                                        <span className="FormatCurrency">
                                          <span className="FormatCurrency-symbol">
                                            £
                                          </span>
                                          <span className="FormatCurrency-value">
                                            -23.00
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Graph-container">
                          <svg
                            width="100%"
                            viewBox="0 0 913 200"
                            height="200"
                            className="Graph-containerSvg"
                          >
                            <g
                              transform="translate(0,0)"
                              width="913"
                              height="170"
                            >
                              <g className="js-background">
                                <rect
                                  className="js-background"
                                  width="913"
                                  height="170"
                                ></rect>
                              </g>
                              <g className="js-grid">
                                <line
                                  className="js-grid--horizontal"
                                  x1="0"
                                  x2="913"
                                  y1="0.5"
                                  y2="0.5"
                                ></line>
                                <line
                                  className="js-grid--horizontal"
                                  x1="0"
                                  x2="913"
                                  y1="43"
                                  y2="43"
                                ></line>
                                <line
                                  className="js-grid--horizontal"
                                  x1="0"
                                  x2="913"
                                  y1="85.5"
                                  y2="85.5"
                                ></line>
                                <line
                                  className="js-grid--horizontal"
                                  x1="0"
                                  x2="913"
                                  y1="128"
                                  y2="128"
                                ></line>
                                <line
                                  className="js-grid--horizontal zero"
                                  x1="0"
                                  x2="913"
                                  y1="170.5"
                                  y2="170.5"
                                ></line>
                              </g>
                              <g
                                className="js-axis js-xaxis"
                                transform="translate(0, 170)"
                              >
                                <g
                                  className="js-ticks"
                                  fill="none"
                                  font-size="10"
                                  font-family="sans-serif"
                                  text-anchor="middle"
                                  transform="translate(0, 0)"
                                >
                                  <path
                                    className="domain"
                                    stroke="currentColor"
                                    d="M0.5,6V0.5H913.5V6"
                                  ></path>
                                  <g
                                    className="tick"
                                    opacity="1"
                                    transform="translate(0.5,0)"
                                  >
                                    <line stroke="currentColor" y2="6"></line>
                                    <text fill="#767676" y="9" dy="0.71em">
                                      Mar
                                    </text>
                                  </g>
                                  <g
                                    className="tick"
                                    opacity="1"
                                    transform="translate(154.32065217391303,0)"
                                  >
                                    <line stroke="currentColor" y2="6"></line>
                                    <text fill="#767676" y="9" dy="0.71em">
                                      Apr
                                    </text>
                                  </g>
                                  <g
                                    className="tick"
                                    opacity="1"
                                    transform="translate(303.17934782608694,0)"
                                  >
                                    <line stroke="currentColor" y2="6"></line>
                                    <text fill="#767676" y="9" dy="0.71em">
                                      May
                                    </text>
                                  </g>
                                  <g
                                    className="tick"
                                    opacity="1"
                                    transform="translate(457,0)"
                                  >
                                    <line stroke="currentColor" y2="6"></line>
                                    <text fill="#767676" y="9" dy="0.71em">
                                      Jun
                                    </text>
                                  </g>
                                  <g
                                    className="tick"
                                    opacity="1"
                                    transform="translate(605.8586956521739,0)"
                                  >
                                    <line stroke="currentColor" y2="6"></line>
                                    <text fill="#767676" y="9" dy="0.71em">
                                      Jul
                                    </text>
                                  </g>
                                  <g
                                    className="tick"
                                    opacity="1"
                                    transform="translate(759.679347826087,0)"
                                  >
                                    <line stroke="currentColor" y2="6"></line>
                                    <text fill="#767676" y="9" dy="0.71em">
                                      Aug
                                    </text>
                                  </g>
                                </g>
                                <line className="js-line" x2="913"></line>
                              </g>
                              <g className="js-axis js-yaxis">
                                <g
                                  className="js-ticks"
                                  fill="none"
                                  font-size="10"
                                  font-family="sans-serif"
                                  text-anchor="end"
                                  transform="translate(0,0)"
                                >
                                  <path
                                    className="domain"
                                    stroke="currentColor"
                                    d="M-6,0.5H0.5V170.5H-6"
                                  ></path>
                                  <g
                                    className="tick"
                                    opacity="1"
                                    transform="translate(0,0.5)"
                                  >
                                    <line stroke="currentColor" x2="-6"></line>
                                    <text fill="#767676" x="-9" dy="0.32em">
                                      -£ 80
                                    </text>
                                  </g>
                                  <g
                                    className="tick"
                                    opacity="1"
                                    transform="translate(0,43)"
                                  >
                                    <line stroke="currentColor" x2="-6"></line>
                                    <text fill="#767676" x="-9" dy="0.32em">
                                      -£ 60
                                    </text>
                                  </g>
                                  <g
                                    className="tick"
                                    opacity="1"
                                    transform="translate(0,85.5)"
                                  >
                                    <line stroke="currentColor" x2="-6"></line>
                                    <text fill="#767676" x="-9" dy="0.32em">
                                      -£ 40
                                    </text>
                                  </g>
                                  <g
                                    className="tick"
                                    opacity="1"
                                    transform="translate(0,128)"
                                  >
                                    <line stroke="currentColor" x2="-6"></line>
                                    <text fill="#767676" x="-9" dy="0.32em">
                                      -£ 20
                                    </text>
                                  </g>
                                  <g
                                    className="tick zero"
                                    opacity="1"
                                    transform="translate(0,170.5)"
                                  >
                                    <line stroke="currentColor" x2="-6"></line>
                                    <text fill="#767676" x="-9" dy="0.32em">
                                      £ 0
                                    </text>
                                  </g>
                                </g>
                                <line className="js-line" y2="170"></line>
                              </g>
                              <g className="js-border">
                                <rect
                                  className="js-border"
                                  width="913"
                                  height="170"
                                ></rect>
                              </g>
                              <g className="js-data">
                                <g className="js-series">
                                  <path
                                    className="js-line"
                                    fill="none"
                                    stroke="#6bc1d3"
                                    clip-path="url(#above-zero-54632)"
                                    d="M0,85L153.82065217391303,61.625L302.67934782608694,36.125L456.5,76.5L605.3586956521739,133.875L759.179347826087,31.875L913,48.87499999999999"
                                  ></path>
                                  <path className="js-area"></path>
                                  <circle
                                    className="js-circle js-circle--above"
                                    r="0"
                                    cx="0"
                                    cy="85"
                                    fill="#6bc1d3"
                                  ></circle>
                                  <circle
                                    className="js-circle js-circle--above"
                                    r="0"
                                    cx="153.82065217391303"
                                    cy="61.625"
                                    fill="#6bc1d3"
                                  ></circle>
                                  <circle
                                    className="js-circle js-circle--above"
                                    r="0"
                                    cx="302.67934782608694"
                                    cy="36.125"
                                    fill="#6bc1d3"
                                  ></circle>
                                  <circle
                                    className="js-circle js-circle--above"
                                    r="0"
                                    cx="456.5"
                                    cy="76.5"
                                    fill="#6bc1d3"
                                  ></circle>
                                  <circle
                                    className="js-circle js-circle--above"
                                    r="0"
                                    cx="605.3586956521739"
                                    cy="133.875"
                                    fill="#6bc1d3"
                                  ></circle>
                                  <circle
                                    className="js-circle js-circle--above"
                                    r="0"
                                    cx="759.179347826087"
                                    cy="31.875"
                                    fill="#6bc1d3"
                                  ></circle>
                                  <circle
                                    className="js-circle js-circle--above"
                                    r="0"
                                    cx="913"
                                    cy="48.87499999999999"
                                    fill="#6bc1d3"
                                  ></circle>
                                </g>
                                <g className="js-series">
                                  <path
                                    className="js-line"
                                    fill="none"
                                    stroke="#FEB734"
                                    clip-path="url(#above-zero-54632)"
                                    d="M0,159.375L153.82065217391303,150.875L302.67934782608694,121.125L456.5,170L605.3586956521739,163.625L759.179347826087,140.25L913,153"
                                  ></path>
                                  <path className="js-area"></path>
                                  <circle
                                    className="js-circle js-circle--above"
                                    r="0"
                                    cx="0"
                                    cy="159.375"
                                    fill="#FEB734"
                                  ></circle>
                                  <circle
                                    className="js-circle js-circle--above"
                                    r="0"
                                    cx="153.82065217391303"
                                    cy="150.875"
                                    fill="#FEB734"
                                  ></circle>
                                  <circle
                                    className="js-circle js-circle--above"
                                    r="0"
                                    cx="302.67934782608694"
                                    cy="121.125"
                                    fill="#FEB734"
                                  ></circle>
                                  <circle
                                    className="js-circle js-circle--above"
                                    r="0"
                                    cx="456.5"
                                    cy="170"
                                    fill="#FEB734"
                                  ></circle>
                                  <circle
                                    className="js-circle js-circle--above"
                                    r="0"
                                    cx="605.3586956521739"
                                    cy="163.625"
                                    fill="#FEB734"
                                  ></circle>
                                  <circle
                                    className="js-circle js-circle--above"
                                    r="0"
                                    cx="759.179347826087"
                                    cy="140.25"
                                    fill="#FEB734"
                                  ></circle>
                                  <circle
                                    className="js-circle js-circle--above"
                                    r="0"
                                    cx="913"
                                    cy="153"
                                    fill="#FEB734"
                                  ></circle>
                                </g>
                                <line
                                  x1="0"
                                  y1="0"
                                  y2="170"
                                  opacity="0"
                                  className="js-needle"
                                  transform="translate(302.67934782608694, 0)"
                                ></line>
                                <rect
                                  width="913"
                                  height="170"
                                  fill="transparent"
                                  className="js-hover"
                                ></rect>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="GraphLegend Graph-legend">
                          <div className="GraphLegend-item">
                            <div className="GraphLegendTooltip"></div>
                          </div>
                          <div className="GraphLegend-item2">
                            <div className="GraphLegendTooltip"></div>
                          </div>
                        </div>
                      </div>

                      {/* menega line chart end*/}
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
                                <div className="GraphColorBox TransactionChartTable-row-colorBox"></div>
                              </td>
                              <td className="TransactionChartTable-name TransactionChartTable-dot dot-color">
                                <span className="TransactionChartTable-row-text">
                                  Public
                                </span>
                              </td>
                              <td className="TransactionChartTable-text">
                                <span className="FormatCurrency">
                                  <span className="FormatCurrency-symbol">
                                    £{" "}
                                  </span>
                                  <span className="FormatCurrency-value">
                                    -30.00
                                  </span>
                                </span>
                              </td>
                              <td className="TransactionChartTable-text">
                                <span className="FormatCurrency">
                                  <span className="FormatCurrency-symbol">
                                    £{" "}
                                  </span>
                                  <span className="FormatCurrency-value">
                                    -25.67
                                  </span>
                                </span>
                              </td>
                              <td className="TransactionChartTable-text">
                                <span className="FormatCurrency">
                                  <span className="FormatCurrency-symbol">
                                    £{" "}
                                  </span>
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
                                <div className="GraphColorBox TransactionChartTable-row-colorBox"></div>
                              </td>
                              <td className="TransactionChartTable-name TransactionChartTable-dot">
                                <span className="TransactionChartTable-row-text">
                                  Transport
                                </span>
                              </td>
                              <td className="TransactionChartTable-text">
                                <span className="FormatCurrency">
                                  <span className="FormatCurrency-symbol">
                                    £{" "}
                                  </span>
                                  <span className="FormatCurrency-value">
                                    -30.00
                                  </span>
                                </span>
                              </td>
                              <td className="TransactionChartTable-text">
                                <span className="FormatCurrency">
                                  <span className="FormatCurrency-symbol">
                                    £{" "}
                                  </span>
                                  <span className="FormatCurrency-value">
                                    -15.00
                                  </span>
                                </span>
                              </td>
                              <td className="TransactionChartTable-text">
                                <span className="FormatCurrency">
                                  <span className="FormatCurrency-symbol">
                                    £{" "}
                                  </span>
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
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div />
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
