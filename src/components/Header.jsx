import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <a href="#home" className="header-logo">
          <span>XenArcAI</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="header-nav-link"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="header-mobile-button"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

      {/* Mobile Navigation */}
      <div className={`header-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="header-mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="header-mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>

      {/* Scroll Progress Bar */}
      <div className="header-progress-bar">
        <div
          className="header-progress-fill"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      </div>
    </header>
  )
}

export default Header
