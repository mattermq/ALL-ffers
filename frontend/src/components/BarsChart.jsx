import React from 'react';
import Chart from 'chart.js';

export default class BarsChart extends React.Component {
  componentDidMount() {
    this.drawBars(this.props);
  }

  drawBars(props) {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: ['Июнь', 'Июль', 'Август'],
        datasets: [
          {
            label: 'Начато проектов',
            backgroundColor: '#0E53A7',
            borderColor: '#0E53A7',
            data: [7, 10, 9]
          },
          {
            label: 'Завершено проектов',
            backgroundColor: '#FF9C00',
            borderColor: '#FF9C00',
            data: [6, 10, 8]
          },
        ]
      },

      // Configuration options go here
      options: {
        title: {
          display: true,
          text: 'Ваши Проекты',
          fontSize: 15,
        },
        legend: {
          position: 'bottom',
        },
        scales: {
          yAxes: [{
            scaleStartValue: 0,
            ticks: {
              max: 15,
              min: 0,
              stepSize: 5,
            },
          }],
        },
      }
    });

  }
  render() {
    return (
      <div className="chart-container" /* style={{'position': 'relative', 'height':'300px', 'width':'300px'}} */>
        <canvas ref="canvas" id="chart"></canvas>
      </div>
    );
  }
}

