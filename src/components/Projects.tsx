import React, { useState } from 'react';
import { ExternalLink, Github, Eye, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "programming",
      description: "Platform e-commerce full-stack dengan fitur payment gateway, inventory management, dan analytics dashboard real-time.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: 2,
      title: "Digital Marketing Campaign",
      category: "marketing",
      description: "Kampanye digital marketing terintegrasi untuk startup fintech yang meningkatkan conversion rate hingga 300%.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Google Ads", "Facebook Ads", "Analytics", "SEO"],
      links: {
        case_study: "#",
        analytics: "#"
      }
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "illustration",
      description: "Desain identitas visual lengkap untuk tech startup, termasuk logo, ilustrasi custom, dan brand guidelines.",
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Adobe Illustrator", "Figma", "Procreate", "Brand Strategy"],
      links: {
        behance: "#",
        portfolio: "#"
      }
    },
    {
      id: 4,
      title: "Tech Tutorial Series",
      category: "content",
      description: "Serial konten edukatif programming dan digital marketing dengan 500K+ views dan engagement rate tinggi.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Video Production", "Motion Graphics", "Content Strategy"],
      links: {
        youtube: "#",
        instagram: "#"
      }
    },
    {
      id: 5,
      title: "SaaS Analytics Dashboard",
      category: "programming",
      description: "Dashboard analytics untuk SaaS platform dengan real-time data visualization dan predictive insights.",
      image: "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: 6,
      title: "SEO Optimization Project",
      category: "marketing",
      description: "Optimisasi SEO komprehensif yang meningkatkan organic traffic klien sebesar 450% dalam 6 bulan.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Technical SEO", "Content Strategy", "Link Building"],
      links: {
        case_study: "#",
        report: "#"
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'Semua' },
    { id: 'programming', label: 'Programming' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'illustration', label: 'Ilustrasi' },
    { id: 'content', label: 'Content' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Proyek Unggulan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Koleksi karya terpilih yang menampilkan integrasi antara teknologi, strategi pemasaran, dan kreativitas
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3">
                    {Object.entries(project.links).map(([key, link]) => (
                      <a
                        key={key}
                        href={link}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-purple-500/20 transition-colors duration-300"
                      >
                        {key === 'github' && <Github size={16} />}
                        {key === 'demo' && <ExternalLink size={16} />}
                        {key === 'case_study' && <TrendingUp size={16} />}
                        {key === 'analytics' && <TrendingUp size={16} />}
                        {key === 'behance' && <Eye size={16} />}
                        {key === 'portfolio' && <Eye size={16} />}
                        {key === 'youtube' && <Eye size={16} />}
                        {key === 'instagram' && <Eye size={16} />}
                        {key === 'report' && <Eye size={16} />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;