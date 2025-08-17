import React from 'react';
import { Activity, Target, Zap, TrendingUp } from 'lucide-react';
import { mockUser, mockProgressData } from '../utils/mockData';

export default function Dashboard() {
  const latestData = mockProgressData[mockProgressData.length - 1];
  
  const stats = [
    {
      title: 'Current Weight',
      value: `${latestData.weight} kg`,
      change: '-2.5 kg',
      trend: 'down',
      icon: Activity,
      color: 'bg-blue-500'
    },
    {
      title: 'Body Fat',
      value: `${latestData.bodyFat}%`,
      change: '-2%',
      trend: 'down',
      icon: Target,
      color: 'bg-green-500'
    },
    {
      title: 'Muscle Mass',
      value: `${latestData.muscleMass} kg`,
      change: '+1 kg',
      trend: 'up',
      icon: Zap,
      color: 'bg-orange-500'
    },
    {
      title: 'Weekly Workouts',
      value: latestData.workoutsCompleted,
      change: '+1',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Welcome back, {mockUser.name}!</h2>
        <p className="text-gray-600 mt-2">Here's your fitness progress overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-200 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <span className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-blue-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-600 text-sm">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Today's Goals</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <span className="font-medium text-blue-900">Complete workout</span>
              <div className="w-16 h-16 relative">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle cx="32" cy="32" r="28" stroke="#ddd" strokeWidth="4" fill="transparent" />
                  <circle cx="32" cy="32" r="28" stroke="#3B82F6" strokeWidth="4" fill="transparent" 
                    strokeDasharray={`${75 * 1.76} ${175.84}`} strokeLinecap="round" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-blue-600">75%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <span className="font-medium text-green-900">Water intake</span>
              <div className="w-16 h-16 relative">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle cx="32" cy="32" r="28" stroke="#ddd" strokeWidth="4" fill="transparent" />
                  <circle cx="32" cy="32" r="28" stroke="#10B981" strokeWidth="4" fill="transparent" 
                    strokeDasharray={`${60 * 1.76} ${175.84}`} strokeLinecap="round" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-green-600">60%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Zap className="text-white" size={16} />
              </div>
              <div>
                <p className="font-medium text-gray-900">Upper Body Strength completed</p>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Target className="text-white" size={16} />
              </div>
              <div>
                <p className="font-medium text-gray-900">Body analysis updated</p>
                <p className="text-sm text-gray-600">1 day ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Activity className="text-white" size={16} />
              </div>
              <div>
                <p className="font-medium text-gray-900">Weekly goal achieved</p>
                <p className="text-sm text-gray-600">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}