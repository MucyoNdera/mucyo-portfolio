
      import React from 'react';
      import { ExternalLink, BookOpen } from 'lucide-react';
      
      export function Publications() {
        const publications = [
                    {
            title: "Assessing forest cover and tree density dynamics in the Congo–Nile Divide region, Western Rwanda",
            link: "https://doi.org/10.20935/AcadEnvSci7864",
            year: "2025"
          },
          {
            title: "Regulatory and socio-economic factors shaping forest landscape restoration in the Congo–Nile Crest",
            link: "https://doi.org/10.20935/AcadEnvSci7794",
            year: "2025"
          },
          {
            title: "Unveiling the resilience of unprotected wetlands through a comprehensive wetland health index assessment, Rwanda: The case of Kiyonga wetland",
            link: "https://doi.org/10.4314/rjeste.v7i1.13",
            year: "2025"
          },
          {
            title: "Spatial-Temporal Analysis of Linkage Between Urbanization and Urban Agriculture in Kigali city, Case Study Gahanga Cell",
            link: "http://dx.doi.org/10.13140/RG.2.2.36098.29126",
            year: "2023"
          },
          {
            title: "Wind Energy Siting Optimization in Fujian Province, China",
            link: "https://doi.org/10.3390/su162411103",
            year: "2024"
          },
          {
            title: "Prevalence and Factors Associated with Intestinal Helminthiases and Schistosomiasis Among Preschool – Aged Children in Rwanda",
            link: "https://doi.org/10.20944/preprints202410.1080.v1",
            year: "2024"
          },
          {
            title: "Geospatial Analysis of Wind Energy Siting Suitability in the East African Community",
            link: "https://doi.org/10.3390/su16041514",
            year: "2024"
          }
        ];
      
        return (
          <section id="publications" className="py-16 bg-white/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-green-900 mb-8">Publications</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {publications.map((pub, index) => (
                  <div 
                    key={index} 
                    className="bg-white/90 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100"
                  >
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-green-700 flex-shrink-0 mt-1" />
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h3 className="text-sm font-medium text-gray-900 flex-1">
                            {pub.title}
                          </h3>
                          <span className="text-xs text-green-700 font-medium whitespace-nowrap">
                            {pub.year}
                          </span>
                        </div>
                        <a 
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-amber-700 hover:text-amber-800 text-xs transition-colors duration-150"
                        >
                          View Publication
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      }