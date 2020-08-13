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
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['Июнь', 'Июль', 'Август'],
            datasets: [
            {
                label: 'Заработано за месяц',
                borderColor: '#0E53A7',
                data: [23000, 37000, 17000]
            },
          ]
        },
    
        // Configuration options go here
        options: {
          title: {
            display: true,
            text: 'Ваши Доходы',
            fontSize: 19,
          },
          legend: {
            position: 'bottom',
          },
        },
    });

  }
  render() {
    return (
      <div class="chart-container" style={{'position': 'relative', 'height':'300px', 'width':'500px'}}>
        <canvas ref="canvas" id="chart"></canvas>
      </div>
    );
  }
}