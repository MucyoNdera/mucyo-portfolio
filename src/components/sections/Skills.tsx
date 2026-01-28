import React from 'react';
import { SKILLS } from '../../data/skills';

const getProficiencyColor = (proficiency: number) => {
  if (proficiency >= 75) return 'bg-fog text-forest border-moss';
  if (proficiency >= 60) return 'bg-offwhite text-pine border-sand';
  return 'bg-sand/40 text-slate border-sand';
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
    <section id="skills" className="py-12 bg-white/80">
      <div className="page-container">
        <h2 className="text-3xl font-bold text-forest mb-6">Geospatial Skills</h2>
        
        {/* Skills grid by category */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div key={category.label} className="space-y-1.5">
              <h3 className="text-xs font-semibold text-forest uppercase tracking-wider opacity-70">{category.label}</h3>
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
                    <span className="text-xs font-bold opacity-70">*</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency legend */}
        <div className="mt-5 pt-3 border-t border-sand/50">
          <p className="text-xs text-gray-600 mb-1.5 font-semibold uppercase tracking-wide opacity-70">Proficiency Levels</p>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-1.5">
              <div className="inline-block w-2.5 h-2.5 rounded-full bg-fog border border-moss" />
              <span className="text-xs text-gray-700">Expert (75%+)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="inline-block w-2.5 h-2.5 rounded-full bg-offwhite border border-sand" />
              <span className="text-xs text-gray-700">Advanced (60-74%)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="inline-block w-2.5 h-2.5 rounded-full bg-sand/40 border border-sand" />
              <span className="text-xs text-gray-700">Intermediate (&lt;60%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
