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

const BloodPressureChart = ({ diagnosisHistory }) => {
  // Created labels and values from diagnosis history
  const labels = diagnosisHistory.map((entry) => `${entry.month} ${entry.year}`);
  const systolicValues = diagnosisHistory.map((entry) => entry.blood_pressure.systolic.value);
  const diastolicValues = diagnosisHistory.map((entry) => entry.blood_pressure.diastolic.value);

  const data = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolicValues,
        borderColor: '#C084FC',
        backgroundColor: '#C084FC',
        tension: 0.4,
        pointRadius: 4,
      },
      {
        label: 'Diastolic',
        data: diastolicValues,
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
        position: 'top',
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
      <h2 className="text-lg font-semibold mb-2">
        Blood Pressure <span className="text-gray-500">(Last 6 months)</span>
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default BloodPressureChart;
