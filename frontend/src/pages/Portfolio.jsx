import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { portfolioProjects } from '../data/mock';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const industries = ['All', ...new Set(portfolioProjects.map(p => p.industry))];

  const filteredProjects = selectedFilter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.industry === selectedFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A2463] via-[#2E5BFF] to-[#0A2463] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Showcasing successful projects across diverse industries and technologies
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Filter className="text-gray-600" size={20} />
            {industries.map((industry) => (
              <Button
                key={industry}
                onClick={() => setSelectedFilter(industry)}
                className={`rounded-full transition-all duration-300 ${
                  selectedFilter === industry
                    ? 'bg-[#2E5BFF] text-white hover:bg-[#1e4bd6]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button
                      className="w-full bg-white text-[#0A2463] hover:bg-gray-100"
                    >
                      View Details
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-[#2E5BFF]/10 text-[#2E5BFF] hover:bg-[#2E5BFF]/20">
                    {project.industry}
                  </Badge>
                  <h3 className="text-2xl font-bold text-[#0A2463] mb-2 group-hover:text-[#2E5BFF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <CheckCircle2 size={20} className="text-[#10B981]" />
                    <span className="text-[#10B981] font-semibold">
                      {project.results}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-xl">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment and success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#2E5BFF] mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#2E5BFF] mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#2E5BFF] mb-2">15+</div>
              <div className="text-gray-600 font-medium">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#2E5BFF] mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A2463] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#0A2463] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0A2463] font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;