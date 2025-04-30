import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register chart components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = () => {
  const data = {
    labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'],
    datasets: [
      {
        label: 'Systolic',
        data: [145, 160, 155, 140, 158, 160],
        borderColor: '#C084FC',
        backgroundColor: '#C084FC',
        tension: 0.4,
        pointRadius: 4,
      },
      {
        label: 'Diastolic',
        data: [70, 78, 74, 72, 75, 78],
        borderColor: '#93C5FD',
        backgroundColor: '#93C5FD',
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' ,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 50,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Blood Pressure <span className="text-gray-500">(Last 6 months)</span></h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default BloodPressureChart;
