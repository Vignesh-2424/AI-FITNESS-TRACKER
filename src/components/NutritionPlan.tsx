import React from 'react';
import { Apple, Clock, Zap, TrendingUp } from 'lucide-react';
import { mockNutritionPlan } from '../utils/mockData';

export default function NutritionPlan() {
  const plan = mockNutritionPlan;
  
  const macros = [
    { name: 'Protein', value: plan.protein, color: 'bg-blue-500', percentage: (plan.protein * 4 / plan.calories * 100) },
    { name: 'Carbs', value: plan.carbs, color: 'bg-green-500', percentage: (plan.carbs * 4 / plan.calories * 100) },
    { name: 'Fats', value: plan.fats, color: 'bg-orange-500', percentage: (plan.fats * 9 / plan.calories * 100) },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Nutrition Plan</h2>
        <p className="text-gray-600 mt-2">Personalized meal recommendations for your fitness goals</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Zap className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Daily Calories</h3>
              <p className="text-2xl font-bold text-blue-600">{plan.calories}</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">75% of daily goal</p>
        </div>

        {macros.map((macro, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{macro.name}</h3>
              <span className="text-2xl font-bold text-gray-800">{macro.value}g</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className={`h-2 rounded-full ${macro.color}`} style={{ width: `${macro.percentage}%` }}></div>
            </div>
            <p className="text-sm text-gray-600">{Math.round(macro.percentage)}% of calories</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Today's Meals</h3>
          <div className="space-y-4">
            {plan.meals.map((meal, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{meal.name}</h4>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{meal.time}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{meal.description}</p>
                <div className="flex items-center space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    {meal.calories} cal
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Weekly Progress</h3>
            <div className="space-y-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                <div key={day} className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">{day}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">
                      {Math.round(Math.random() * 400 + 2000)} cal
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nutrition Tips</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                <Apple className="text-green-600 mt-1" size={16} />
                <div>
                  <h4 className="font-medium text-green-900">Eat the rainbow</h4>
                  <p className="text-sm text-green-800">Include colorful fruits and vegetables for optimal nutrition</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <TrendingUp className="text-blue-600 mt-1" size={16} />
                <div>
                  <h4 className="font-medium text-blue-900">Stay hydrated</h4>
                  <p className="text-sm text-blue-800">Aim for 8-10 glasses of water daily for optimal performance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                <Clock className="text-orange-600 mt-1" size={16} />
                <div>
                  <h4 className="font-medium text-orange-900">Meal timing</h4>
                  <p className="text-sm text-orange-800">Eat within 2 hours after workouts for optimal recovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}