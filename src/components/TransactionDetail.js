import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "@mdi/react";
import {setSpendingData} from "../store/actions/component-action";
import "./../style/Base.css";
import "./../App.css";
import {
  mdiCarTireAlert,
  mdiArrowLeft,
  mdiBank,
  mdiCalendarMonthOutline,
  mdiUnfoldMoreVertical,
  mdiCogOutline,
  mdiChat,
  mdiUnfoldLessVertical,
} from "@mdi/js";
import LineCharts from "./LineCharts";
import ChartDateFilter from "./ChartDateFilter";
import Map from "./shared/Map/Map";
import axios from 'axios';
const API_URL = process.env.REACT_APP_BACKEND_URL;


class TransactionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spendingData: this.props.spendingData,
      showDetails: this.props.showDetails,
      selectedTransaction: this.props.selectedTransaction,
      selectedTransactionGroup: this.props.selectedTransactionGroup,
      categoriesData: this.props.categorydata,
      merchantDetails : {}
    };
    this.handleChange = this.handleChange.bind(this) 
  }

  componentDidMount(){
    const { selectedTransaction, token } = this.props;
    if(selectedTransaction && selectedTransaction.merchantId){
      axios
      .get(`${API_URL}/merchants/${selectedTransaction.merchantId}?token=Bearer ${token}`)
      .then((response) => {
        if (response.status === 200) {
         this.setState( { merchantDetails: response.data.data})
        }
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      console.log('Next up mounted')
    }
  }

  handleChange(e, transactionID){
     console.log({selectValue:e.target.value})
     if(e.target.value === "Show All Categories"){
      console.log("value set to true")
      this.setState({showCategories: transactionID})
     }
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

    const { merchantDetails } = this.state;
    
    return (
      <div>
        {this.state.showDetails === true ? (
          <div className="">
            <div className="">
              <div className="icon-header">
                <Icon
                  className="close-details-icon"
                  path={mdiArrowLeft}
                  onClick={() => this.props.changeShowDetails(false,null,null)}
                  size={2}
                  color="#dcdcdc"
                />
              </div>
              <div className="transactionDetail-wrapper">
                <div className="overlay-content-details">
                  <div className="receipt--info">
                    <div className="receipt-date">
                      <span
                        data-format="YYYY"
                        className="formattedDate receipt-date-year"
                      >
                        {this.state.selectedTransaction.date.split('',4)}
                      </span>
                      <span
                        data-format="DD"
                        className="formattedDate receipt-date-day"
                      >
                       {this.state.selectedTransaction.date.split((/[-, T]/))[2]}
                      </span>
                      <span
                        data-format="MMM"
                        className="formattedDate receipt-date-month"
                      >
                       {this.state.selectedTransactionGroup.split('',3)}
                      </span>
                    </div>
                    <div className="receipt-content">
                      <div className="transactionReceipt-text">
                        <h1 className="transactionReceipt-heading">
                        {this.state.selectedTransaction.text}
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
                                            size={1.25}
                                            horizontal
                                            vertical
                                            rotate={180}
                                            color="#000"
                                          />
                                        </span>
                                        <span className="billingTable-right-dropdown transaction-detail-dropdown">
                                        {this.state.showCategories === this.state.selectedTransaction.id ? 
                                                  ( <select onClick={(event) => event.stopPropagation()} style={{ zIndex: '10' }}  >
                                                  {this.props.categoryFilterData.map((allCategory, i) => (              
                <optgroup label={allCategory.name} onClick={(event) => event.stopPropagation()}> 
                {allCategory.children.map((subCategory) => (<option value={subCategory.name}>{subCategory.name}</option>))}
                
                 </optgroup>
            ))}      
                  
                                                    </select>
                                                
                                                    ) : (<select onClick={(event) => event.stopPropagation()} style={{ zIndex: '10' }} value={this.state.selectValue} onChange={(e) => {
                                                        this.handleChange(e, this.state.selectedTransaction.id)}}>
                                                    {(this.state.selectedTransaction.detectedCategories.map((categId) => (
            this.props.categorydata.filter(detectid => detectid.id === categId.categoryId)                                               
            ))).map((categ) => (
                <option value={categ[0].name}>{categ[0].name}</option>
          
 )) }
 <option>Show All Categories</option>

                                                    </select> )} 
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
                          <span className="formatCurrency-value">{this.state.selectedTransaction.amount}</span>
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
                              size={1.25}
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
                              size={1.25}
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
                              size={1.25}
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
                              path={mdiCogOutline}
                              size={1.25}
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
                              path={mdiChat}
                              size={1.25}
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
              <div className="">
                <div className="transactionOverviewCarbon mt-5">
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
                <div className="transactionOverviewChart-graph-wrapper mt-5">
                  <h2 className="heading">Total expenses this year</h2>
                  <div className="transactionOverviewChart-list">
                    <div className="transactionOverviewChart-list-item">
                      <div className="transactionOverviewChart-text">
                      {this.state.selectedTransaction.text}
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
              </div>
            </div>
            <div className="linechart-wrapper">
              <h2 className="heading">Total expenses this period</h2>
              <div className="TransactionOverviewChart-tabs-wrapper">                
              <div className="TransactionOverviewChart-dropdown">
              <ChartDateFilter></ChartDateFilter>
              </div>
                <div>
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-item nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Spending
                      </a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane active"
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
                              <div className="GraphColorBox TransactionChartTable-row-colorBox"></div>
                            </td>
                            <td>
                              <span className="TransactionChartTable-row-text TransactionChartTable-dot dot-color">
                                Public Transportation
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
                            <td className="TransactionChartTable-name">
                              <span className="TransactionChartTable-row-text TransactionChartTable-dot">
                              {this.state.selectedTransaction.text}
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
                  </div>
                </div>
              </div>
            </div>
            {
              merchantDetails && merchantDetails.address && merchantDetails.address.latitude  &&
              merchantDetails && merchantDetails.address && merchantDetails.address.longitude && 
              (
                <div className="map-wapper">
                <Map 
                  latitude={merchantDetails.address.latitude} 
                  longitude={merchantDetails.address.longitude} />
              </div>
              )
            }
            
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
  categoryFilterData: state.componentReducer.categoryFilterData,
});

const mapDispatchToProps = (dispatch,) => {
  return {
      setSpendingData: (token,value) => dispatch(setSpendingData(token,{chartDateRange:value})),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(TransactionDetail);