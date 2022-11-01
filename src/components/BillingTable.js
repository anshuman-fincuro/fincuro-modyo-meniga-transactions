import React, { Component } from "react";
import Icon from '@mdi/react';
import "./../style/Base.css";
import "./../App.css";
import { mdiCardAccountDetails} from '@mdi/js';


class BillingTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: this.props.transactionData,
          amountFilterValue:this.props.amountFilterValue,
        }
    }
    render() {
        return (
             <div>
                  {this.props.transactionData.length > 0 ? (
                <div className="billingTable-wrapper">
                    {this.props.transactionData.map((x, i) => (
                        console.log(this.props.transactionData),
                        <div key={i}>
                            <div className="billingTable-heading">{x.group}</div>
                            <div className="billingTable-container">
                                {x.data.map((item, j) => (
                                    <div onClick={()=>this.props.changeShowDetails(true,item,x.group)} key={j} className="billingTable-row">
                                        <div className="billingTable-left">
                                            <div className="billingTable-icon"><Icon path={mdiCardAccountDetails}
                                                size={2}
                                                horizontal
                                                vertical
                                                rotate={180}
                                                color="#1c242c"/>
                                            </div>
                                            <div className="billingTable-date"> <span>{item.date.split((/[-, T]/))[2]}</span> <span>{x.group.split('',3)}</span></div>
                                        </div>
                                        <div className="billingTable-right">
                                            <div className="billingTable-right-text-wrapper">
                                                <div className="billingTable-right-text">{item.text}</div>
                                    
                                                <div className="billingTable-right-dropdown">
                                                    <select>
                                                        <option value="fruit">Parking</option>
                                                        <option value="vegetable">Last year</option>
                                                        <option value="meat">Last 1 year</option>
                                                        <option value="vegetable">Last 3 year</option>
                                                        <option value="meat">Last 6 year</option>
                                                    </select>
                                                </div>
                    
                                            </div>
                                            <div className="billingTable-TransactionAmount text-color-red">£ {item.amount}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))};
                </div> ) : (
          <div className="alert">
            Unfortunately, there are no transactions matching your filter
          </div>
        )}
            </div>
            
        );
    }
    
}

export default BillingTable;
