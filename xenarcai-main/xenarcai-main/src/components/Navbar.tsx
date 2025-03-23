import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (isOpen) setIsOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality here
    setSearchOpen(false);
    setSearchQuery('');
  };

  const navLinks = [
    { path: '/products', label: 'Products' },
    { path: '/api', label: 'API' },
    { path: '/company', label: 'Company', hasDropdown: true },
    { path: '/solutions', label: 'Solutions' },
    { path: '/careers', label: 'Careers' },
    { path: '/news', label: 'News' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-xai-black/90 backdrop-blur-md border-b border-xai-gray' 
        : 'bg-transparent'
    }`}>
      <div className="xai-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 hover-scale">
            <div className="w-10 h-10 rounded-full bg-xai-blue flex items-center justify-center">
              <span className="text-white font-bold text-lg">X</span>
            </div>
            <span className="text-xl font-display font-bold text-white">XenARC AI</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label, hasDropdown }) => (
              <div key={path} className="relative group">
                <Link
                  to={path}
                  className={`text-sm font-medium transition-colors duration-300 flex items-center ${
                    isActive(path) 
                      ? 'text-xai-blue' 
                      : 'text-white hover:text-xai-blue'
                  }`}
                >
                  {label}
                  {hasDropdown && (
                    <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>
                {hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-xai-gray ring-1 ring-xai-lightgray opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                    <div className="py-1">
                      <Link to="/company/about" className="block px-4 py-2 text-sm text-white hover:bg-xai-lightgray hover:text-xai-blue">
                        About Us
                      </Link>
                      <Link to="/company/team" className="block px-4 py-2 text-sm text-white hover:bg-xai-lightgray hover:text-xai-blue">
                        Our Team
                      </Link>
                      <Link to="/company/contact" className="block px-4 py-2 text-sm text-white hover:bg-xai-lightgray hover:text-xai-blue">
                        Contact
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="p-2 rounded-md text-white hover:text-xai-blue transition-colors duration-300"
            >
              <Search className="w-5 h-5" />
            </button>
            <button className="btn-outline text-sm">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </button>
            <button className="btn-primary text-sm">Try XenARC</button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleSearch}
              className="p-2 rounded-md text-white hover:text-xai-blue transition-colors duration-300"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-xai-blue transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6 animate-rotate-in" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 animate-rotate-in" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      <div 
        className={`absolute top-full left-0 w-full bg-xai-darkgray/95 backdrop-blur-md shadow-lg transition-all duration-300 transform ${
          searchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="xai-container py-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search XenARC AI..."
              className="w-full bg-xai-gray border border-xai-lightgray text-white placeholder-dark-400 px-4 py-3 pr-12 rounded-md focus:outline-none focus:border-xai-blue focus:ring-1 focus:ring-xai-blue"
              autoFocus={searchOpen}
            />
            <button 
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 hover:text-xai-blue"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 transform ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none h-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-xai-darkgray/95 backdrop-blur-md shadow-lg">
          {navLinks.map(({ path, label }, index) => (
            <Link
              key={path}
              to={path}
              className={`block px-3 py-2 rounded-md text-base font-medium animate-fade-in ${
                isActive(path)
                  ? 'bg-xai-gray text-xai-blue'
                  : 'text-white hover:bg-xai-gray hover:text-xai-blue'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {label}
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-xai-lightgray">
            <div className="flex items-center px-3 space-x-3">
              <button className="btn-outline text-sm w-full">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </button>
              <button className="btn-primary text-sm w-full">Try XenARC</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;