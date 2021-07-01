import React, { Component } from 'react';
import reveal from '../../utils/reveal';
import { Radar } from 'react-chartjs-2';

const CHART_DATA = {
  labels: ["JS/ES5/ES6+", "CSS/SASS/JSS", "TypeScript","UX/UI", "REDUX/MOBX", "REACT"],
  datasets: [
    {
      backgroundColor: 'rgba(254, 230, 76, 0.7)',
      borderColor:'rgba(254, 230, 76, 1)',
      borderWidth: 1,
      lineTension:.1,
      pointBackgroundColor: 'white',
      pointBorderWidth:1,
      pointHoverBorderWidth:1,
      data: [9, 9.5, 6.5, 8, 9, 9.5]
    }
  ]
};

const CHART_OPTIONS = {
  legend: {display: false},
  scale: {
    ticks: {
      beginAtZero: true,
      min: 0,
      max: 10,
      stepSize: 2
    },
    pointLabels: {
      fontSize: 14,
      fontFamily:'Rubik',
      fontStyle : '300',
      fontColor: 'rgba(0,0,0,.7)'
    }
  }
}

class PolarChart extends Component {
  render () {
    return <div className="polar-chart">
      <Radar 
        data={CHART_DATA} 
        width={400} 
        height={400}
        options={CHART_OPTIONS}
      />
    </div>
  }
}
export default reveal(PolarChart);