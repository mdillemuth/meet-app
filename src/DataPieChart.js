import React from 'react';
import PropTypes from 'prop-types';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const DataPieChart = ({ data }) => {
  return (
    <div className='data-pie-chart'>
      <ResponsiveContainer width='90%' height={400}>
        <PieChart>
          <Pie
            data={data}
            cy={200}
            labelLine={false}
            outerRadius={100}
            fill='#1f6f8b'
            dataKey='value'
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

DataPieChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DataPieChart;
