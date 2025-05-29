import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsItem } from '../types';
import Card, { CardContent } from './ui/Card';

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, featured = false }) => {
  const formattedDate = new Date(news.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (featured) {
    return (
      <Card hoverable className="h-full">
        <div className="flex flex-col h-full">
          <div className="relative h-48 overflow-hidden">
            <img
              src={news.image || 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              alt={news.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4">
              <span className="text-xs font-medium bg-blue-700 px-2 py-1 rounded">
                {news.category}
              </span>
            </div>
          </div>
          <CardContent className="flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 line-clamp-2">
              <Link to={`/news/${news.id}`} className="hover:text-blue-700 transition-colors">
                {news.title}
              </Link>
            </h3>
            <p className="text-slate-600 mb-4 line-clamp-3">
              {news.content}
            </p>
            <div className="mt-auto flex items-center text-sm text-slate-500">
              <Calendar size={14} className="mr-1" />
              <span>{formattedDate}</span>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <Card hoverable className="h-full">
      <div className="flex flex-col md:flex-row h-full">
        {news.image && (
          <div className="md:w-1/3 h-32 md:h-auto overflow-hidden">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <CardContent className={`flex-grow ${news.image ? 'md:w-2/3' : 'w-full'}`}>
          <div className="mb-2">
            <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {news.category}
            </span>
          </div>
          <h3 className="text-lg font-bold mb-1 line-clamp-2">
            <Link to={`/news/${news.id}`} className="hover:text-blue-700 transition-colors">
              {news.title}
            </Link>
          </h3>
          <p className="text-slate-600 mb-2 text-sm line-clamp-2">
            {news.content}
          </p>
          <div className="flex items-center text-sm text-slate-500">
            <Calendar size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default NewsCard;