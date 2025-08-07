import React from 'react';
import { ProjectCard } from '../cards/ProjectCard';

export function Projects() {
  const projects = [
    {
      title: "Climate Adaptation",
      description: `This project aims to enhance local resilience to climate change through a multifaceted approach. The project is conducting a comprehensive inventory of data to support climate adaptation efforts and establish mechanisms for broader local consultation, incorporating traditional knowledge into policy-making.`,
      image: "./images/adaptationteam.jpeg",
      projectLink: "https://ganzafrica.org/projects/the-climate-adaptation-project-in-musanze-district-rwanda/",
      storymapLink: "https://storymaps.arcgis.com/stories/d15dd9b68d9f4cd595b300fa5edbe0b8",
      datasetLink: "#climate-dataset"
    },
    {
      title: "Effectiveness of Forest Landscape Restoration",
      description: `This research project successfully evaluated the effectiveness of ecosystem-based forest landscape restoration (EB-FLR) initiatives under changing land use, land cover, and climate conditions in Rwanda's Congo Nile Crest Agro-Ecological Zone.`,
      image: "./images/MucyoNderaTuyizere_CARN.jpg",
      projectLink: "https://conservationactionresearch.net/project/mucyo-ndera-tuyizere",
      storymapLink: "https://storymaps.arcgis.com/stories/59ec67e48507448a82e5339be2ebb78c",
      datasetLink: "#forest-dataset"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}