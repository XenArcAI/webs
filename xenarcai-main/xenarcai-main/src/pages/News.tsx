import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, ExternalLink, Tag, Clock, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function News() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  
  useEffect(() => {
    // Set visibility after a small delay to trigger animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'company', name: 'Company Updates' },
    { id: 'product', name: 'Product Releases' },
    { id: 'research', name: 'Research & Innovation' },
    { id: 'events', name: 'Events' }
  ];

  const newsItems = [
    {
      id: 'partnership-xyz',
      title: 'XenARC AI Announces Strategic Partnership with Global Tech Leader',
      excerpt: 'This groundbreaking partnership will accelerate the development and deployment of advanced AI solutions across multiple industries.',
      date: 'June 15, 2023',
      category: ['company'],
      image: 'bg-gradient-to-br from-primary-500/30 to-secondary-600/30',
      readTime: '4 min read',
      featured: true
    },
    {
      id: 'new-product-release',
      title: 'Introducing XenARC Vision 2.0: Next-Generation Computer Vision',
      excerpt: 'Our latest release features breakthrough improvements in object recognition accuracy and processing speed.',
      date: 'May 22, 2023',
      category: ['product'],
      image: 'bg-gradient-to-br from-secondary-500/30 to-primary-600/30',
      readTime: '6 min read',
      featured: true
    },
    {
      id: 'ai-research-breakthrough',
      title: 'XenARC Research Team Achieves Breakthrough in Natural Language Understanding',
      excerpt: 'Our researchers have developed a novel approach to context-aware language processing that significantly outperforms existing models.',
      date: 'April 10, 2023',
      category: ['research'],
      image: 'bg-gradient-to-br from-primary-600/30 to-secondary-500/30',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 'ai-summit-2023',
      title: 'XenARC AI to Present at Global AI Summit 2023',
      excerpt: 'Our CEO and Chief Research Officer will deliver keynote presentations on the future of AI and its impact on society.',
      date: 'March 28, 2023',
      category: ['events'],
      image: 'bg-gradient-to-br from-secondary-600/30 to-primary-500/30',
      readTime: '3 min read',
      featured: false
    },
    {
      id: 'healthcare-implementation',
      title: 'Leading Healthcare Provider Implements XenARC AI Solutions',
      excerpt: 'The implementation has resulted in improved patient outcomes, reduced wait times, and enhanced operational efficiency.',
      date: 'February 15, 2023',
      category: ['company'],
      image: 'bg-gradient-to-br from-primary-500/30 to-secondary-600/30',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 'developer-api-update',
      title: 'Major Update to XenARC Developer API',
      excerpt: 'The latest API update includes new endpoints, improved documentation, and enhanced performance.',
      date: 'January 30, 2023',
      category: ['product'],
      image: 'bg-gradient-to-br from-secondary-500/30 to-primary-600/30',
      readTime: '4 min read',
      featured: false
    }
  ];

  // Filter news items based on active category
  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category.includes(activeCategory));

  // Separate featured and regular news items
  const featuredNews = filteredNews.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-dark-950 to-dark-950 pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-secondary-900/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl font-display font-bold mb-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <span className="text-gradient-primary">Latest News & Updates</span>
            </h1>
            <p className={`text-dark-300 text-lg md:text-xl max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              Stay up to date with the latest developments, product releases, and innovations from XenARC AI.
            </p>
          </div>
        </div>
      </div>
      
      {/* Category tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-glow'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-dark-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured news */}
      {featuredNews.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-2xl font-display font-bold mb-8 animate-slide-in-left">
            <span className="text-gradient-secondary">Featured Stories</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredNews.map((item, index) => (
              <Link 
                key={item.id}
                to={`/news/${item.id}`}
                className="card group overflow-hidden hover-lift animate-scale-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={`h-48 ${item.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center text-sm text-dark-200">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-500/80 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors duration-300">{item.title}</h3>
                  <p className="text-dark-300 mb-4">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-dark-400 text-sm">
                      <Tag className="w-4 h-4 mr-1" />
                      <span className="capitalize">{item.category[0]}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{item.readTime}</span>
                    </div>
                    <span className="text-primary-400 group-hover:text-primary-300 flex items-center font-medium">
                      Read more
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Regular news grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-2xl font-display font-bold mb-8 animate-slide-in-right">
          <span className="text-gradient-primary">All News</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regularNews.map((item, index) => (
            <Link 
              key={item.id}
              to={`/news/${item.id}`}
              className="card group overflow-hidden hover-lift animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`h-40 ${item.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center text-sm text-dark-200">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-400 transition-colors duration-300">{item.title}</h3>
                <p className="text-dark-300 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-dark-400 text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    <span className="capitalize">{item.category[0]}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                  <span className="text-primary-400 group-hover:text-primary-300 flex items-center text-sm font-medium">
                    Read
                    <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Newsletter section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-900 to-secondary-900 shadow-glow-lg animate-scale-in">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 mix-blend-overlay" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="relative px-6 py-12 md:py-16 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white animate-slide-in-left">
              Stay Updated
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-8 animate-slide-in-right">
              Subscribe to our newsletter to receive the latest news, product updates, and exclusive insights from XenARC AI.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="btn bg-white text-primary-900 hover:bg-primary-50 shadow-md hover:shadow-lg hover-lift">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-primary-200 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Press resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4 animate-slide-in-right">
            <span className="text-gradient-secondary">Press Resources</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto animate-slide-in-left">
            Access media kits, press releases, and company information for press and media inquiries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Media Kit",
              description: "Download logos, executive photos, and brand assets for media use.",
              link: "#"
            },
            {
              title: "Press Releases",
              description: "Browse our archive of official press releases and announcements.",
              link: "#"
            },
            {
              title: "Media Contact",
              description: "Get in touch with our communications team for press inquiries.",
              link: "#"
            }
          ].map((resource, index) => (
            <a 
              key={index}
              href={resource.link}
              className="card p-6 hover-lift animate-fade-in flex flex-col h-full"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-dark-300 mb-4 flex-grow">{resource.description}</p>
              <div className="flex items-center text-primary-400 hover:text-primary-300 font-medium mt-auto">
                Access resource
                <ExternalLink className="ml-2 w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;