import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryViewerProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const GalleryViewer: React.FC<GalleryViewerProps> = ({
  item,
  onClose,
  onNext,
  onPrevious,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  if (!item) return null;

  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 p-2"
          aria-label="Close gallery viewer"
        >
          <X size={24} />
        </button>
      </div>

      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2"
        aria-label="Previous item"
      >
        <ChevronLeft size={36} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2"
        aria-label="Next item"
      >
        <ChevronRight size={36} />
      </button>

      <div className="max-w-5xl w-full bg-white rounded-lg overflow-hidden shadow-2xl">
        <div className="p-4 bg-blue-800 text-white">
          <h2 className="text-xl font-bold">{item.title}</h2>
        </div>

        <div className="relative">
          {item.type === 'image' ? (
            <img
              src={item.url}
              alt={item.title}
              className="w-full object-cover"
              style={{ maxHeight: '70vh' }}
            />
          ) : (
            <div className="aspect-video bg-black">
              <iframe
                src={item.url}
                title={item.title}
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        <div className="p-4 bg-white">
          <p className="text-gray-700 mb-4">{item.description}</p>
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-500">
            <div className="flex items-center mb-2 mr-4">
              <Calendar size={16} className="mr-1" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center mb-2">
              <Tag size={16} className="mr-1" />
              <span>{item.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryViewer;