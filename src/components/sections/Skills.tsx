import React from 'react';
import { SkillCard } from '../cards/SkillCard';
import { SKILLS } from '../../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard title="GIS Tools" skills={SKILLS.gisTools} />
          <SkillCard title="Programming & Data Analysis" skills={SKILLS.programming} />
          <SkillCard title="Web Mapping" skills={SKILLS.webMapping} />
          <SkillCard title="Remote Sensing" skills={SKILLS.remoteSensing} />
        </div>
      </div>
    </section>
  );
}