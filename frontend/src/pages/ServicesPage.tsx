import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/services';
import AIAssistant from '../components/AIAssistant';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories
  const categories = Array.from(
    new Set(servicesData.map((service) => service.icon))
  );

  // Filter services based on search and category
  const filteredServices = servicesData.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? service.icon === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main id="skip-to-main">
      {/* Hero Banner */}
      <div className="relative py-20 bg-blue-800">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <Container className="relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Government Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Access a wide range of government services conveniently and securely.
          </p>
        </Container>
      </div>

      {/* Search and Filter */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          {/* Search */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search for services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter */}
          <div className="mb-8">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-left focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <div className="flex items-center">
                <Filter className="h-5 w-5 text-gray-400 mr-2" />
                <span>{selectedCategory || 'Filter by category'}</span>
              </div>
              <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${filterOpen ? 'transform rotate-180' : ''}`} />
            </button>

            {filterOpen && (
              <div className="mt-2 p-4 bg-white border border-gray-300 rounded-md shadow-sm">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setFilterOpen(false);
                    }}
                    className={`px-3 py-2 rounded-md text-sm ${!selectedCategory ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                  >
                    All Services
                  </button>
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedCategory(category);
                        setFilterOpen(false);
                      }}
                      className={`px-3 py-2 rounded-md text-sm ${selectedCategory === category ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mt-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Service Categories */}
      <Section title="Service Categories" subtitle="Browse services by category">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="h-40 bg-blue-700 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-4xl mb-2">👤</div>
                <h3 className="text-xl font-bold">Citizen Services</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Services for individual citizens, including identity documents, certificates, and more.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-700 rounded-full mr-2"></div>
                  <span>Identity Services</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-700 rounded-full mr-2"></div>
                  <span>Certificates</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-700 rounded-full mr-2"></div>
                  <span>Social Benefits</span>
                </li>
              </ul>
              <a
                href="/services"
                className="block w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Explore Citizen Services
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="h-40 bg-emerald-700 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-4xl mb-2">🏢</div>
                <h3 className="text-xl font-bold">Business Services</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Services for businesses, including registration, licensing, permits, and regulatory compliance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-emerald-700 rounded-full mr-2"></div>
                  <span>Business Registration</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-emerald-700 rounded-full mr-2"></div>
                  <span>Licenses & Permits</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-emerald-700 rounded-full mr-2"></div>
                  <span>Tax Filing</span>
                </li>
              </ul>
              <a
                href="/services"
                className="block w-full text-center bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Explore Business Services
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="h-40 bg-amber-700 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-4xl mb-2">📱</div>
                <h3 className="text-xl font-bold">Digital Services</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Digital services and resources, including data portals, APIs, and digital literacy resources.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-amber-700 rounded-full mr-2"></div>
                  <span>Open Data Portal</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-amber-700 rounded-full mr-2"></div>
                  <span>API Access</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-amber-700 rounded-full mr-2"></div>
                  <span>Digital Literacy</span>
                </li>
              </ul>
              <a
                href="/services"
                className="block w-full text-center bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Explore Digital Services
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* How To Section */}
      <Section title="How to Access Services" subtitle="Learn how to access government services easily" background="light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-800 mb-4">
              <span className="text-3xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Register or Log In</h3>
            <p className="text-slate-600">
              Create an account or log in to access personalized services and track your applications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-800 mb-4">
              <span className="text-3xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Browse or Search</h3>
            <p className="text-slate-600">
              Browse service categories or use the search function to find the service you need.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-800 mb-4">
              <span className="text-3xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Apply and Track</h3>
            <p className="text-slate-600">
              Complete the application process online and track the status of your application.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions" subtitle="Find answers to common questions about government services">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">How do I create an account on the government portal?</h3>
              <p className="text-slate-600">
                You can create an account by clicking on the "Register" button on the top right of the page. You will need to provide some basic information and verify your identity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">What documents do I need to apply for government services?</h3>
              <p className="text-slate-600">
                The required documents vary depending on the service. You can find a list of required documents on the specific service page before starting your application.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">How can I track the status of my application?</h3>
              <p className="text-slate-600">
                You can track the status of your application by logging into your account and going to the "My Applications" section. You will be able to see the current status and any updates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">How can I get help if I have a problem?</h3>
              <p className="text-slate-600">
                You can contact our helpdesk by phone at +91 1234 567 890 or by email at help@example-gov.org. You can also use the chat assistant on our website for immediate assistance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Is my data secure on the government portal?</h3>
              <p className="text-slate-600">
                Yes, we take data security very seriously. All data transmitted through our portal is encrypted, and we have robust security measures in place to protect your information.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* AI Assistant */}
      <AIAssistant />
    </main>
  );
};

export default ServicesPage;