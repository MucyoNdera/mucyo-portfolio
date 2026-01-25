import React from 'react';
import { SkillBar } from '../ui/SkillBar';

interface SkillCardProps {
  title: string;
  skills: Array<{ id: string; name: string; proficiency: number }>;
}

export function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-white/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-semibold text-green-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {skills.map((skill) => (
          <SkillBar key={skill.id} skill={skill.name} percentage={skill.proficiency} />
        ))}
      </div>
    </div>
  );
}