import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { ServiceItem } from '../types';
import Card, { CardContent } from './ui/Card';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as Record<string, React.FC<any>>)[service.icon] || LucideIcons.FileQuestion;

  return (
    <Card hoverable className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 text-blue-700">
          <IconComponent size={36} />
        </div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-slate-600 mb-4 flex-grow">{service.description}</p>
        <Link 
          to={service.link} 
          className="inline-flex items-center font-medium text-blue-700 hover:text-blue-800 transition-colors mt-auto"
        >
          Learn More <ArrowRight size={16} className="ml-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;