export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  height: number;
  weight: number;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  goals: string[];
  avatar?: string;
}

export interface BodyFatAnalysis {
  id: string;
  date: string;
  imageUrl: string;
  bodyFatPercentage: number;
  muscleMass: number;
  confidence: number;
}

export interface WorkoutPlan {
  id: string;
  name: string;
  type: 'strength' | 'cardio' | 'flexibility' | 'mixed';
  duration: number;
  difficulty: 'easy' | 'medium' | 'hard';
  exercises: Exercise[];
}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  duration?: number;
  restTime: number;
}

export interface NutritionPlan {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  meals: Meal[];
}

export interface Meal {
  name: string;
  time: string;
  calories: number;
  description: string;
}

export interface ProgressData {
  date: string;
  weight: number;
  bodyFat: number;
  muscleMass: number;
  workoutsCompleted: number;
}