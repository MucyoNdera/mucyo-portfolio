import React from 'react';
import { ProjectCard } from '../cards/ProjectCard';
import { PROJECTS } from '../../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}