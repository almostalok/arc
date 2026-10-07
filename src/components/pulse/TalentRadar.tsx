'use client';

import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

interface TalentRadarProps {
  scores: {
    academics: number;
    coding: number;
    development: number;
    communication: number;
    leadership: number;
    career: number;
  };
}

export function TalentRadar({ scores }: TalentRadarProps) {
  const data = [
    { subject: 'Academics', score: scores.academics, fullMark: 100 },
    { subject: 'Coding', score: scores.coding, fullMark: 100 },
    { subject: 'Development', score: scores.development, fullMark: 100 },
    { subject: 'Communication', score: scores.communication, fullMark: 100 },
    { subject: 'Leadership', score: scores.leadership, fullMark: 100 },
    { subject: 'Career', score: scores.career, fullMark: 100 },
  ];

  return (
    <div className="w-full h-64 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }}
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={{ fill: '#94a3b8', fontSize: 9 }}
          />
          <Radar
            name="Talent Score"
            dataKey="score"
            stroke="#4f46e5"
            fill="#6366f1"
            fillOpacity={0.35}
            dot={{ r: 3, fill: '#4338ca' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
