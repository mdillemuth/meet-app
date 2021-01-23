import React from 'react';
import PropTypes from 'prop-types';
import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';

const DataPieChart = ({ data }) => {
  const colors = ['#00b8a9', '#ff9a00', '#f6416c', '#17b978', '#6639a6'];

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
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
                name={entry.name}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

DataPieChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DataPieChart;
