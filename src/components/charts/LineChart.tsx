import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../../context/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartProps {
  data: ChartData<'line'>;
  title?: string;
  height?: number;
  showLegend?: boolean;
  className?: string;
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  title,
  height = 300,
  showLegend = true,
  className = '',
}) => {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  
  const textColor = isDark ? '#CBD5E1' : '#334155';
  const gridColor = isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(148, 163, 184, 0.2)';
  
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        position: 'top' as const,
        labels: {
          color: textColor,
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          },
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      title: {
        display: !!title,
        text: title || '',
        color: textColor,
        font: {
          family: "'Inter', sans-serif",
          size: 16,
          weight: '600',
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
        titleColor: isDark ? '#CBD5E1' : '#1E293B',
        bodyColor: isDark ? '#CBD5E1' : '#334155',
        borderColor: isDark ? '#334155' : '#E2E8F0',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        boxPadding: 4,
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: '600',
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 13,
        },
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += '$' + context.parsed.y.toFixed(2);
            }
            return label;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: textColor,
          font: {
            family: "'Inter', sans-serif",
          },
          maxRotation: 45,
          minRotation: 45,
        },
        border: {
          color: gridColor,
        },
      },
      y: {
        grid: {
          color: gridColor,
          drawBorder: false,
        },
        ticks: {
          color: textColor,
          font: {
            family: "'Inter', sans-serif",
          },
          callback: function(value) {
            return '$' + value;
          },
        },
        border: {
          dash: [4, 4],
          color: gridColor,
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    elements: {
      line: {
        tension: 0.3,
      },
      point: {
        radius: 2,
        hoverRadius: 5,
      },
    },
  };

  return (
    <div className={`chart-container relative ${className}`} style={{ height }}>
      <Line data={data} options={options} />
    </div>
  );
};