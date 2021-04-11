import React from 'react'
import PropTypes from 'prop-types'
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const DataScatterPlot = ({ data }) => {
  return (
    <div className='data-scatter-plot'>
      <ResponsiveContainer width='99%' height={400}>
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
          <Scatter data={data} fill='#1f6f8b' />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

DataScatterPlot.propTypes = {
  data: PropTypes.array.isRequired,
}

export default DataScatterPlot
