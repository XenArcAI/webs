const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-4">
          <span className="text-xl font-bold">XenArcAI</span>
        </div>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Making artificial intelligence accessible to everyone through powerful API services.
          Democratizing AI for students, creators, developers, and organizations worldwide.
        </p>
        <div className="text-gray-400 text-sm">
          © {currentYear} XenArcAI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
