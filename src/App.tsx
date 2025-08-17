import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import BodyFatAnalysis from './components/BodyFatAnalysis';
import WorkoutRecommendations from './components/WorkoutRecommendations';
import NutritionPlan from './components/NutritionPlan';
import ProgressCharts from './components/ProgressCharts';
import Profile from './components/Profile';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'analysis':
        return <BodyFatAnalysis />;
      case 'workouts':
        return <WorkoutRecommendations />;
      case 'nutrition':
        return <NutritionPlan />;
      case 'progress':
        return <ProgressCharts />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;