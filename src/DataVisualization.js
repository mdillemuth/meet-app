import React, { useState, useEffect } from 'react'
import DataScatterPlot from './DataScatterPlot'
import DataPieChart from './DataPieChart'

const DataVisualization = ({ events, locations }) => {
  useEffect(() => {
    setPieData(() => getPieData())
  }, [events])

  const [pieData, setPieData] = useState([])

  // Gets frequency of event genres for pie chart
  const getPieData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS']
    const summary = events.map((event) => {
      const eventSummary = event.summary
      return { eventSummary }
    })

    const data = genres.map((genre) => {
      const name = genre

      const value = summary.filter((summary) =>
        summary.eventSummary.split(' ').includes(name)
      ).length
      // Filter name and genre again here
      return { name, value }
    })

    return data.filter((data) => data.value >= 1)
  }

  // Gets total number of events happening in each city for scatter plot
  const getScatterData = () => {
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location)
        .length
      const city = location.split(' ').shift()
      return { city, number }
    })
    return data
  }

  return (
    <div className='data-vis-wrapper'>
      <div className='data-pie-wrapper'>
        <h4>Frequency of event by type</h4>
        <DataPieChart data={pieData} />
      </div>
      <div className='data-scatter-wrapper'>
        <h4>Frequency of event by location</h4>
        <DataScatterPlot data={getScatterData()} />
      </div>
    </div>
  )
}

export default DataVisualization
