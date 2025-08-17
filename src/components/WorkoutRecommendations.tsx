import React, { useState } from 'react';
import { Play, Clock, Zap, Target, CheckCircle } from 'lucide-react';
import { mockWorkoutPlans } from '../utils/mockData';

export default function WorkoutRecommendations() {
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'strength': return 'bg-blue-100 text-blue-800';
      case 'cardio': return 'bg-red-100 text-red-800';
      case 'flexibility': return 'bg-green-100 text-green-800';
      case 'mixed': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleExerciseCompletion = (exerciseName: string) => {
    const newCompleted = new Set(completedExercises);
    if (newCompleted.has(exerciseName)) {
      newCompleted.delete(exerciseName);
    } else {
      newCompleted.add(exerciseName);
    }
    setCompletedExercises(newCompleted);
  };

  const selectedPlan = mockWorkoutPlans.find(plan => plan.id === selectedWorkout);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Workout Recommendations</h2>
        <p className="text-gray-600 mt-2">AI-personalized workouts based on your goals and progress</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Available Workouts</h3>
          <div className="space-y-4">
            {mockWorkoutPlans.map((workout) => (
              <div
                key={workout.id}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedWorkout === workout.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
                onClick={() => setSelectedWorkout(workout.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900">{workout.name}</h4>
                  <Play className={selectedWorkout === workout.id ? 'text-blue-500' : 'text-gray-400'} size={20} />
                </div>
                
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{workout.duration} min</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(workout.difficulty)}`}>
                    {workout.difficulty}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(workout.type)}`}>
                    {workout.type}
                  </span>
                  <span className="text-sm text-gray-600">{workout.exercises.length} exercises</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          {selectedPlan ? (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedPlan.name}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} className="text-gray-500" />
                      <span className="text-gray-600">{selectedPlan.duration} minutes</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(selectedPlan.difficulty)}`}>
                      {selectedPlan.difficulty}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(selectedPlan.type)}`}>
                      {selectedPlan.type}
                    </span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                  Start Workout
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Exercises</h4>
                {selectedPlan.exercises.map((exercise, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      completedExercises.has(exercise.name)
                        ? 'border-green-300 bg-green-50'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => toggleExerciseCompletion(exercise.name)}
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                            completedExercises.has(exercise.name)
                              ? 'border-green-500 bg-green-500 text-white'
                              : 'border-gray-300 text-gray-300 hover:border-green-400'
                          }`}
                        >
                          <CheckCircle size={16} />
                        </button>
                        <div>
                          <h5 className="font-semibold text-gray-900">{exercise.name}</h5>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{exercise.sets} sets</span>
                            <span>{exercise.reps} reps</span>
                            <span>{exercise.restTime}s rest</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-300">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="text-blue-600" size={20} />
                  <h5 className="font-semibold text-blue-900">Workout Tips</h5>
                </div>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Warm up for 5-10 minutes before starting</li>
                  <li>• Focus on proper form over speed</li>
                  <li>• Stay hydrated throughout your workout</li>
                  <li>• Cool down with light stretching</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <Zap className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Select a workout to begin</h3>
              <p className="text-gray-500">Choose from our AI-recommended workouts based on your fitness level and goals.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}