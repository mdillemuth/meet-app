import React from 'react';
import PropTypes from 'prop-types';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const DataPieChart = ({ data }) => {
  return (
    <div className='data-pie-chart'>
      <ResponsiveContainer width='100%' height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill='#8884d8'
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
