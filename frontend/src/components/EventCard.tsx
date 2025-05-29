import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { EventItem } from '../types';
import Card, { CardContent } from './ui/Card';

interface EventCardProps {
  event: EventItem;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dateObj = new Date(event.date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('en-US', { month: 'short' });

  return (
    <Card hoverable className="h-full overflow-hidden">
      <div className="flex h-full">
        <div className="flex-shrink-0 w-20 bg-blue-800 text-white flex flex-col items-center justify-center text-center p-2">
          <div className="text-2xl font-bold">{day}</div>
          <div className="text-sm uppercase">{month}</div>
        </div>
        <CardContent className="flex-grow p-4">
          <h3 className="text-lg font-bold mb-2">{event.title}</h3>
          <div className="text-sm text-slate-600 mb-3 line-clamp-2">
            {event.description}
          </div>
          <div className="flex flex-col space-y-1 text-sm text-slate-500">
            <div className="flex items-center">
              <Calendar size={14} className="mr-2" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-2" />
              <span>{event.location}</span>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default EventCard;