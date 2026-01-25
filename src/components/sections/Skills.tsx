import React from 'react';
import { SKILLS } from '../../data/skills';

const getProficiencyColor = (proficiency: number) => {
  if (proficiency >= 75) return 'bg-green-100 text-green-800 border-green-300';
  if (proficiency >= 60) return 'bg-emerald-100 text-emerald-800 border-emerald-300';
  return 'bg-amber-100 text-amber-800 border-amber-300';
};

const getProficiencyLabel = (proficiency: number) => {
  if (proficiency >= 75) return 'Expert';
  if (proficiency >= 60) return 'Advanced';
  return 'Intermediate';
};

export function Skills() {
  const categories = [
    { label: 'GIS Tools', skills: SKILLS.gisTools },
    { label: 'Programming & Data', skills: SKILLS.programming },
    { label: 'Web Mapping', skills: SKILLS.webMapping },
    { label: 'Remote Sensing', skills: SKILLS.remoteSensing }
  ];

  return (
    <section id="skills" className="py-6 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Skills & Technologies</h2>
        
        {/* Skills grid by category */}
        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <div key={category.label} className="space-y-2">
              <h3 className="text-sm font-semibold text-green-900 uppercase tracking-wide opacity-75">{category.label}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${getProficiencyColor(
                      skill.proficiency
                    )}`}
                    title={`${skill.name} - ${getProficiencyLabel(skill.proficiency)}`}
                  >
                    <span>{skill.name}</span>
                    <span className="text-xs font-bold opacity-70">●</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency legend */}
        <div className="mt-6 pt-4 border-t border-green-100">
          <p className="text-xs text-gray-600 mb-2 font-medium">PROFICIENCY LEVELS</p>
          <div className="grid sm:grid-cols-3 gap-2">
            <div className="flex items-center gap-2">
              <div className="inline-block w-3 h-3 rounded-full bg-green-100 border border-green-300" />
              <span className="text-sm text-gray-700">Expert (75%+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="inline-block w-3 h-3 rounded-full bg-emerald-100 border border-emerald-300" />
              <span className="text-sm text-gray-700">Advanced (60-74%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="inline-block w-3 h-3 rounded-full bg-amber-100 border border-amber-300" />
              <span className="text-sm text-gray-700">Intermediate (&lt;60%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}