import React, { useState } from 'react';
import { Calendar, Image, Video } from 'lucide-react';
import { GalleryItem } from '../types';
import Card, { CardContent } from './ui/Card';

interface GalleryCardProps {
  item: GalleryItem;
  onView: (item: GalleryItem) => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, onView }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card 
      className="h-full cursor-pointer"
      onClick={() => onView(item)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 flex items-center justify-center">
          <div className={`rounded-full bg-white p-3 transform transition-all duration-300 ${isHovered ? 'scale-100 opacity-80' : 'scale-0 opacity-0'}`}>
            {item.type === 'image' ? <Image size={24} className="text-blue-800" /> : <Video size={24} className="text-blue-800" />}
          </div>
        </div>
        <div className="absolute top-2 right-2">
          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {item.category}
          </span>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-1 line-clamp-1">{item.title}</h3>
        <p className="text-slate-600 mb-2 text-sm line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center text-sm text-slate-500">
          <Calendar size={14} className="mr-1" />
          <span>{formattedDate}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;