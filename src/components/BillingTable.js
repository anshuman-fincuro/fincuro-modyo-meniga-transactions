import React, { Component } from "react";
import Icon from "@mdi/react";
import "./../style/Base.css";
import "./../App.css";
import { mdiCardAccountDetails } from "@mdi/js";
import { mdiAlertCircle } from "@mdi/js";
import { connect } from "react-redux";
import { setCategoryFilterData } from "../store/actions/component-action";
import CustomDropdown from "./shared/CustomDropdown";
class BillingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.transactionData,
      amountFilterValue: this.props.amountFilterValue,
      categoriesData: this.props.categorydata,
      showCategories: 0,
      selectedDropRow:''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.defaultDropdownSelect = this.defaultDropdownSelect.bind(this);
  }
  handleInputChange(categoryName, categoryId, rowId) {
      this.setState({selectedDropRow:rowId, selectedCategoryId:categoryId});
  }
  defaultDropdownSelect(val) {
    let defaultSelectVal = this.state.categoriesData.filter(
      data => (data.id === val)
    );
    return defaultSelectVal[0].name;
  }
  async componentDidMount() {
    await this.props.setCategoryFilter(this.props.token);
  }
  render() {
    return (
      <div>
        {this.props.transactionData.length > 0 ? (
          <div className="billingTable-wrapper">
            {this.props.transactionData.map((x, i) => (
              <div key={i}>
                <div className="billingTable-heading mt-3">{x.group}</div>
                <div className="billingTable-container">
                  {x.data.map((item, j) => (
                    <div
                      className="billingTable-row"
                      onClick={() =>
                        this.props.changeShowDetails(true, item, x.group)
                      }
                      key={j}
                    >
                      <div className="billingTable-left">
                        <div className="billingTable-icon"> 
                        {/* Category Icons                           */}
                        <i className={`Icon Icon--info CategoryIcon Icon--line CategoryIcon--${(this.state.selectedDropRow === item.id)?this.state.selectedCategoryId:item.categoryId}`}></i> 
                        </div>
                        <div className="billingTable-date">
                          {" "}
                          <span>{item.date.split(/[-, T]/)[2]}</span>{" "}
                          <span>{x.group.split("", 3)}</span>
                        </div>
                      </div>
                      <div className="billingTable-right">
                        <div className="billingTable-right-text-wrapper">
                          <div className="billingTable-right-text">
                            {item.text}
                          </div>
                          <div className="billingTable-right-dropdown">
                          <CustomDropdown 
                            items={this.props.categoryFilterData}
                            rowId={item.id}
                            detectedCategories={item.detectedCategories}
                            defaultSelect={this.defaultDropdownSelect(item.categoryId)}
                            handleSelection={(categoryName, categoryId, rowId)=>{
                                this.handleInputChange(categoryName, categoryId, rowId)
                            }}                            
                            categorydata={this.props.categorydata}
                            />                           
                          </div>
                        </div>
                        <div className="billingTable-TransactionAmount text-color-red">
                          £ {item.amount}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert">
            <Icon
              path={mdiAlertCircle}
              size={1}
              horizontal
              vertical
              rotate={0}
              color="#b27301"
            />
            Unfortunately, there are no transactions matching your filter
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  categoryFilterData: state.componentReducer.categoryFilterData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCategoryFilter: (token) => dispatch(setCategoryFilterData(token)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BillingTable);
