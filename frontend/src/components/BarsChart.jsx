import React from 'react';
import Chart from 'chart.js';

export default class BarsChart extends React.Component {
  componentDidMount() {
    this.drawBars(this.props);
    console.log('PROPS', this.props);
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
        labels: this.props.months,
        datasets: [
          {
            label: 'Начато проектов',
            backgroundColor: '#0E53A7',
            borderColor: '#0E53A7',
            data: this.props.startedByMonths,
          },
          {
            label: 'Завершено проектов',
            backgroundColor: '#FF9C00',
            borderColor: '#FF9C00',
            data: this.props.finishedByMonths,
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
              max: 10,
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

