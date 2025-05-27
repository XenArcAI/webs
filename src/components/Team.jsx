import { motion } from 'framer-motion'
import { X, Mail, Users, Award, Target } from 'lucide-react'

const Team = () => {
  // Custom LinkedIn Icon Component
  const LinkedInIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )

  // Custom GitHub Icon Component
  const GitHubIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )

  const teamMembers = [
    {
      name: 'Parvesh Rawal',
      role: 'Founder & CEO',
      description: 'Visionary leader with extensive experience in AI strategy and business development. Passionate about democratizing AI technology and driving innovation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'pravesh@xenarcai.com'
      }
    },
    {
      name: 'Aniket Kumar',
      role: 'Co-Founder & CTO',
      description: 'Technical innovator specializing in machine learning and AI architecture. Expert in building scalable AI solutions and leading development teams with a passion for democratizing AI access.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: 'https://www.linkedin.com/in/aniket-kumar-59764025b/',
        twitter: 'https://x.com/AniketKuma17903',
        github: 'https://github.com/threatthriver',
        email: 'aniket@xenarcai.com'
      }
    },
    {
      name: 'Dhruva Kalva',
      role: 'AI Research Engineer',
      description: 'Dedicated researcher and engineer focused on advancing AI capabilities and developing cutting-edge algorithms for real-world applications.',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'dhruva@xenarcai.com'
      }
    },
    {
      name: 'Kailosh Kalimuthu',
      role: 'AI Solutions Architect',
      description: 'Expert in designing and implementing AI solutions that solve complex business challenges. Specializes in system architecture and optimization.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'kailosh@xenarcai.com'
      }
    }
  ]

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of AI experts, researchers, and innovators are dedicated to
            democratizing AI access and pushing the boundaries of artificial intelligence for everyone.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="mb-4">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-black transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-sm text-gray-600 mb-3 font-medium">
                  {member.role}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn profile`}
                    className="w-8 h-8 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s Twitter profile`}
                    className="w-8 h-8 bg-gray-100 hover:bg-black text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    <X className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s GitHub profile`}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-900 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    aria-label={`Email ${member.name}`}
                    className="w-8 h-8 bg-gray-100 hover:bg-black text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-black mb-1">4+</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-6 h-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-black mb-1">100%</div>
              <div className="text-sm text-gray-600">AI Focused</div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-black mb-1">3+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for democratizing AI access.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              View Open Positions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
