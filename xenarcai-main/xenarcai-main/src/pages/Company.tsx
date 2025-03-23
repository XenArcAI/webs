import React from 'react';
import { Users, Lightbulb, Heart, Award, ArrowRight } from 'lucide-react';

function Company() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-dark-950 to-dark-950 pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-gradient-blue-purple">About XenArcAI</span>
            </h1>
            <p className="text-dark-300 text-lg md:text-xl max-w-3xl mx-auto">
              At the forefront of the artificial intelligence revolution, our mission is to empower businesses and individuals by creating innovative and reliable AI solutions that redefine what technology can achieve.
            </p>
          </div>
        </div>
      </div>
      
      {/* Vision section */}
      <div className="relative z-10 py-16 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl transform scale-105" />
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-dark-800 border border-dark-700 shadow-glow">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lightbulb className="w-24 h-24 text-primary-400 opacity-20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-secondary-900/10" />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-6">
                <span className="text-gradient-primary">Our Vision</span>
              </h2>
              <p className="text-dark-200 text-lg leading-relaxed mb-6">
                Our vision is to pioneer the path toward <span className="font-semibold text-primary-300">Artificial General Intelligence (AGI)</span>—an AI system with the ability to understand, learn, and adapt to tasks as humans do.
              </p>
              <p className="text-dark-300 leading-relaxed">
                At XenARC AI, we are committed to creating ethical, scalable, and impactful AI that benefits humanity. We believe in a future where AI enhances human potential rather than replacing it.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Values section */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">
              <span className="text-gradient-secondary">Core Values</span>
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Our values guide everything we do, from product development to customer relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Lightbulb className="w-8 h-8 text-primary-400" />, 
                title: "Innovation", 
                description: "Constantly pushing the boundaries of AI technology to discover new possibilities." 
              },
              { 
                icon: <Users className="w-8 h-8 text-secondary-400" />, 
                title: "Collaboration", 
                description: "Building partnerships across industries to shape the future of AI together." 
              },
              { 
                icon: <Heart className="w-8 h-8 text-primary-400" />, 
                title: "Ethical Responsibility", 
                description: "Ensuring our AI serves humanity's best interests with transparency and care." 
              },
              { 
                icon: <Award className="w-8 h-8 text-secondary-400" />, 
                title: "Excellence", 
                description: "Delivering reliable and cutting-edge solutions that exceed expectations." 
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="card p-6 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-dark-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="relative z-10 py-16 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-900 to-secondary-900 shadow-glow-lg">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 mix-blend-overlay" />
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative px-6 py-12 md:py-16 md:px-12 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                Join Us on This Journey
              </h2>
              <p className="text-primary-100 max-w-3xl mx-auto mb-8">
                We are shaping the next generation of artificial intelligence to create solutions that inspire change, empower innovation, and work toward a brighter, AI-powered future. Join us as we explore the limitless potential of AI.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn bg-white text-primary-900 hover:bg-primary-50 shadow-md hover:shadow-lg">
                  Join Our Team
                </button>
                <button className="btn bg-transparent border border-white/30 text-white hover:bg-white/10">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
