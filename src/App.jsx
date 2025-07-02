import React from 'react';
import RadarChart from './components/RadarChart';

function App() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold mb-4">Elite Threat Radar</h1>
      <RadarChart />
    </div>
  );
}

export default App;