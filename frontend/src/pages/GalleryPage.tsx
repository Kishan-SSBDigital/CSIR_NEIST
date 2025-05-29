import React, { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, Image, Video } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import GalleryCard from '../components/GalleryCard';
import GalleryViewer from '../components/GalleryViewer';
import { galleryData } from '../data/gallery';
import { GalleryItem } from '../types';
import Button from '../components/ui/Button';

const GalleryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<'all' | 'image' | 'video'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Extract unique categories
  const categories = Array.from(
    new Set(galleryData.map((item) => item.category))
  );

  // Filter gallery items
  const filteredItems = galleryData.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchesType = selectedType === 'all' ? true : item.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  // Handle gallery item selection
  const handleViewItem = (item: GalleryItem) => {
    setSelectedItem(item);
    const index = filteredItems.findIndex(i => i.id === item.id);
    setCurrentIndex(index);
  };

  // Handle navigation in gallery viewer
  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedItem(filteredItems[currentIndex + 1]);
    } else {
      // Loop back to the first item
      setCurrentIndex(0);
      setSelectedItem(filteredItems[0]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedItem(filteredItems[currentIndex - 1]);
    } else {
      // Loop to the last item
      setCurrentIndex(filteredItems.length - 1);
      setSelectedItem(filteredItems[filteredItems.length - 1]);
    }
  };

  return (
    <main id="skip-to-main">
      {/* Hero Banner */}
      <div className="relative py-20 bg-blue-800">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <Container className="relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Media Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore photos and videos from government events, projects, and initiatives.
          </p>
        </Container>
      </div>

      {/* Search and Filter */}
      <Section background="light">
        <div className="max-w-4xl mx-auto mb-8">
          {/* Search */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search gallery..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter */}
          <div className="mb-6">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-left focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <div className="flex items-center">
                <Filter className="h-5 w-5 text-gray-400 mr-2" />
                <span>Filter options</span>
              </div>
              <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${filterOpen ? 'transform rotate-180' : ''}`} />
            </button>

            {filterOpen && (
              <div className="mt-2 p-4 bg-white border border-gray-300 rounded-md shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                  {/* Type Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Media Type
                    </label>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedType('all')}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${
                          selectedType === 'all' 
                            ? 'bg-blue-700 text-white' 
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setSelectedType('image')}
                        className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                          selectedType === 'image' 
                            ? 'bg-blue-700 text-white' 
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <Image size={16} className="mr-2" /> Images
                      </button>
                      <button
                        onClick={() => setSelectedType('video')}
                        className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                          selectedType === 'video' 
                            ? 'bg-blue-700 text-white' 
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <Video size={16} className="mr-2" /> Videos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Stats */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Showing {filteredItems.length} of {galleryData.length} media items
          </p>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <GalleryCard key={item.id} item={item} onView={handleViewItem} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No media items found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search or filter criteria.
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory(null);
                setSelectedType('all');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </Section>

      {/* Featured Galleries */}
      <Section title="Featured Collections" subtitle="Curated collections of photos and videos">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 overflow-hidden rounded-lg group">
            <img 
              src="https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="National Day Celebrations" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-1">National Day Celebrations</h3>
                <p className="text-sm opacity-80 mb-2">15 photos</p>
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-slate-900">
                  View Collection
                </Button>
              </div>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-lg group">
            <img 
              src="https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Infrastructure Projects" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-1">Infrastructure Projects</h3>
                <p className="text-sm opacity-80 mb-2">23 photos, 3 videos</p>
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-slate-900">
                  View Collection
                </Button>
              </div>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-lg group">
            <img 
              src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Digital Initiatives" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-1">Digital Initiatives</h3>
                <p className="text-sm opacity-80 mb-2">10 photos, 5 videos</p>
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-slate-900">
                  View Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery Viewer Modal */}
      {selectedItem && (
        <GalleryViewer
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </main>
  );
};

export default GalleryPage;