import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import * as moment from "moment";
import { connect } from "react-redux";
import { setSpendingData } from "../store/actions/component-action";
import { setLineChartData } from "../store/actions/component-action";
class ChartDateFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateDropDown: [],
      selectValue: {},
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log(e.target.value.split(",")[0]);
    console.log(e.target.value.split(",")[1]);
    let merchantData;
    if (this.props.merchantId !== null) {
      merchantData = {
        "merchantIds": [
          this.props.merchantId
        ], "useParentMerchantIds": true
      }
    }
    else {
      merchantData = {
        "merchantTexts": [
          this.props.merchantTexts
        ], useExactMerchantTexts
          :
          true
      }
    }
    let param = {
      "transactionFilter": {
        "periodFrom": e.target.value.split(",")[0],
        "periodTo": e.target.value.split(",")[1],
        "hideExcluded": true
      },
      "options": {
        "timeResolution": "Month",
        "overTime": true,
        "type": "categorySeries",
        "includeCarbonFootprint": true
      },
      "seriesSelectors": [
        {
          "filter": {
            "categoryIds": [
              this.props.categoryId
            ]
          }
        },
        {
          "filter": merchantData
        }
      ]
    }
    this.props.setLineChartData(this.props.token, param)
  }
  async componentDidMount() {
    this.setState({ dateDropDown: this.getdateRange() });
    let merchantData;
    if (this.props.merchantId !== null) {
      merchantData = {
        "merchantIds": [
          this.props.merchantId
        ], "useParentMerchantIds": true
      }
    }
    else {
      merchantData = {
        "merchantTexts": [
          this.props.merchantTexts
        ], useExactMerchantTexts
          :
          true
      }
    }
    let param = {
      "transactionFilter": {
        "periodFrom": moment().subtract(1, 'months').startOf("month").format("YYYY-MM-DD"),
        "periodTo": moment().endOf("month").format("YYYY-MM-DD"),
        "hideExcluded": true
      },
      "options": {
        "timeResolution": "Month",
        "overTime": true,
        "type": "categorySeries",
        "includeCarbonFootprint": true
      },
      "seriesSelectors": [
        {
          "filter": {
            "categoryIds": [
              this.props.categoryId
            ]
          }
        },
        {
          "filter": merchantData
        }
      ]
    }
    this.props.setLineChartData(this.props.token, param);
    this.props.onSelectChartData(this.props.lineChartData);
    console.log('this.props.lineChartData...0', this.props.lineChartData)
  }
  componentDidUpdate(prevProps) {
    console.log('this.props.lineChartData...', this.props.lineChartData);
    this.props.onSelectChartData(this.props.lineChartData);
  }

  getdateRange() {
    const dates = [
      "Last month",
      "Last 3 months",
      "Last 6 months",
      "Last 12 months",
      "This year",
      "Last year",
    ];
    const ranges = dates.map((item) => {
      let startDate = "";
      let endDate = "";
      if (item === "This month") {
        startDate = moment().startOf("month").format("YYYY-MM-DD");
        endDate = moment().endOf("month").format("YYYY-MM-DD");
      } else if (item === "Last month") {
        startDate = moment()
          .subtract(1, "months")
          .startOf("month")
          .format("YYYY-MM-DD");
        endDate = moment().endOf("month").format("YYYY-MM-DD");
      } else if (item === "Last 3 months") {
        startDate = moment()
          .subtract(3, "months")
          .startOf("month")
          .format("YYYY-MM-DD");
        endDate = endDate = moment().endOf("month").format("YYYY-MM-DD");
      } else if (item === "Last 6 months") {
        startDate = moment()
          .subtract(6, "months")
          .startOf("month")
          .format("YYYY-MM-DD");
        endDate = moment().endOf("month").format("YYYY-MM-DD");
      } else if (item === "Last 12 months") {
        startDate = moment()
          .subtract(12, "months")
          .startOf("month")
          .format("YYYY-MM-DD");
        endDate = moment().endOf("month").format("YYYY-MM-DD");
      } else if (item === "This year") {
        startDate = moment().startOf("year").format("YYYY-MM-DD");
        endDate = moment().endOf("month").format("YYYY-MM-DD");
      } else if (item === "Last year") {
        startDate = moment()
          .subtract(1, "year")
          .startOf("year")
          .format("YYYY-MM-DD");
        endDate = moment()
          .subtract(1, "year")
          .endOf("year")
          .format("YYYY-MM-DD");
      } else {
        startDate = null;
        endDate = null;
      }

      let value = startDate && endDate ? `${startDate},${endDate}` : "Custom";

      return { value: value, label: item };
    });
    return ranges;
  }

  render() {
    const ranges = this.state.dateDropDown;
    return (
      <>
        <div className="form-group col-md-12">
          <Form.Select aria-label="Default select example" onChange={(e) => {
            this.handleChange(e)
          }}>
            <option>Select period</option>
            {ranges &&
              ranges.map((range, i) => (
                <>
                  <option key={i} value={range.value}>
                    {range.label}
                  </option>
                </>
              ))}
          </Form.Select>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  lineChartData: state.componentReducer.lineChartData,

});
const mapDispatchToProps = (dispatch,) => {
  return {
    setLineChartData: (token, value) => dispatch(setLineChartData(token, value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChartDateFilter);
