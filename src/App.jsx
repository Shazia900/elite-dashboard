import React from 'react';
import RadarChart from './components/RadarChart';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Elite Threat Radar</h1>
      <RadarChart />
    </div>
  );
}

export default App;
