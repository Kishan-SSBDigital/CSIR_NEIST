import React, { useState, useEffect } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import Container from './ui/Container';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import LOGO from '../asset/csir-new-logo.jpg';
import LOGO2 from '../asset/CSIRNEIST_Jorhat.png';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  // {
  //   label: 'Services',
  //   href: '/services',
  //   children: [
  //     { label: 'Citizen Services', href: '/services/citizen' },
  //     { label: 'Business Services', href: '/services/business' },
  //     { label: 'Digital Services', href: '/services/digital' },
  //   ]
  // },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(prev => prev === label ? null : label);
  };

  const navigate = useNavigate();

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      role="banner"
    >
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-sm py-2 shadow-md">
        <Container>
          <div className="flex justify-between items-center">
            {/* Left side */}
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline font-semibold tracking-wide">
                CSIR - North-East Institute of Science and Technology
              </span>
              <a href="#skip-to-main" className="sr-only focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1 bg-blue-800">
                Skip to main content
              </a>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <select
                  aria-label="Change language"
                  className="appearance-none bg-white text-gray-800 text-sm border border-gray-300 py-2 pl-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                >
                  <option value="en">English</option>
                  <option value="hi">हिंदी</option>
                  <option value="gu">ગુજરાતી</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Search Button */}
              <button
                className="flex items-center gap-1 text-white hover:text-blue-200 transition duration-200 focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1"
                aria-label="Search"
              >
                <Search size={16} />
                <span className="hidden sm:inline font-medium">Search</span>
              </button>
            </div>
          </div>
        </Container>
      </div>


      {/* Main navbar */}
      <nav className="bg-white" role="navigation" aria-label="Main navigation">
        <Container>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center ">
                    <img
                      src={LOGO}
                      alt="CSIR-NEIST Logo"
                      className="h-16 w-auto mr-2"
                    />
                  </div>
                  <div className="flex items-center text-blue-800 font-bold text-2xl">
                    CSIR-NEIST
                  </div>
                  <div className="flex items-center">
                    <img
                      src={LOGO2}
                      alt="CSIR-NEIST Logo"
                      className="h-14 w-auto ml-2"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <button
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-slate-100 hover:text-blue-800 flex items-center"
                      onClick={() => toggleSubmenu(item.label)}
                      aria-expanded={openSubmenu === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-sm font-medium ${isActive
                          ? 'text-blue-800 bg-blue-50'
                          : 'text-gray-700 hover:bg-slate-100 hover:text-blue-800'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}

                  {/* Dropdown menu */}
                  {item.children && (
                    <div
                      className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 transition-all duration-200 origin-top-right ${openSubmenu === item.label ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                        }`}
                    >
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.label}
                            to={child.href}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm ${isActive
                                ? 'text-blue-800 bg-blue-50'
                                : 'text-gray-700 hover:bg-slate-100 hover:text-blue-800'
                              }`
                            }
                            role="menuitem"
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Login button */}
            <div className="hidden md:block">
              <button 
        className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800 transition"
        onClick={() => navigate('/login')}
      >
        Citizen Login
      </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-800 flex items-center justify-between"
                      onClick={() => toggleSubmenu(item.label)}
                      aria-expanded={openSubmenu === item.label}
                    >
                      {item.label}
                      <ChevronDown size={16} />
                    </button>
                    {openSubmenu === item.label && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.label}
                            to={child.href}
                            className={({ isActive }) =>
                              `block px-3 py-2 rounded-md text-sm font-medium ${isActive
                                ? 'text-blue-800 bg-blue-50'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-blue-800'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${isActive
                        ? 'text-blue-800 bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-800'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
            <div className="pt-2">
      <Button 
        variant="primary" 
        size="sm" 
        className="w-full"
        onClick={() => Navigate('/login')}
      >
        Citizen Login
      </Button>
    </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;