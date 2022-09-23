import React, { Component } from "react";
import Icon from '@mdi/react';
import "./../style/Base.css";
import "./../App.css";
import { mdiCardAccountDetails, mdiCar, mdiCardRemoveOutline } from '@mdi/js'


class BillingTable extends Component {
  render() {
    return (
      <div className="billingTable-wrapper">
        <div className="billingTable-heading">September</div>
        <div className="billingTable-container">
            <div className="billingTable-row">
                <div className="billingTable-left">
                    <div className="billingTable-icon"><Icon path={mdiCardAccountDetails}
        size={2}
        horizontal
        vertical
        rotate={180}
        color="#1c242c"/></div>
                    <div className="billingTable-date"> <span>19</span> <span>sep</span></div>
                </div>
                <div className="billingTable-right">
                    <div className="billingTable-right-text-wrapper">
                        <div className="billingTable-right-text">London Car Parking</div>

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
                    <div className="billingTable-TransactionAmount text-color-red">£ -5.00</div>
                </div>
            </div>
            <div className="billingTable-row">
                <div className="billingTable-left">
                    <div className="billingTable-icon"><Icon path={mdiCar}
        size={2}
        horizontal
        vertical
        rotate={180}
        color="#1c242c"/></div>
                    <div className="billingTable-date"> <span>17</span> <span>sep</span></div>
                </div>
                <div className="billingTable-right">
                    <div className="billingTable-right-text-wrapper">
                        <div className="billingTable-right-text">Halifax Bank</div>

                        <div className="billingTable-right-dropdown">
                            <select>
                                <option value="fruit">ATMs & Cash Withdrawals</option>
                                <option value="vegetable">Last year</option>
                                <option value="meat">Last 1 year</option>
                                <option value="vegetable">Last 3 year</option>
                                <option value="meat">Last 6 year</option>
                            </select>
                        </div>

                    </div>
                    <div className="billingTable-TransactionAmount text-color-green">£ 2000.00</div>
                </div>
            </div>
            <div className="billingTable-row">
                <div className="billingTable-left">
                    <div className="billingTable-icon"><Icon path={mdiCardAccountDetails}
        size={2}
        horizontal
        vertical
        rotate={180}
        color="#1c242c"/></div>
                    <div className="billingTable-date"> <span>18</span> <span>sep</span></div>
                </div>
                <div className="billingTable-right">
                    <div className="billingTable-right-text-wrapper">
                        <div className="billingTable-right-text">Texaco</div>

                        <div className="billingTable-right-dropdown">
                            <select>
                                <option value="fruit">Gas & fule</option>
                                <option value="vegetable">Last year</option>
                                <option value="meat">Last 1 year</option>
                                <option value="vegetable">Last 3 year</option>
                                <option value="meat">Last 6 year</option>
                            </select>
                        </div>

                    </div>
                    <div className="billingTable-TransactionAmount text-color-red">£ -50.00</div>
                </div>
            </div>
            <div className="billingTable-row">
                <div className="billingTable-left">
                    <div className="billingTable-icon"><Icon path={mdiCar}
        size={2}
        horizontal
        vertical
        rotate={180}
        color="#1c242c"/></div>
                    <div className="billingTable-date"> <span>19</span> <span>sep</span></div>
                </div>
                <div className="billingTable-right">
                    <div className="billingTable-right-text-wrapper">
                        <div className="billingTable-right-text">Transport for London</div>

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
                    <div className="billingTable-TransactionAmount text-color-red">£ -5.00</div>
                </div>
            </div>
            <div className="billingTable-row">
                <div className="billingTable-left">
                    <div className="billingTable-icon"><Icon path={mdiCardAccountDetails}
        size={2}
        horizontal
        vertical
        rotate={180}
        color="#1c242c"/></div>
                    <div className="billingTable-date"> <span>17</span> <span>sep</span></div>
                </div>
                <div className="billingTable-right">
                    <div className="billingTable-right-text-wrapper">
                        <div className="billingTable-right-text">Halifax Bank</div>

                        <div className="billingTable-right-dropdown">
                            <select>
                                <option value="fruit">ATMs & Cash Withdrawals</option>
                                <option value="vegetable">Last year</option>
                                <option value="meat">Last 1 year</option>
                                <option value="vegetable">Last 3 year</option>
                                <option value="meat">Last 6 year</option>
                            </select>
                        </div>

                    </div>
                    <div className="billingTable-TransactionAmount text-color-green">£ 2000.00</div>
                </div>
            </div>
            <div className="billingTable-row">
                <div className="billingTable-left">
                    <div className="billingTable-icon"><Icon path={mdiCar}
        size={2}
        horizontal
        vertical
        rotate={180}
        color="#1c242c"/></div>
                    <div className="billingTable-date"> <span>18</span> <span>sep</span></div>
                </div>
                <div className="billingTable-right">
                    <div className="billingTable-right-text-wrapper">
                        <div className="billingTable-right-text">Texaco</div>

                        <div className="billingTable-right-dropdown">
                            <select>
                                <option value="fruit">Gas & fule</option>
                                <option value="vegetable">Last year</option>
                                <option value="meat">Last 1 year</option>
                                <option value="vegetable">Last 3 year</option>
                                <option value="meat">Last 6 year</option>
                            </select>
                        </div>

                    </div>
                    <div className="billingTable-TransactionAmount text-color-red">£ -50.00</div>
                </div>
            </div>
            <div className="billingTable-row">
                <div className="billingTable-left">
                    <div className="billingTable-icon"><Icon path={mdiCardAccountDetails}
        size={2}
        horizontal
        vertical
        rotate={180}
        color="#1c242c"/></div>
                    <div className="billingTable-date"> <span>19</span> <span>sep</span></div>
                </div>
                <div className="billingTable-right">
                    <div className="billingTable-right-text-wrapper">
                        <div className="billingTable-right-text">London Car Parking</div>

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
                    <div className="billingTable-TransactionAmount text-color-red">£ -5.00</div>
                </div>
            </div>
            <div className="billingTable-row">
                <div className="billingTable-left">
                    <div className="billingTable-icon"><Icon path={mdiCardAccountDetails}
        size={2}
        horizontal
        vertical
        rotate={180}
        color="#1c242c"/></div>
                    <div className="billingTable-date"> <span>17</span> <span>sep</span></div>
                </div>
                <div className="billingTable-right">
                    <div className="billingTable-right-text-wrapper">
                        <div className="billingTable-right-text">Halifax Bank</div>

                        <div className="billingTable-right-dropdown">
                            <select>
                                <option value="fruit">ATMs & Cash Withdrawals</option>
                                <option value="vegetable">Last year</option>
                                <option value="meat">Last 1 year</option>
                                <option value="vegetable">Last 3 year</option>
                                <option value="meat">Last 6 year</option>
                            </select>
                        </div>

                    </div>
                    <div className="billingTable-TransactionAmount text-color-green">£ 2000.00</div>
                </div>
            </div>
            <div className="billingTable-row">
                <div className="billingTable-left">
                    <div className="billingTable-icon"><Icon path={mdiCardAccountDetails}
        size={2}
        horizontal
        vertical
        rotate={180}
        color="#1c242c"/></div>
                    <div className="billingTable-date"> <span>18</span> <span>sep</span></div>
                </div>
                <div className="billingTable-right">
                    <div className="billingTable-right-text-wrapper">
                        <div className="billingTable-right-text">Texaco</div>

                        <div className="billingTable-right-dropdown">
                            <select>
                                <option value="fruit">Gas & fule</option>
                                <option value="vegetable">Last year</option>
                                <option value="meat">Last 1 year</option>
                                <option value="vegetable">Last 3 year</option>
                                <option value="meat">Last 6 year</option>
                            </select>
                        </div>

                    </div>
                    <div className="billingTable-TransactionAmount text-color-red">£ -50.00</div>
                </div>
            </div>
            <div className="billingTable-row">
                <div className="billingTable-left">
                    <div className="billingTable-icon"><Icon path={mdiCardAccountDetails}
        size={2}
        horizontal
        vertical
        rotate={180}
        color="#1c242c"/></div>
                    <div className="billingTable-date"> <span>19</span> <span>sep</span></div>
                </div>
                <div className="billingTable-right">
                    <div className="billingTable-right-text-wrapper">
                        <div className="billingTable-right-text">Transport for London</div>

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
                    <div className="billingTable-TransactionAmount text-color-red">£ -5.00</div>
                </div>
            </div>
            <div className="billingTable-row">
                <div className="billingTable-left">
                    <div className="billingTable-icon"><Icon path={mdiCardAccountDetails}
        size={2}
        horizontal
        vertical
        rotate={180}
        color="#1c242c"/></div>
                    <div className="billingTable-date"> <span>17</span> <span>sep</span></div>
                </div>
                <div className="billingTable-right">
                    <div className="billingTable-right-text-wrapper">
                        <div className="billingTable-right-text">Halifax Bank</div>

                        <div className="billingTable-right-dropdown">
                            <select>
                                <option value="fruit">ATMs & Cash Withdrawals</option>
                                <option value="vegetable">Last year</option>
                                <option value="meat">Last 1 year</option>
                                <option value="vegetable">Last 3 year</option>
                                <option value="meat">Last 6 year</option>
                            </select>
                        </div>

                    </div>
                    <div className="billingTable-TransactionAmount text-color-green">£ 2000.00</div>
                </div>
            </div>
            <div className="billingTable-row">
                <div className="billingTable-left">
                    <div className="billingTable-icon"><Icon path={mdiCardAccountDetails}
        size={2}
        horizontal
        vertical
        rotate={180}
        color="#1c242c"/></div>
                    <div className="billingTable-date"> <span>18</span> <span>sep</span></div>
                </div>
                <div className="billingTable-right">
                    <div className="billingTable-right-text-wrapper">
                        <div className="billingTable-right-text">Texaco</div>

                        <div className="billingTable-right-dropdown">
                            <select>
                                <option value="fruit">Gas & fule</option>
                                <option value="vegetable">Last year</option>
                                <option value="meat">Last 1 year</option>
                                <option value="vegetable">Last 3 year</option>
                                <option value="meat">Last 6 year</option>
                            </select>
                        </div>

                    </div>
                    <div className="billingTable-TransactionAmount text-color-red">£ -50.00</div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default BillingTable;
