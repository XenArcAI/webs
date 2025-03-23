import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, Sparkles, Zap, Shield, Globe, Code, ChevronDown, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visibility after a small delay to trigger animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isVisible) return;
      
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }, [end, duration, isVisible]);
    
    return count;
  };
  
  const companiesCount = useCounter(5000);
  const developersCount = useCounter(100000);
  const countriesCount = useCounter(120);

  return (
    <div className="relative min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 bg-xai-black pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-xai-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/4 w-[600px] h-[600px] bg-xai-purple/5 rounded-full blur-3xl" />
      </div>
      
      {/* Hero Section */}
      <div className="relative z-10 pt-40 pb-20">
        <div className="xai-container">
          <div className="text-center mb-20">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                <span className="text-white">XenArcAI</span>
                <br />
                <span className="text-xai-blue">Artificial Intelligence</span>
              </h1>
              <p className="text-dark-300 text-xl md:text-2xl max-w-3xl mx-auto mb-12">
                XenArcAI is building the future of artificial intelligence with breakthrough technology that transforms how we interact with machines.
              </p>
            </div>
            
            <div className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <button className="btn-primary text-base px-8 py-4">
                Try XenArcAI Free
              </button>
              <button className="btn-outline text-base px-8 py-4">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Featured Section */}
          <div className="mt-32 mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                Cutting-Edge AI Technology
              </h2>
              <p className="text-dark-300 text-lg md:text-xl max-w-3xl mx-auto">
                Our platform delivers unparalleled performance and innovative solutions for enterprises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  icon: <Zap className="w-8 h-8 text-xai-blue" />, 
                  title: "Lightning Fast", 
                  description: "Process data at unprecedented speeds with our optimized algorithms." 
                },
                { 
                  icon: <Shield className="w-8 h-8 text-xai-blue" />, 
                  title: "Secure & Private", 
                  description: "Enterprise-grade security with end-to-end encryption and privacy controls." 
                },
                { 
                  icon: <Globe className="w-8 h-8 text-xai-blue" />, 
                  title: "Global Scale", 
                  description: "Deploy anywhere with our distributed infrastructure spanning the globe." 
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="xai-card animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                >
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-bold ml-3 text-white">{feature.title}</h3>
                  </div>
                  <p className="text-dark-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="relative z-10 py-20 bg-xai-darkgray">
        <div className="xai-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { 
                icon: <Users className="w-8 h-8 text-xai-blue" />, 
                value: companiesCount, 
                label: "Companies",
                suffix: "+"
              },
              { 
                icon: <Code className="w-8 h-8 text-xai-blue" />, 
                value: developersCount, 
                label: "Developers",
                suffix: "+"
              },
              { 
                icon: <Globe className="w-8 h-8 text-xai-blue" />, 
                value: countriesCount, 
                label: "Countries",
                suffix: ""
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-8 bg-xai-gray border border-xai-lightgray rounded-md"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-xai-lightgray mb-6">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <p className="text-dark-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="relative z-10 py-24">
        <div className="xai-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              Powerful Features
            </h2>
            <p className="text-dark-300 text-lg md:text-xl max-w-3xl mx-auto">
              XenARC AI combines cutting-edge technology with intuitive design to deliver a seamless experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Code className="w-8 h-8 text-xai-blue" />, 
                title: "Developer API", 
                description: "Integrate XenArcAI into your applications with our comprehensive API." 
              },
              { 
                icon: <Sparkles className="w-8 h-8 text-xai-blue" />, 
                title: "Smart Automation", 
                description: "Automate complex workflows with intelligent decision-making capabilities." 
              },
              { 
                icon: <Shield className="w-8 h-8 text-xai-blue" />, 
                title: "Advanced Security", 
                description: "Enterprise-grade security with customizable access controls." 
              },
              { 
                icon: <BarChart className="w-8 h-8 text-xai-blue" />, 
                title: "Detailed Analytics", 
                description: "Gain insights with comprehensive analytics and reporting tools." 
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-xai-gray mb-4 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-dark-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Use Cases Section */}
      <div className="relative z-10 py-24 bg-xai-darkgray">
        <div className="xai-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              Industry Solutions
            </h2>
            <p className="text-dark-300 text-lg md:text-xl max-w-3xl mx-auto">
              XenARC AI is transforming industries with tailored solutions for specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Healthcare", 
                description: "Accelerate medical research, improve diagnostics, and optimize patient care with AI-powered insights.",
                link: "/solutions#healthcare"
              },
              { 
                title: "Finance", 
                description: "Enhance fraud detection, automate compliance, and deliver personalized financial services.",
                link: "/solutions#finance"
              },
              { 
                title: "Manufacturing", 
                description: "Optimize production processes, predict maintenance needs, and improve quality control.",
                link: "/solutions#manufacturing"
              },
              { 
                title: "Retail", 
                description: "Personalize customer experiences, optimize inventory, and forecast demand with precision.",
                link: "/solutions#retail"
              },
              { 
                title: "Education", 
                description: "Create adaptive learning experiences, automate administrative tasks, and improve student outcomes.",
                link: "/solutions#education"
              },
              { 
                title: "Government", 
                description: "Enhance public services, improve resource allocation, and strengthen security measures.",
                link: "/solutions#government"
              }
            ].map((useCase, index) => (
              <div 
                key={index} 
                className="xai-card animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-xl font-bold mb-3 text-white">{useCase.title}</h3>
                <p className="text-dark-300 mb-4">{useCase.description}</p>
                <Link to={useCase.link} className="inline-flex items-center text-xai-blue hover:text-primary-300 font-medium">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative z-10 py-24">
        <div className="xai-container">
          <div className="relative overflow-hidden rounded-md bg-xai-gray border border-xai-lightgray p-12 md:p-16">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-xai-blue/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-dark-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
                Join thousands of companies already leveraging XenARC AI to drive innovation and growth.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="btn-primary text-base px-8 py-4">
                  Get Started Today
                </button>
                <button className="btn-outline text-base px-8 py-4">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
