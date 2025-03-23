import React, { useState, useEffect } from 'react';
import { ArrowRight, Building, Briefcase, Microscope, ShoppingBag, GraduationCap, LandPlot, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

function Solutions() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
  useEffect(() => {
    // Set visibility after a small delay to trigger animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'retail', name: 'Retail' },
    { id: 'education', name: 'Education' },
    { id: 'government', name: 'Government' }
  ];

  const solutions = [
    {
      id: 'healthcare',
      title: 'Healthcare Solutions',
      description: 'Transform patient care and medical research with AI-powered insights and automation.',
      icon: <Microscope className="w-8 h-8 text-primary-400" />,
      benefits: [
        'Accelerate medical research and drug discovery',
        'Improve diagnostic accuracy and patient outcomes',
        'Optimize hospital operations and resource allocation',
        'Enhance patient engagement and personalized care'
      ],
      caseStudy: {
        title: 'Leading Hospital Reduces Wait Times by 35%',
        description: 'A major healthcare provider implemented XenARC AI to optimize patient scheduling and resource allocation, resulting in significantly reduced wait times and improved patient satisfaction.'
      },
      category: ['healthcare']
    },
    {
      id: 'finance',
      title: 'Financial Services',
      description: 'Enhance risk management, automate compliance, and deliver personalized financial services.',
      icon: <Briefcase className="w-8 h-8 text-secondary-400" />,
      benefits: [
        'Advanced fraud detection and prevention',
        'Automated regulatory compliance',
        'Personalized investment recommendations',
        'Streamlined loan approval processes'
      ],
      caseStudy: {
        title: 'Global Bank Reduces Fraud by 47%',
        description: 'A leading financial institution implemented XenARC AI for real-time fraud detection, resulting in a significant reduction in fraudulent transactions and millions in cost savings.'
      },
      category: ['finance']
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing Excellence',
      description: 'Optimize production processes, predict maintenance needs, and improve quality control.',
      icon: <Building className="w-8 h-8 text-primary-400" />,
      benefits: [
        'Predictive maintenance to reduce downtime',
        'Quality control automation with computer vision',
        'Supply chain optimization and forecasting',
        'Energy efficiency and sustainability improvements'
      ],
      caseStudy: {
        title: 'Manufacturer Reduces Downtime by 28%',
        description: 'A global manufacturer implemented XenARC AI for predictive maintenance, resulting in significantly reduced equipment downtime and increased production efficiency.'
      },
      category: ['manufacturing']
    },
    {
      id: 'retail',
      title: 'Retail Innovation',
      description: 'Personalize customer experiences, optimize inventory, and forecast demand with precision.',
      icon: <ShoppingBag className="w-8 h-8 text-secondary-400" />,
      benefits: [
        'Personalized shopping experiences',
        'Demand forecasting and inventory optimization',
        'Visual search and recommendation engines',
        'Automated customer service and support'
      ],
      caseStudy: {
        title: 'Retailer Increases Sales by 23%',
        description: 'A major retail chain implemented XenARC AI for personalized recommendations and inventory optimization, resulting in increased sales and improved customer satisfaction.'
      },
      category: ['retail']
    },
    {
      id: 'education',
      title: 'Education Transformation',
      description: 'Create adaptive learning experiences, automate administrative tasks, and improve student outcomes.',
      icon: <GraduationCap className="w-8 h-8 text-primary-400" />,
      benefits: [
        'Personalized learning paths for students',
        'Automated grading and feedback',
        'Early intervention for at-risk students',
        'Administrative efficiency and cost reduction'
      ],
      caseStudy: {
        title: 'University Improves Graduation Rates by 18%',
        description: 'A leading university implemented XenARC AI for early intervention and personalized learning, resulting in improved student retention and graduation rates.'
      },
      category: ['education']
    },
    {
      id: 'government',
      title: 'Government & Public Sector',
      description: 'Enhance public services, improve resource allocation, and strengthen security measures.',
      icon: <LandPlot className="w-8 h-8 text-secondary-400" />,
      benefits: [
        'Improved citizen services and engagement',
        'Enhanced public safety and security',
        'Efficient resource allocation and planning',
        'Data-driven policy development'
      ],
      caseStudy: {
        title: 'City Reduces Emergency Response Time by 31%',
        description: 'A major metropolitan area implemented XenARC AI for emergency service optimization, resulting in significantly reduced response times and improved public safety.'
      },
      category: ['government']
    }
  ];

  // Filter solutions based on active tab
  const filteredSolutions = activeTab === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category.includes(activeTab));

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
              <span className="text-gradient-secondary">Industry Solutions</span>
            </h1>
            <p className={`text-dark-300 text-lg md:text-xl max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              XenARC AI delivers tailored solutions to address the unique challenges of your industry, driving innovation and growth.
            </p>
          </div>
        </div>
      </div>
      
      {/* Industry tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === industry.id
                  ? 'bg-secondary-500 text-white shadow-glow'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-dark-200'
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Solutions grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSolutions.map((solution, index) => (
            <div 
              key={solution.id}
              className={`card group hover-lift overflow-hidden animate-scale-in hardware-accelerated`}
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-secondary-900/5 group-hover:from-primary-900/10 group-hover:to-secondary-900/10 transition-all duration-500" />
              
              <div className="p-6 relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center mr-3 animate-bounce-in" style={{ animationDelay: `${0.9 + index * 0.1}s` }}>
                    {solution.icon}
                  </div>
                  <h2 className="text-xl font-bold">{solution.title}</h2>
                </div>
                
                <p className="text-dark-300 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-dark-400 mb-3">KEY BENEFITS</h3>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-dark-200">
                        <Check className="w-4 h-4 text-secondary-500 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Case Study */}
                <div className="bg-dark-800/50 p-4 rounded-lg mb-6 border border-dark-700">
                  <h3 className="font-bold text-gradient-secondary mb-2">{solution.caseStudy.title}</h3>
                  <p className="text-dark-300 text-sm">{solution.caseStudy.description}</p>
                </div>
                
                <Link to={`/solutions/${solution.id}`} className="inline-flex items-center text-secondary-400 hover:text-secondary-300 font-medium transition-colors duration-300 hover-scale">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Process section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4 animate-slide-in-left">
            <span className="text-gradient-primary">Our Implementation Process</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto animate-slide-in-right">
            We follow a proven methodology to ensure successful implementation of our AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { 
              step: '01', 
              title: 'Discovery', 
              description: 'We work closely with your team to understand your business challenges and objectives.' 
            },
            { 
              step: '02', 
              title: 'Solution Design', 
              description: 'Our experts design a tailored solution that addresses your specific needs and requirements.' 
            },
            { 
              step: '03', 
              title: 'Implementation', 
              description: 'We deploy the solution with minimal disruption to your existing operations and systems.' 
            },
            { 
              step: '04', 
              title: 'Continuous Improvement', 
              description: 'We provide ongoing support and optimization to ensure long-term success.' 
            }
          ].map((step, index) => (
            <div 
              key={index} 
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connector line */}
              {index < 3 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform -translate-x-1/2 z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-dark-800 border border-dark-700 mb-4 mx-auto animate-pulse-glow">
                  <span className="text-2xl font-bold text-gradient-blue-purple">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-dark-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary-900 to-primary-900 shadow-glow-lg animate-scale-in">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 mix-blend-overlay" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="relative px-6 py-12 md:py-16 md:px-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white animate-slide-in-left">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-secondary-100 max-w-xl animate-slide-in-right">
                Contact our team of experts to discuss how XenARC AI can address your specific industry challenges.
              </p>
            </div>
            <div>
              <button className="btn bg-white text-secondary-900 hover:bg-secondary-50 shadow-md hover:shadow-lg hover-lift">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4 animate-slide-in-right">
            <span className="text-gradient-secondary">What Our Clients Say</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto animate-slide-in-left">
            Hear from organizations that have transformed their operations with XenARC AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "XenARC AI has revolutionized how we approach patient care. The insights we've gained have led to better outcomes and more efficient operations.",
              author: "Dr. Sarah Johnson",
              title: "Chief Medical Officer",
              company: "Metropolitan Health Systems"
            },
            {
              quote: "Implementing XenARC AI for fraud detection has saved us millions and significantly improved our security posture. The ROI has been exceptional.",
              author: "Michael Chen",
              title: "CTO",
              company: "Global Financial Group"
            },
            {
              quote: "The predictive maintenance capabilities of XenARC AI have reduced our downtime by over 30% and extended the life of our equipment.",
              author: "Robert Martinez",
              title: "VP of Operations",
              company: "Advanced Manufacturing Inc."
            }
          ].map((testimonial, index) => (
            <div 
              key={index} 
              className="card p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-secondary-500 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-dark-200 mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-dark-400 text-sm">{testimonial.title}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Solutions;