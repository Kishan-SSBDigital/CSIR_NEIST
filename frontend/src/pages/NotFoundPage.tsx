import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';

const NotFoundPage: React.FC = () => {
  return (
    <main id="skip-to-main" className="min-h-[80vh] flex items-center">
      <Container className="text-center py-16">
        <div className="max-w-md mx-auto">
          <h1 className="text-9xl font-bold text-blue-800 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button variant="primary" className="w-full sm:w-auto" icon={<Home size={16} />}>
                Back to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto"
              onClick={() => window.history.back()}
              icon={<ArrowLeft size={16} />}
            >
              Go Back
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default NotFoundPage;