import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskRound as Flask, FileText, Users, Calendar as CalendarIcon, ChevronRight, Award, BarChart3, Lightbulb, Phone } from 'lucide-react';

import Hero from '../components/Hero';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import NewsCard from '../components/NewsCard';
import ServiceCard from '../components/ServiceCard';
import EventCard from '../components/EventCard';

import { newsData } from '../data/news';
import { servicesData } from '../data/services';
import { eventsData } from '../data/events';
import AIAssistant from '../components/AIAssistant';

const heroSlides = [
  {
    id: 1,
    title: "Welcome to CSIR-NEIST",
    subtitle: "North East Institute of Science and Technology - Advancing Research for Regional Development",
    image: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ctaText: "Explore Research",
    ctaLink: "/research",
  },
  {
    id: 2,
    title: "Innovation Through Science",
    subtitle: "Pioneering research and development for sustainable growth in Northeast India",
    image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ctaText: "View Projects",
    ctaLink: "/projects",
  },
  {
    id: 3,
    title: "Empowering Through Knowledge",
    subtitle: "Providing advanced scientific solutions and fostering technological innovation",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ctaText: "Academic Programs",
    ctaLink: "/services/academic",
  },
];

const quickLinks = [
  { 
    icon: <Flask size={32} />, 
    title: "Research Areas", 
    description: "Explore our diverse research domains",
    link: "/research" 
  },
  { 
    icon: <FileText size={32} />, 
    title: "Publications", 
    description: "Access research papers and patents",
    link: "/publications" 
  },
  { 
    icon: <Users size={32} />, 
    title: "Careers", 
    description: "Join our research community",
    link: "/careers" 
  },
  { 
    icon: <CalendarIcon size={32} />, 
    title: "Events", 
    description: "Scientific conferences and workshops",
    link: "/events" 
  },
];

const HomePage: React.FC = () => {
  return (
    <main id="skip-to-main">
      <Hero slides={heroSlides} />
      
      <Section background="white" className="py-6 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {quickLinks.map((link, index) => (
            <Card key={index} hoverable className="h-full">
              <CardContent className="p-4 md:p-6 flex flex-col items-center text-center h-full">
                <div className="text-blue-700 mb-3 md:mb-4">
                  {link.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{link.title}</h3>
                <p className="text-slate-600 mb-4 flex-grow text-sm md:text-base">{link.description}</p>
                <Link 
                  to={link.link} 
                  className="inline-flex items-center font-medium text-blue-700 hover:text-blue-800 text-sm md:text-base"
                >
                  View <ChevronRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">About CSIR-NEIST</h2>
            <p className="text-slate-600 mb-3 md:mb-4 text-sm md:text-base">
              CSIR-North East Institute of Science and Technology (CSIR-NEIST), formerly known as Regional Research Laboratory, is a constituent establishment of the Council of Scientific and Industrial Research (CSIR).
            </p>
            <p className="text-slate-600 mb-4 md:mb-6 text-sm md:text-base">
              Our mission is to carry out R&D activities for the effective utilization of the vast natural resources of Northeast India and to develop technologies that benefit the region's people and industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button variant="primary" className="w-full sm:w-auto">
                Learn More About Us
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img 
              src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="CSIR-NEIST research facility" 
              className="rounded-lg shadow-lg w-full h-48 md:h-64 lg:h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/30 to-transparent rounded-lg"></div>
          </div>
        </div>
      </Section>

      <Section 
        title="Our Services" 
        subtitle="Explore our research and development services"
        className="py-8 md:py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {servicesData.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center mt-6 md:mt-10">
          <Link to="/services">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View All Services
            </Button>
          </Link>
        </div>
      </Section>

      <Section background="primary" className="text-white py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Research Impact</h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base">
            Our contributions to scientific research and regional development
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <div className="text-center p-4">
            <div className="bg-white/10 rounded-full p-4 md:p-5 inline-block mb-3 md:mb-4">
              <Users size={24} className="md:w-9 md:h-9" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">300+</h3>
            <p className="text-sm md:text-base">Research Scientists</p>
          </div>
          <div className="text-center p-4">
            <div className="bg-white/10 rounded-full p-4 md:p-5 inline-block mb-3 md:mb-4">
              <Award size={24} className="md:w-9 md:h-9" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">1000+</h3>
            <p className="text-sm md:text-base">Publications</p>
          </div>
          <div className="text-center p-4">
            <div className="bg-white/10 rounded-full p-4 md:p-5 inline-block mb-3 md:mb-4">
              <BarChart3 size={24} className="md:w-9 md:h-9" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">150+</h3>
            <p className="text-sm md:text-base">Patents Filed</p>
          </div>
          <div className="text-center p-4">
            <div className="bg-white/10 rounded-full p-4 md:p-5 inline-block mb-3 md:mb-4">
              <Lightbulb size={24} className="md:w-9 md:h-9" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">50+</h3>
            <p className="text-sm md:text-base">Technologies Transferred</p>
          </div>
        </div>
      </Section>

      <Section 
        title="Latest News & Updates" 
        subtitle="Stay informed about our research activities and achievements"
        className="py-8 md:py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* <div className="lg:col-span-1">
            <NewsCard news={newsData[0]} featured={true} />
          </div> */}
          {/* <div className="lg:col-span-1 space-y-4 md:space-y-6"> */}
            {newsData.slice(1, 4).map((news) => (
              <NewsCard key={news.id} news={news} featured={true}/>
            ))}
          {/* </div> */}
        </div>
        <div className="text-center mt-6 md:mt-10">
          <Link to="/news">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View All News
            </Button>
          </Link>
        </div>
      </Section>

      <Section 
        title="Upcoming Events" 
        subtitle="Scientific conferences, workshops, and seminars" 
        background="light"
        className="py-8 md:py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {eventsData.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="text-center mt-6 md:mt-10">
          <Link to="/events">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View All Events
            </Button>
          </Link>
        </div>
      </Section>

      <Section background="primary" className="text-white py-8 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Connect With Us</h2>
          <p className="max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
            Interested in collaborating or learning more about our research? Get in touch with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="flex items-center justify-center w-full sm:w-auto"
            >
              <Phone size={18} className="mr-2" />
              Contact NEIST
            </Button>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-blue-800 w-full"
              >
                Research Enquiries
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <AIAssistant />
    </main>
  );
};

export default HomePage;