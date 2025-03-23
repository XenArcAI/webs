import React from 'react';

function Careers() {
  return (
    <div className="pt-16 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Heading */}
        <h1 className="text-6xl font-extrabold mb-12 text-center uppercase">Join Our Team</h1>

        {/* Introduction Section */}
        <section className="mb-12">
          <p className="text-xl leading-relaxed text-center">
            At <strong>XenArcAI</strong>, we are shaping the future of artificial intelligence by building cutting-edge solutions that empower businesses and individuals worldwide. 
          </p>
          <p className="text-xl mt-4 text-center">
            We are looking for passionate, innovative, and dedicated individuals to join our talented team and help drive our mission forward. If you want to make an impact, we’d love to hear from you.
          </p>
        </section>

        {/* Why Work With Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Work With Us</h2>
          <ul className="text-lg space-y-4 leading-relaxed">
            <li>
              <strong>Innovative Environment:</strong> Work on groundbreaking projects that push the boundaries of AI technology.
            </li>
            <li>
              <strong>Collaborative Culture:</strong> Join a diverse and inclusive team that thrives on creativity and teamwork.
            </li>
            <li>
              <strong>Career Growth:</strong> Enjoy opportunities for professional development and career advancement.
            </li>
            <li>
              <strong>Global Impact:</strong> Be part of a company whose solutions are transforming industries around the world.
            </li>
          </ul>
        </section>

        {/* Open Positions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Open Positions</h2>
          <ul className="space-y-4 text-xl font-semibold text-center">
            <li>Software Engineer</li>
            <li>Data Scientist</li>
            <li>Product Manager</li>
          </ul>
        </section>

        {/* How to Apply */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">How to Apply</h2>
          <p className="text-lg leading-relaxed text-center">
            If you’re ready to take the next step in your career, we encourage you to get in touch with us. Send your CV and cover letter to:
          </p>
          <p className="text-xl font-bold text-center mt-4">
            <a 
              href="mailto:pr086832@gmail.com" 
              className="text-blue-400 underline"
            >
              pr086832@gmail.com
            </a>
          </p>
          <p className="text-lg mt-8 text-center">
            <strong>Note:</strong> Please include the role you’re applying for in the subject line of your email.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Careers;
