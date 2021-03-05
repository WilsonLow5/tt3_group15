import axios from "axios";
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { accountKey: 'assetBalance', val: 4119626293 },
  { accountKey: 'cashBalance', val: 1012956064 },
];

export default class viewBalance extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="val"
            argumentField="accountKey"
            innerRadius={0.6}
          />
          <Title
            text="Your Account Balance"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
