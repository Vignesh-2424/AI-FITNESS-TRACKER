import React from 'react';
import { TrendingUp, TrendingDown, Target, Activity } from 'lucide-react';
import { mockProgressData } from '../utils/mockData';

export default function ProgressCharts() {
  const data = mockProgressData;
  
  const getChangeIcon = (current: number, previous: number) => {
    return current < previous ? TrendingDown : TrendingUp;
  };
  
  const getChangeColor = (current: number, previous: number, isWeight = false) => {
    const improved = isWeight ? current < previous : current > previous;
    return improved ? 'text-green-600' : 'text-red-600';
  };

  const chartData = [
    {
      title: 'Weight Progress',
      data: data.map(d => ({ date: d.date, value: d.weight })),
      color: 'rgb(59, 130, 246)',
      unit: 'kg',
      icon: Activity,
      isWeight: true
    },
    {
      title: 'Body Fat %',
      data: data.map(d => ({ date: d.date, value: d.bodyFat })),
      color: 'rgb(16, 185, 129)',
      unit: '%',
      icon: Target,
      isWeight: true
    },
    {
      title: 'Muscle Mass',
      data: data.map(d => ({ date: d.date, value: d.muscleMass })),
      color: 'rgb(249, 115, 22)',
      unit: 'kg',
      icon: TrendingUp,
      isWeight: false
    }
  ];

  const SimpleChart = ({ data, color }: { data: any[], color: string }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    const range = maxValue - minValue || 1;

    return (
      <div className="h-32 flex items-end space-x-1">
        {data.map((point, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full rounded-t"
              style={{ 
                height: `${((point.value - minValue) / range) * 100}%`,
                backgroundColor: color,
                minHeight: '4px'
              }}
            />
            <div className="text-xs text-gray-500 mt-2">
              {new Date(point.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Progress Tracking</h2>
        <p className="text-gray-600 mt-2">Monitor your fitness journey with detailed analytics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {chartData.map((chart, index) => {
          const currentValue = chart.data[chart.data.length - 1].value;
          const previousValue = chart.data[chart.data.length - 2].value;
          const change = currentValue - previousValue;
          const ChangeIcon = getChangeIcon(currentValue, previousValue);
          
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${chart.color}20` }}>
                    <chart.icon size={20} style={{ color: chart.color }} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{chart.title}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    {currentValue}{chart.unit}
                  </div>
                  <div className={`flex items-center space-x-1 ${getChangeColor(currentValue, previousValue, chart.isWeight)}`}>
                    <ChangeIcon size={16} />
                    <span className="text-sm font-medium">
                      {change > 0 ? '+' : ''}{change.toFixed(1)}{chart.unit}
                    </span>
                  </div>
                </div>
              </div>
              <SimpleChart data={chart.data} color={chart.color} />
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Workout Consistency</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">This Week</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="font-bold text-green-600">6/7 days</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-600">This Month</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <span className="font-bold text-blue-600">23/30 days</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Total Streak</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <span className="font-bold text-orange-600">12 days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Achievements</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🏆</span>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-900">Weight Goal Achieved</h4>
                <p className="text-sm text-yellow-800">Lost 2.5kg this month</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">💪</span>
              </div>
              <div>
                <h4 className="font-semibold text-green-900">Consistency Master</h4>
                <p className="text-sm text-green-800">12-day workout streak</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">📈</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Body Fat Reduced</h4>
                <p className="text-sm text-blue-800">2% reduction this month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}