import React from 'react';
import { DatasetCard } from '../cards/DatasetCard';

export function Data() {
  const datasets = [
    {
      title: "Climate Adaptation Dataset",
      description: "Comprehensive dataset including weather, topographic, land use land cover, soil data for the whole country.",
      link: "#"
    },
    {
      title: "Forest Cover Data",
      description: "Rwanda forest cover and tree density data of 2009 and 2019. Tree density generated using deep learning model and AI while forest cover data sourced from Rwanda Forest Authority (RFA) as products of nation wide forest mapping using high resolution aerial imagery.",
      link: "#"
    }
  ];

  return (
    <section id="data" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Data</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {datasets.map((dataset, index) => (
            <DatasetCard key={index} {...dataset} />
          ))}
        </div>
      </div>
    </section>
  );
}