import React, { useState, useEffect } from 'react';
import { Search, Filter, Calendar, ArrowDownAZ, CheckCircle, Clock, LayoutGrid, LayoutList } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';

const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('year');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Extract unique filters
  const years = Array.from(new Set(projectsData.map(project => project.year))).sort((a, b) => b - a);
  const categories = Array.from(new Set(projectsData.map(project => project.category)));
  const departments = Array.from(new Set(projectsData.map(project => project.department)));
  const statuses = Array.from(new Set(projectsData.map(project => project.status)));
  
  // Filter and sort projects
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = selectedYear ? project.year === selectedYear : true;
    const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
    const matchesDepartment = selectedDepartment ? project.department === selectedDepartment : true;
    const matchesStatus = selectedStatus ? project.status === selectedStatus : true;
    
    return matchesSearch && matchesYear && matchesCategory && matchesDepartment && matchesStatus;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'year':
        return b.year - a.year;
      case 'title':
        return a.title.localeCompare(b.title);
      case 'status':
        return a.status.localeCompare(b.status);
      default:
        return 0;
    }
  });

  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedYear(null);
    setSelectedCategory(null);
    setSelectedDepartment(null);
    setSelectedStatus(null);
    setSortBy('year');
  };

  // AI recommendations (simulated)
  const [recommendations, setRecommendations] = useState<number[]>([]);
  
  useEffect(() => {
    // Simulate AI recommendations based on selected filters
    if (selectedCategory || selectedDepartment) {
      const recommendedProjects = projectsData
        .filter(project => 
          (selectedCategory && project.category === selectedCategory) ||
          (selectedDepartment && project.department === selectedDepartment)
        )
        .sort(() => 0.5 - Math.random()) // Shuffle
        .slice(0, 3) // Take first 3
        .map(project => project.id);
      
      setRecommendations(recommendedProjects);
    } else {
      // Default recommendations
      setRecommendations([1, 3, 6]);
    }
  }, [selectedCategory, selectedDepartment]);

  const recommendedProjects = projectsData.filter(project => recommendations.includes(project.id));

  const renderProjectList = (projects: typeof projectsData) => {
    if (viewMode === 'grid') {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="space-y-4">
          {projects.map(project => (
            <Card key={project.id} hoverable>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 h-40 md:h-auto">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <CardContent className="md:w-3/4 p-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1 text-slate-500" />
                      <span className="text-slate-500 text-sm">{project.year}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {project.description.length > 150 ? `${project.description.substring(0, 150)}...` : project.description}
                  </p>
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="flex items-center text-sm text-slate-500 mb-2 md:mb-0">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === 'completed' ? 'bg-green-100 text-green-800' : 
                        project.status === 'ongoing' ? 'bg-blue-100 text-blue-800' : 
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {project.status === 'completed' ? <CheckCircle size={12} className="mr-1" /> : 
                         project.status === 'ongoing' ? <Clock size={12} className="mr-1" /> : 
                         <Calendar size={12} className="mr-1" />}
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      );
    }
  };

  return (
    <main id="skip-to-main">
      {/* Hero Banner */}
      <div className="relative py-20 bg-blue-800">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <Container className="relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Government Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore the various projects initiated and implemented by the government.
          </p>
        </Container>
      </div>

      {/* Search and Filters */}
      <Section background="light">
        <div className="mb-8">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search for projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center">
                <Filter size={18} className="mr-2" /> Filters
              </h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={resetFilters}
              >
                Reset All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year
                </label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={selectedYear || ''}
                  onChange={(e) => setSelectedYear(e.target.value ? parseInt(e.target.value) : null)}
                >
                  <option value="">All Years</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={selectedCategory || ''}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Department Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={selectedDepartment || ''}
                  onChange={(e) => setSelectedDepartment(e.target.value || null)}
                >
                  <option value="">All Departments</option>
                  {departments.map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={selectedStatus || ''}
                  onChange={(e) => setSelectedStatus(e.target.value || null)}
                >
                  <option value="">All Statuses</option>
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Sort and View Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="mb-4 sm:mb-0">
            <label className="text-sm font-medium text-gray-700 mr-2">Sort by:</label>
            <div className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-l-md ${
                  sortBy === 'year' 
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-300`}
                onClick={() => setSortBy('year')}
              >
                <Calendar size={14} className="mr-1" />
                Year
              </button>
              <button
                type="button"
                className={`inline-flex items-center px-4 py-2 text-sm font-medium ${
                  sortBy === 'title' 
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border-t border-b border-r border-gray-300`}
                onClick={() => setSortBy('title')}
              >
                <ArrowDownAZ size={14} className="mr-1" />
                Title
              </button>
              <button
                type="button"
                className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-r-md ${
                  sortBy === 'status' 
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border-t border-b border-r border-gray-300`}
                onClick={() => setSortBy('status')}
              >
                <CheckCircle size={14} className="mr-1" />
                Status
              </button>
            </div>
          </div>
          
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-l-md ${
                viewMode === 'grid' 
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <LayoutGrid size={16} />
            </button>
            <button
              type="button"
              className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-r-md ${
                viewMode === 'list' 
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-r border-gray-300`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <LayoutList size={16} />
            </button>
          </div>
        </div>

        {/* Results Stats */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Showing {filteredProjects.length} of {projectsData.length} projects
          </p>
        </div>

        {/* Results */}
        {filteredProjects.length > 0 ? (
          renderProjectList(filteredProjects)
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={resetFilters}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </Section>

      {/* AI Recommendations */}
      {recommendations.length > 0 && (
        <Section title="Recommended Projects" subtitle="Projects you might be interested in based on your activity" background="white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>
      )}

      {/* Project Statistics */}
      <Section title="Project Statistics" subtitle="Overview of government projects by category and status">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Projects by Category */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Projects by Category</h3>
            <div className="space-y-4">
              {categories.map(category => {
                const count = projectsData.filter(p => p.category === category).length;
                const percentage = Math.round((count / projectsData.length) * 100);
                
                return (
                  <div key={category}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{category}</span>
                      <span className="text-sm font-medium text-gray-700">{count} projects</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-700 h-2.5 rounded-full" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Projects by Status */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Projects by Status</h3>
            <div className="space-y-4">
              {statuses.map(status => {
                const count = projectsData.filter(p => p.status === status).length;
                const percentage = Math.round((count / projectsData.length) * 100);
                
                const statusColors = {
                  completed: 'bg-green-600',
                  ongoing: 'bg-blue-600',
                  planned: 'bg-amber-600',
                };
                
                return (
                  <div key={status}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </span>
                      <span className="text-sm font-medium text-gray-700">{count} projects</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`${statusColors[status as keyof typeof statusColors]} h-2.5 rounded-full`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ProjectsPage;