import React, { useState } from 'react';
import { Upload, Camera, TrendingDown, TrendingUp, Brain } from 'lucide-react';
import { BodyFatAnalysis } from '../types';
import { simulateBodyFatAnalysis } from '../utils/mockData';

export default function BodyFatAnalysisComponent() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<BodyFatAnalysis | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setAnalysis(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    if (imageFile) {
      handleFileSelect(imageFile);
    }
  };

  const analyzeImage = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    try {
      const result = await simulateBodyFatAnalysis(selectedFile);
      setAnalysis(result);
    } catch (error) {
      console.error('Analysis failed:', error);
    }
    setIsAnalyzing(false);
  };

  const previousAnalyses = [
    { date: '2025-01-22', bodyFat: 16.5, change: -0.5 },
    { date: '2025-01-15', bodyFat: 17.0, change: -0.5 },
    { date: '2025-01-08', bodyFat: 17.5, change: -0.3 },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">AI Body Fat Analysis</h2>
        <p className="text-gray-600 mt-2">Upload a photo for instant body composition analysis</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div 
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
              dragOver ? 'border-blue-400 bg-blue-50' : 'border-gray-300'
            }`}
            onDrop={handleDrop}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
          >
            {selectedFile ? (
              <div className="space-y-4">
                <img 
                  src={URL.createObjectURL(selectedFile)} 
                  alt="Selected" 
                  className="mx-auto max-h-64 rounded-lg"
                />
                <p className="text-sm text-gray-600">{selectedFile.name}</p>
                <button
                  onClick={analyzeImage}
                  disabled={isAnalyzing}
                  className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Analyzing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Brain size={20} />
                      <span>Analyze with AI</span>
                    </div>
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Upload className="text-blue-600" size={32} />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">Upload your photo</p>
                  <p className="text-gray-600">Drag and drop or click to select</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="file-upload"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileSelect(file);
                  }}
                />
                <label
                  htmlFor="file-upload"
                  className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  <Camera size={20} />
                  <span>Choose Photo</span>
                </label>
              </div>
            )}
          </div>

          {analysis && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analysis Results</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900">Body Fat</h4>
                  <p className="text-2xl font-bold text-blue-600">{analysis.bodyFatPercentage}%</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900">Muscle Mass</h4>
                  <p className="text-2xl font-bold text-green-600">{analysis.muscleMass} kg</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-600">AI Confidence: {Math.round(analysis.confidence)}%</span>
                <span className="text-gray-600">{new Date(analysis.date).toLocaleDateString()}</span>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Analysis History</h3>
          <div className="space-y-4">
            {previousAnalyses.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{item.bodyFat}% Body Fat</p>
                  <p className="text-sm text-gray-600">{item.date}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {item.change < 0 ? (
                    <TrendingDown className="text-green-500" size={20} />
                  ) : (
                    <TrendingUp className="text-red-500" size={20} />
                  )}
                  <span className={`font-medium ${
                    item.change < 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.change > 0 ? '+' : ''}{item.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Tips for Better Results</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Take photos in good lighting</li>
              <li>• Wear form-fitting clothing</li>
              <li>• Stand in a neutral position</li>
              <li>• Take photos at the same time of day</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}