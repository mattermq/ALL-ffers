import React from 'react';
import Chart from 'chart.js';

export default class Charts extends React.Component {
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
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Начато проектов',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            },
            {
              label: 'Завершено проектов',
              backgroundColor: 'blue',
              borderColor: 'rgb(255, 99, 132)',
              data: [0, 10, 5, 2, 20, 30, 45]
          },
          ]
        },
    
        // Configuration options go here
        // options: {}
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

