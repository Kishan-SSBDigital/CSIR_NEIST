import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Building } from 'lucide-react';
import { ProjectItem } from '../types';
import Card, { CardContent } from './ui/Card';

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    ongoing: 'bg-blue-100 text-blue-800',
    planned: 'bg-amber-100 text-amber-800',
  };

  return (
    <Card hoverable className="h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <span className={`text-xs font-medium px-2 py-1 rounded ${statusColors[project.status]}`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between mb-2">
          <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">
            {project.category}
          </span>
          <div className="flex items-center text-slate-500 text-xs">
            <Calendar size={12} className="mr-1" />
            <span>{project.year}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">
          <Link to={`/projects/${project.id}`} className="hover:text-blue-700 transition-colors">
            {project.title}
          </Link>
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex items-center text-sm text-slate-500 mb-4">
          <Building size={14} className="mr-1" />
          <span>{project.department}</span>
        </div>
        <Link 
          to={`/projects/${project.id}`} 
          className="inline-flex items-center font-medium text-blue-700 hover:text-blue-800 transition-colors"
        >
          View Details <ArrowRight size={16} className="ml-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;