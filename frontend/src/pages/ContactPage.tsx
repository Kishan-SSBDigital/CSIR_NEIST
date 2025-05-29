import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Globe, 
  Check,
  AlertCircle
} from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    language: 'english',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          language: 'english',
        });
      }, 1500);
    }
  };

  return (
    <main id="skip-to-main">
      {/* Hero Banner */}
      <div className="relative py-20 bg-blue-800">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <Container className="relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for assistance, feedback, or inquiries about government services.
          </p>
        </Container>
      </div>

      {/* Contact Information */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-700 p-4 rounded-full mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Address</h3>
              <p className="text-slate-600">
                Government Secretariat,<br />
                Central Avenue, Capital City<br />
                123456
              </p>
            </div>
          </Card>

          <Card className="text-center p-6">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-700 p-4 rounded-full mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone & Fax</h3>
              <p className="text-slate-600">
                Phone: +91 1234 567 890<br />
                Toll-Free: 1800 123 4567<br />
                Fax: +91 1234 567 891
              </p>
            </div>
          </Card>

          <Card className="text-center p-6">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-700 p-4 rounded-full mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email & Website</h3>
              <p className="text-slate-600">
                Email: info@example-gov.org<br />
                Support: support@example-gov.org<br />
                Website: www.example-gov.org
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Contact Form and Office Hours */}
      <Section background="light">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded-md flex items-start">
                    <Check size={24} className="mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Thank you for contacting us!</h3>
                      <p>Your message has been successfully submitted. We will get back to you shortly.</p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className={`block w-full px-3 py-2 border ${errors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 sm:text-sm`}
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600\" id="name-error">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`block w-full px-3 py-2 border ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 sm:text-sm`}
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600\" id="email-error">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          className={`block w-full px-3 py-2 border ${errors.subject ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 sm:text-sm`}
                          aria-required="true"
                          aria-invalid={!!errors.subject}
                          aria-describedby={errors.subject ? "subject-error" : undefined}
                        />
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-600\" id="subject-error">
                            {errors.subject}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className={`block w-full px-3 py-2 border ${errors.message ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 sm:text-sm`}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600" id="message-error">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Language
                      </label>
                      <div className="flex items-center">
                        <Globe size={16} className="text-gray-400 mr-2" />
                        <select
                          id="language"
                          name="language"
                          value={formState.language}
                          onChange={handleChange}
                          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        >
                          <option value="english">English</option>
                          <option value="hindi">Hindi</option>
                          <option value="spanish">Spanish</option>
                          <option value="french">French</option>
                          <option value="arabic">Arabic</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full md:w-auto"
                        loading={isSubmitting}
                        icon={<Send size={16} />}
                      >
                        Send Message
                      </Button>
                      
                      <p className="mt-2 text-xs text-gray-500">
                        * Required fields
                      </p>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <Clock size={16} className="text-blue-700 mr-2" />
                      <span>Monday - Friday</span>
                    </div>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <Clock size={16} className="text-blue-700 mr-2" />
                      <span>Saturday</span>
                    </div>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <Clock size={16} className="text-blue-700 mr-2" />
                      <span>Sunday</span>
                    </div>
                    <span>Closed</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="text-xl font-bold mb-4">Public Holidays</h3>
                  <p className="text-slate-600 mb-3">
                    Government offices are closed on all national holidays. For a complete list of holidays, please visit our website.
                  </p>
                  <a href="#" className="text-blue-700 hover:text-blue-800 font-medium flex items-center">
                    View Holiday Calendar
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Emergency Contact</h3>
                <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                  <div className="flex">
                    <AlertCircle size={20} className="text-red-600 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-red-800 font-medium">Emergency Services</h4>
                      <p className="text-red-700 text-sm">
                        For emergencies requiring immediate assistance, please use the following hotlines.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Emergency Helpline:</span>
                    <span className="font-bold">112</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Police:</span>
                    <span className="font-bold">100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fire:</span>
                    <span className="font-bold">101</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ambulance:</span>
                    <span className="font-bold">102</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Disaster Management:</span>
                    <span className="font-bold">108</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="white" className="py-0">
        <div className="h-96 bg-gray-300 w-full relative">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="text-center">
              <p className="text-gray-600 mb-2">Map Loading...</p>
              <p className="text-sm text-gray-500">
                Google Maps will be displayed here showing the location of the Government Secretariat
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Feedback CTA */}
      <Section background="primary" className="text-white text-center">
        <h2 className="text-3xl font-bold mb-4">We Value Your Feedback</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Your feedback helps us improve our services and serve you better. Share your thoughts, suggestions, or concerns with us.
        </p>
        <Button variant="secondary" size="lg">
          Submit Feedback
        </Button>
      </Section>
    </main>
  );
};

export default ContactPage;