import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(...registerables, zoomPlugin);

const options: any = {
    scales: {
      y: {
        min: -1,
        max: 100,
        type: "linear",
      }
    },
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true
          },
          pinch: {
            enabled: true
          }
        },
        pan: {
          enabled: true,
          mode: "x",
        },
        mode: "x"
      }
    }
  };

const LineChart = ({chartData}: any) => {
    return <Line data={chartData} options={options}/>
}

export default LineChart;