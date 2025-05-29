import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'none';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  title,
  subtitle,
  id,
  background = 'white',
  containerSize = 'lg',
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-slate-50',
    dark: 'bg-slate-900 text-white',
    primary: 'bg-blue-800 text-white',
    none: '',
  };

  return (
    <section id={id} className={`py-12 md:py-16 ${backgroundClasses[background]} ${className}`}>
      <Container size={containerSize}>
        {(title || subtitle) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="text-3xl font-bold mb-3 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;