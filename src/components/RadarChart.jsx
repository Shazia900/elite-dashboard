import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  { subject: 'File Alerts', A: 91, fullMark: 150 },
  { subject: 'User Alerts', A: 42, fullMark: 150 },
  { subject: 'Host Alerts', A: 59, fullMark: 150 },
  { subject: 'Network Alerts', A: 7, fullMark: 150 },
];

function ThreatRadarChart() {
  return (
    <RadarChart outerRadius={90} width={500} height={300} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Alerts" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
}

export default ThreatRadarChart;