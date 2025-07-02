import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'File Alerts', A: 91, fullMark: 150 },
  { subject: 'User Alerts', A: 42, fullMark: 150 },
  { subject: 'Host Alerts', A: 59, fullMark: 150 },
  { subject: 'Network Alerts', A: 7, fullMark: 150 },
  { subject: 'Email Alerts', A: 80, fullMark: 150 },
  { subject: 'Browser Alerts', A: 60, fullMark: 150 },
];

function ThreatRadarChart() {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis domain={[0, 150]} />
          <Radar name="Alerts" dataKey="A" stroke="#4f46e5" fill="#6366f1" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ThreatRadarChart;
