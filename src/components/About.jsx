import { motion } from 'framer-motion'
import { Brain, Lightbulb, Rocket, Users } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Cutting-edge artificial intelligence solutions that push the boundaries of what\'s possible.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'Innovative approaches to complex problems, turning challenges into opportunities.'
    },
    {
      icon: Rocket,
      title: 'Rapid Deployment',
      description: 'Fast and efficient implementation of AI systems that deliver immediate value.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'A dedicated team of AI specialists committed to your success and growth.'
    }
  ]

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              About XenArcAI
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded by Parvesh Rawal, XenArcAI democratizes artificial intelligence by providing
              comprehensive API services that enable anyone to connect and interact with thousands of AI models.
              Our platform bridges the gap for individuals, students, developers, and organizations who don't
              have access to expensive hardware or technical expertise.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We offer a robust API infrastructure that makes advanced artificial intelligence accessible
              to everyone - from curious learners and creative professionals to developers and enterprises.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-lg mb-4">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-black rounded-lg p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            To democratize artificial intelligence by making it accessible to everyone - students, creators,
            developers, entrepreneurs, and organizations of all sizes. We believe AI should not be limited
            by expensive hardware or technical barriers.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
