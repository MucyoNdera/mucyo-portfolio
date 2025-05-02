import React from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
}

export function SkillBar({ skill, percentage }: SkillBarProps) {
  return (
    <div className="mb-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-900">{skill}</span>
        <span className="text-sm text-gray-600">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full w-48">
        <div 
          className="h-full bg-green-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}