import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Shield, Globe, Code, Sparkles, BarChart3, Layers, Check, ChevronDown } from 'lucide-react';

function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
  useEffect(() => {
    // Set visibility after a small delay to trigger animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'security', name: 'Security' },
    { id: 'development', name: 'Development' }
  ];

  const products = [
    {
      id: 'xenarc-core',
      name: 'XenARC Core',
      description: 'Our flagship AI platform with advanced natural language processing capabilities.',
      icon: <Sparkles className="w-6 h-6 text-primary-400" />,
      features: ['Natural Language Processing', 'Machine Learning', 'Neural Networks', 'Deep Learning'],
      cta: 'Learn More',
      category: ['analytics', 'development']
    },
    {
      id: 'xenarc-vision',
      name: 'XenARC Vision',
      description: 'Computer vision technology that can analyze and interpret visual data with remarkable accuracy.',
      icon: <Globe className="w-6 h-6 text-secondary-400" />,
      features: ['Image Recognition', 'Object Detection', 'Scene Understanding', 'Visual Search'],
      cta: 'Explore Vision',
      category: ['analytics']
    },
    {
      id: 'xenarc-analytics',
      name: 'XenARC Analytics',
      description: 'Advanced analytics platform that transforms raw data into actionable business insights.',
      icon: <BarChart3 className="w-6 h-6 text-primary-400" />,
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Monitoring', 'Custom Reports'],
      cta: 'View Analytics',
      category: ['analytics']
    },
    {
      id: 'xenarc-secure',
      name: 'XenARC Secure',
      description: 'Enterprise-grade security solution powered by AI to protect your digital assets.',
      icon: <Shield className="w-6 h-6 text-secondary-400" />,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Monitoring', 'Security Automation'],
      cta: 'Secure Now',
      category: ['security']
    },
    {
      id: 'xenarc-dev',
      name: 'XenARC Developer',
      description: 'Comprehensive toolkit for developers to build AI-powered applications.',
      icon: <Code className="w-6 h-6 text-primary-400" />,
      features: ['API Access', 'SDKs & Libraries', 'Documentation', 'Developer Community'],
      cta: 'Start Building',
      category: ['development']
    },
    {
      id: 'xenarc-edge',
      name: 'XenARC Edge',
      description: 'Deploy AI capabilities directly on edge devices for real-time processing without cloud dependency.',
      icon: <Layers className="w-6 h-6 text-secondary-400" />,
      features: ['Edge Computing', 'Low Latency', 'Offline Processing', 'IoT Integration'],
      cta: 'Edge Solutions',
      category: ['development', 'security']
    }
  ];

  // Filter products based on active tab
  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category.includes(activeTab));

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
              <span className="text-gradient-primary">Our Products</span>
            </h1>
            <p className={`text-dark-300 text-lg md:text-xl max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              Discover our suite of AI-powered solutions designed to transform your business and drive innovation.
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
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-primary-500 text-white shadow-glow'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-dark-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`card group hover-lift overflow-hidden animate-scale-in hardware-accelerated`}
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-secondary-900/5 group-hover:from-primary-900/10 group-hover:to-secondary-900/10 transition-all duration-500" />
              
              <div className="p-6 relative">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center mr-3 animate-bounce-in" style={{ animationDelay: `${0.9 + index * 0.1}s` }}>
                    {product.icon}
                  </div>
                  <h2 className="text-xl font-bold">{product.name}</h2>
                </div>
                
                <p className="text-dark-300 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-dark-400 mb-3">KEY FEATURES</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-dark-200">
                        <Check className="w-4 h-4 text-primary-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300 hover-scale">
                  {product.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Comparison section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4 animate-slide-in-left">
            <span className="text-gradient-secondary">Compare Our Products</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto animate-slide-in-right">
            Find the perfect XenARC solution for your specific business needs.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-dark-700 animate-fade-in">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-dark-400 uppercase tracking-wider">Features</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-dark-400 uppercase tracking-wider">XenARC Core</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-dark-400 uppercase tracking-wider">XenARC Vision</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-dark-400 uppercase tracking-wider">XenARC Analytics</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-dark-400 uppercase tracking-wider">XenARC Secure</th>
              </tr>
            </thead>
            <tbody className="bg-dark-800/50 divide-y divide-dark-700">
              {[
                { feature: 'Natural Language Processing', core: true, vision: false, analytics: true, secure: false },
                { feature: 'Computer Vision', core: false, vision: true, analytics: false, secure: false },
                { feature: 'Predictive Analytics', core: true, vision: false, analytics: true, secure: true },
                { feature: 'Real-time Monitoring', core: true, vision: true, analytics: true, secure: true },
                { feature: 'Security Features', core: false, vision: false, analytics: false, secure: true },
                { feature: 'API Access', core: true, vision: true, analytics: true, secure: true },
                { feature: 'Custom Integrations', core: true, vision: true, analytics: true, secure: false },
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-dark-800/30' : 'bg-dark-800/10'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark-200">{row.feature}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-dark-300">
                    {row.core ? <Check className="w-5 h-5 text-primary-500 mx-auto" /> : <span className="text-dark-500">—</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-dark-300">
                    {row.vision ? <Check className="w-5 h-5 text-primary-500 mx-auto" /> : <span className="text-dark-500">—</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-dark-300">
                    {row.analytics ? <Check className="w-5 h-5 text-primary-500 mx-auto" /> : <span className="text-dark-500">—</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-dark-300">
                    {row.secure ? <Check className="w-5 h-5 text-primary-500 mx-auto" /> : <span className="text-dark-500">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-900 to-secondary-900 shadow-glow-lg animate-scale-in">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 mix-blend-overlay" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="relative px-6 py-12 md:py-16 md:px-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white animate-slide-in-left">
                Not sure which product is right for you?
              </h2>
              <p className="text-primary-100 max-w-xl animate-slide-in-right">
                Our team of experts is ready to help you find the perfect solution for your business needs.
              </p>
            </div>
            <div>
              <button className="btn bg-white text-primary-900 hover:bg-primary-50 shadow-md hover:shadow-lg hover-lift">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4 animate-slide-in-right">
            <span className="text-gradient-primary">Frequently Asked Questions</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto animate-slide-in-left">
            Get answers to common questions about our products and services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {[
            {
              question: 'How do I get started with XenARC AI?',
              answer: 'Getting started is easy! Simply sign up for a free trial account on our website, and you\'ll have immediate access to our platform. Our onboarding process will guide you through the initial setup and configuration.'
            },
            {
              question: 'Can I integrate XenARC with my existing systems?',
              answer: 'Yes, XenARC is designed for seamless integration with your existing infrastructure. We provide comprehensive APIs, SDKs, and pre-built connectors for popular platforms and services.'
            },
            {
              question: 'What kind of support do you offer?',
              answer: 'We offer multiple tiers of support, from standard email support to premium 24/7 dedicated support. All customers have access to our extensive documentation, tutorials, and community forums.'
            },
            {
              question: 'Is XenARC available for on-premises deployment?',
              answer: 'Yes, we offer both cloud-based and on-premises deployment options. Our on-premises solution provides the same features and capabilities as our cloud offering, with added security and control.'
            }
          ].map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-dark-700 rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer bg-dark-800 hover:bg-dark-700 transition-colors duration-300">
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-dark-400 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="p-4 bg-dark-800/50 border-t border-dark-700">
                  <p className="text-dark-300">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;