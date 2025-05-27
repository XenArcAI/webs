import React from 'react'
import { motion } from 'framer-motion'
import './Loading.css'

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="text-center">
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-white font-bold text-xl">X</span>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl animate-ping opacity-20"></div>
          </div>
        </motion.div>
        <motion.h2
          className="text-2xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          XenArcAI
        </motion.h2>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="text-gray-600 mt-4">Loading AI-powered experience...</p>
      </div>
    </div>
  )
}

export default Loading
