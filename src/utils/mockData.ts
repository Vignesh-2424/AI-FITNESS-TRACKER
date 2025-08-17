import { User, BodyFatAnalysis, WorkoutPlan, NutritionPlan, ProgressData } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  age: 28,
  height: 175,
  weight: 70,
  fitnessLevel: 'intermediate',
  goals: ['lose_fat', 'build_muscle', 'improve_endurance']
};

export const mockProgressData: ProgressData[] = [
  { date: '2025-01-01', weight: 75, bodyFat: 18, muscleMass: 35, workoutsCompleted: 4 },
  { date: '2025-01-08', weight: 74, bodyFat: 17.5, muscleMass: 35.2, workoutsCompleted: 5 },
  { date: '2025-01-15', weight: 73.5, bodyFat: 17, muscleMass: 35.5, workoutsCompleted: 6 },
  { date: '2025-01-22', weight: 73, bodyFat: 16.5, muscleMass: 35.8, workoutsCompleted: 5 },
  { date: '2025-01-29', weight: 72.5, bodyFat: 16, muscleMass: 36, workoutsCompleted: 6 },
];

export const mockWorkoutPlans: WorkoutPlan[] = [
  {
    id: '1',
    name: 'Upper Body Strength',
    type: 'strength',
    duration: 45,
    difficulty: 'medium',
    exercises: [
      { name: 'Push-ups', sets: 3, reps: 12, restTime: 60 },
      { name: 'Pull-ups', sets: 3, reps: 8, restTime: 90 },
      { name: 'Dumbbell Rows', sets: 3, reps: 10, restTime: 60 },
      { name: 'Shoulder Press', sets: 3, reps: 12, restTime: 60 }
    ]
  },
  {
    id: '2',
    name: 'HIIT Cardio',
    type: 'cardio',
    duration: 30,
    difficulty: 'hard',
    exercises: [
      { name: 'Burpees', sets: 4, reps: 10, restTime: 30 },
      { name: 'Mountain Climbers', sets: 4, reps: 20, restTime: 30 },
      { name: 'Jump Squats', sets: 4, reps: 15, restTime: 30 },
      { name: 'High Knees', sets: 4, reps: 20, restTime: 30 }
    ]
  }
];

export const mockNutritionPlan: NutritionPlan = {
  id: '1',
  name: 'Balanced Muscle Building',
  calories: 2400,
  protein: 150,
  carbs: 240,
  fats: 80,
  meals: [
    { name: 'Protein Smoothie Bowl', time: '07:00', calories: 450, description: 'Greek yogurt, berries, protein powder, nuts' },
    { name: 'Grilled Chicken Salad', time: '12:30', calories: 550, description: 'Lean chicken breast, mixed greens, quinoa, olive oil' },
    { name: 'Pre-Workout Snack', time: '15:30', calories: 200, description: 'Banana with almond butter' },
    { name: 'Salmon & Vegetables', time: '19:00', calories: 600, description: 'Grilled salmon, roasted vegetables, brown rice' },
    { name: 'Evening Protein', time: '21:30', calories: 300, description: 'Greek yogurt with nuts and honey' }
  ]
};

export const simulateBodyFatAnalysis = (imageFile: File): Promise<BodyFatAnalysis> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bodyFatPercentage = Math.random() * 10 + 10; // 10-20%
      const muscleMass = Math.random() * 5 + 30; // 30-35kg
      
      resolve({
        id: Date.now().toString(),
        date: new Date().toISOString(),
        imageUrl: URL.createObjectURL(imageFile),
        bodyFatPercentage: Math.round(bodyFatPercentage * 10) / 10,
        muscleMass: Math.round(muscleMass * 10) / 10,
        confidence: Math.random() * 15 + 85 // 85-100%
      });
    }, 2000); // Simulate AI processing time
  });
};