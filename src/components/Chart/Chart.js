import React from 'react'

import ChartBar  from './ChartBar';
import './Chart.css';

const Chart = props => {

 const datapointValues =  props.dataPoints.map(dataPoint =>dataPoint.value);
 const totalMaximum = Math.max(...datapointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => (
      <ChartBar value={dataPoint.value}
      maxValue={totalMaximum}
      label={dataPoint.label}
      />
      ))}
    </div>
  )
}

export default Chart;
