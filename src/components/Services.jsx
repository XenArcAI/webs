import { motion } from 'framer-motion'
import {
  Bot,
  Database,
  Cpu,
  Cloud,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Database,
      title: 'AI Model API Access',
      description: 'Connect to thousands of AI models through our simple API - perfect for students, creators, and professionals.',
      features: ['Thousands of Models', 'Simple Integration', 'Affordable Access'],
      color: 'from-gray-800 to-black'
    },
    {
      icon: Cpu,
      title: 'No Hardware Required',
      description: 'Access powerful AI capabilities from any device - no expensive hardware or setup needed.',
      features: ['Any Device Works', 'Cloud Processing', 'Instant Access'],
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Bot,
      title: 'Easy-to-Use Platform',
      description: 'User-friendly platform designed for everyone - from beginners to expert developers.',
      features: ['Beginner Friendly', 'Clear Documentation', 'Community Support'],
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Cloud,
      title: 'Real-Time AI Processing',
      description: 'Fast and reliable AI processing for creative projects, research, and applications.',
      features: ['Lightning Fast', 'Always Available', 'Reliable Results'],
      color: 'from-black to-gray-700'
    }
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions designed for everyone - from individual creators and students
            to developers and enterprises.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-black rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Access AI?</h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Join thousands of users who are already using our platform to bring AI into their projects.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
