import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, Zap, Target, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { FloatingElements, MorphingShape, TextRevealAnimation, StaggeredFadeIn } from './AdvancedAnimations'
import './Hero.css'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ['Innovation', 'Intelligence', 'Automation', 'Growth']

  useEffect(() => {
    const word = words[currentWordIndex]
    let currentIndex = 0

    const typeInterval = setInterval(() => {
      if (currentIndex <= word.length) {
        setTypedText(word.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentWordIndex])

  return (
    <section id="home" className="hero">
      {/* Background decorations */}
      <div className="hero-background" aria-hidden="true">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
        <div className="hero-blob hero-blob-4"></div>
        <div className="hero-blob hero-blob-5"></div>

        {/* Simple animations */}
        <FloatingElements />
        <MorphingShape />
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-badge"
          >
            <Sparkles className="hero-badge-icon" />
            Pioneering AI Solutions
          </motion.div>

          {/* Main heading */}
          <TextRevealAnimation delay={0.3}>
            <h1 className="hero-title">
              AI-Powered{' '}
              <span className="hero-title-gradient">
                {typedText}
                <span className="hero-cursor">|</span>
              </span>
              <br />
              <span className="hero-subtitle-text">with XenArcAI</span>
            </h1>
          </TextRevealAnimation>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            Making artificial intelligence accessible to everyone through powerful API services.
            Democratizing AI for students, creators, developers, and organizations worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-buttons"
          >
            <a
              href="#contact"
              className="hero-button-primary"
            >
              Get Started
              <ArrowRight className="hero-button-icon" />
            </a>
            <a
              href="#about"
              className="hero-button-secondary"
            >
              Learn More
            </a>
          </motion.div>

          {/* Feature highlights */}
          <StaggeredFadeIn staggerDelay={0.2}>
            <div className="hero-stats">
              <div className="hero-stat">
                <Zap />
                <span>Lightning Fast</span>
              </div>
              <div className="hero-stat">
                <Target />
                <span>Precision Focused</span>
              </div>
              <div className="hero-stat">
                <Sparkles />
                <span>Innovation Driven</span>
              </div>
            </div>
          </StaggeredFadeIn>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hero-scroll-indicator"
      >
        <a href="#about" className="hero-scroll-link">
          <ChevronDown className="hero-scroll-icon" />
          <span>Scroll to explore</span>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
