import React, { useState, useEffect } from 'react';
import DataScatterPlot from './DataScatterPlot';
import DataPieChart from './DataPieChart';

const DataVisualization = ({ events, locations }) => {
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    // Gets frequency of event genres for pie chart
    const getPieData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
      const summary = events.map((event) => {
        const eventSummary = event.summary;
        return { eventSummary };
      });

      const data = genres.map((genre) => {
        const name = genre;

        const value = summary.filter((summary) =>
          summary.eventSummary.split(' ').includes(name)
        ).length;
        // Filter name and genre again here
        return { name, value };
      });

      return data.filter((data) => data.value >= 1);
    };

    setPieData(() => getPieData());
  }, [events]);

  // Gets total number of events happening in each city for scatter plot
  const getScatterData = () => {
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location)
        .length;
      const city = location.split(' ').shift();
      return { city, number };
    });
    return data;
  };

  return (
    <div className='DataVisualization'>
      <DataPieChart data={pieData} />
      <DataScatterPlot data={getScatterData()} />
    </div>
  );
};

export default DataVisualization;
