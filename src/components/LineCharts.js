import React, { Component } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import _ from 'lodash';
import * as moment from 'moment';

import "./../style/Base.css";
import "./../App.css";

class LineCharts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }
  async componentDidMount() {   
      this.linechartPlotData();
  }
  componentDidUpdate(prevProps) {   
    if(prevProps.lineChartData !== this.props.lineChartData){
      console.log('lineChartData:this.props.lineChartData', this.props.lineChartData);
      this.setState({ data: []})
      this.linechartPlotData();
  }
  }
  linechartPlotData() {
    if(this.props.lineChartData.length !==0){
      const lineChartData = this.props.lineChartData;
      console.log('lineChartDatalineChartData',lineChartData)
      let selectedTransaction = this.props.selectedTransaction;
      let selectedCategory = this.props.selectedCategory;
      const lineOneDataArray = [];
      const lineTwoDataArray = [];
      const lineOneData = lineChartData[0].values.map((values) => {
        lineOneDataArray.push({ date: moment(values.date).format('MMM-YYYY'), [`${selectedCategory}`]: values.nettoAmount });

      });
      const lineTwoData = lineChartData[1].values.map((values) => {
        lineTwoDataArray.push({ date: moment(values.date).format('MMM-YYYY'), [`${selectedTransaction}`]: values.nettoAmount })

      });
      let finalPlotData = lineOneDataArray.map((item, i) => Object.assign({}, item, lineTwoDataArray[i]));
      console.log('lineOneDataArray', lineOneDataArray, selectedCategory);
      console.log('lineOneDataArray', lineTwoDataArray, selectedTransaction);
      console.log('lineOneDataArray', finalPlotData);
      this.setState({ data: finalPlotData });
    }
  }
  render() { 
    console.log('this.state.datathis.state.data',  this.state.data)
    return (
      <div className="mt-5 col-12">
        {this.state.data &&
          <ResponsiveContainer width="98%" height={250}>
            <LineChart layout="horizontal" data={this.state.data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="date" padding={{ left: 50, right: 50 }} />
              <YAxis type="number" reversed />
              <Tooltip />              
              <Line type="monotone" dataKey={this.props.selectedTransaction} stroke="#feb734" />
              <Line type="monotone" dataKey={this.props.selectedCategory} stroke="#6bc1d3" />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
    );
  }
}



export default LineCharts;