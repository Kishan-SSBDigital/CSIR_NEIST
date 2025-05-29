import React from 'react';
import { 
  Target, 
  Eye, 
  FileText, 
  Shield, 
  Globe, 
  CheckCircle2, 
  Award,
  ChevronRight
} from 'lucide-react';
import Section from '../components/ui/Section';
import Card, { CardContent } from '../components/ui/Card';
import Container from '../components/ui/Container';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamData } from '../data/team';

const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: 2010,
      title: "Establishment of Digital Governance Initiative",
      description: "Launch of the Digital Governance Initiative aimed at digitalizing government services."
    },
    {
      year: 2015,
      title: "Introduction of Unified Government Portal",
      description: "Launch of the first version of the Unified Government Portal to provide centralized access to government services."
    },
    {
      year: 2018,
      title: "Implementation of National Digital Identity",
      description: "Introduction of the National Digital Identity system to enable secure access to government services."
    },
    {
      year: 2020,
      title: "Mobile Government Services",
      description: "Expansion of government services to mobile platforms, enabling access on-the-go."
    },
    {
      year: 2023,
      title: "AI-Enhanced Government Services",
      description: "Integration of artificial intelligence to enhance service delivery and provide personalized assistance."
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparency",
      description: "We believe in transparent governance and providing citizens with access to information about government activities and decisions."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Accountability",
      description: "We are committed to being accountable for our actions and decisions, and we welcome citizen feedback and scrutiny."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in all our activities and services, constantly seeking ways to improve and innovate."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Inclusivity",
      description: "We are committed to ensuring that all citizens, regardless of their background or circumstances, have access to government services."
    }
  ];

  return (
    <main id="skip-to-main">
      {/* Hero Banner */}
      <div className="relative py-20 bg-blue-800">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <Container className="relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our mission, vision, values, and the team behind the Government Portal.
          </p>
        </Container>
      </div>

      {/* Mission & Vision */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700 p-3 rounded-full text-white mr-4">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-slate-700 mb-4">
              Our mission is to provide citizens with convenient, secure, and efficient access to government services and information, enabling them to interact with the government in a seamless and transparent manner.
            </p>
            <p className="text-slate-700">
              We are committed to leveraging technology to enhance service delivery, reduce bureaucracy, and improve the overall citizen experience.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-700 p-3 rounded-full text-white mr-4">
                <Eye size={24} />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-slate-700 mb-4">
              Our vision is to be a world-class e-governance leader, setting the standard for digital government services that are citizen-centric, innovative, and inclusive.
            </p>
            <p className="text-slate-700">
              We envision a future where every citizen can access any government service from anywhere, at any time, with ease and confidence.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section title="Our Core Values" subtitle="The principles that guide our work and decisions" background="light">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-blue-700 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* History/Timeline */}
      <Section title="Our Journey" subtitle="Key milestones in our digital governance journey">
        <div className="space-y-8 relative before:absolute before:inset-0 before:h-full before:w-[2px] before:bg-blue-200 before:left-[15px] md:before:left-1/2 before:-translate-x-1/2 before:z-0">
          {milestones.map((milestone, index) => (
            <div key={index} className={`relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-8 w-8 bg-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                  <FileText size={16} />
                </div>
              </div>
              <div className={`flex-1 mt-2 md:mt-0 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                <span className="inline-block bg-blue-100 text-blue-800 font-bold py-1 px-3 rounded">
                  {milestone.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership Team */}
      <Section title="Leadership Team" subtitle="Meet the team behind the Government Portal" background="light">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Section>

      {/* Organizational Structure */}
      <Section title="Organizational Structure" subtitle="How we are organized to serve you better">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.pexels.com/photos/6478537/pexels-photo-6478537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Government organizational meeting" 
            className="w-full h-auto rounded-lg mb-8"
          />
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold mb-4">Department Structure</h3>
            <p className="mb-6 text-slate-700">
              Our organization is structured to ensure efficient service delivery and clear accountability. The structure consists of the following key departments:
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-blue-800">Department of Administrative Affairs</h4>
                <p className="text-slate-600 mb-2">
                  Responsible for overall administration, policy development, and coordination between different departments.
                </p>
                <ul className="list-disc list-inside text-slate-600 pl-4">
                  <li>Policy Formulation Division</li>
                  <li>Administrative Coordination Division</li>
                  <li>Legal Affairs Division</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-blue-800">Department of Digital Services</h4>
                <p className="text-slate-600 mb-2">
                  Responsible for the development, maintenance, and enhancement of digital services and platforms.
                </p>
                <ul className="list-disc list-inside text-slate-600 pl-4">
                  <li>Digital Infrastructure Division</li>
                  <li>Application Development Division</li>
                  <li>Cybersecurity Division</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-blue-800">Department of Citizen Services</h4>
                <p className="text-slate-600 mb-2">
                  Responsible for delivering services directly to citizens and addressing their queries and concerns.
                </p>
                <ul className="list-disc list-inside text-slate-600 pl-4">
                  <li>Service Delivery Division</li>
                  <li>Citizen Engagement Division</li>
                  <li>Grievance Redressal Division</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary" className="text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us in Building a Better Future</h2>
        <p className="max-w-2xl mx-auto mb-8">
          We are always looking for talented and dedicated professionals to join our team. Explore career opportunities with us and be part of our mission to transform governance.
        </p>
        <a href="#" className="inline-flex items-center bg-white text-blue-800 hover:bg-blue-100 font-medium px-6 py-3 rounded-md transition-colors">
          View Career Opportunities
          <ChevronRight size={16} className="ml-1" />
        </a>
      </Section>
    </main>
  );
};

export default AboutPage;