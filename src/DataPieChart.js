import React from 'react';
import PropTypes from 'prop-types';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const DataPieChart = ({ data }) => {
  return (
    <div className='data-pie-chart'>
      <ResponsiveContainer width='100%' height={300}>
        <PieChart>
          <Pie
            data={data}
            cy={150}
            labelLine={false}
            outerRadius={60}
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
