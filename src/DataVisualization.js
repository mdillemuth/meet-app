import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const DataVisualization = ({ data }) => {
  return (
    <div className='DataVisualization'>
      <h4>Events in each city</h4>
      <ResponsiveContainer height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type='category' dataKey='city' name='city' />
          <YAxis
            allowDecimals={false}
            type='number'
            dataKey='number'
            name='number of events'
          />
          <Tooltip
            className='Data-tooltip'
            cursor={{ strokeDasharray: '3 3' }}
          />
          <Scatter data={data} fill='#8884d8' />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataVisualization;
