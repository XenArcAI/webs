import React from 'react';

function Api() {
  return (
    <div className="pt-16 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">API Documentation</h1>
        
        <p>
          <strong>Welcome to the XenArcAI API Hub – Your gateway to integrating powerful AI solutions into your applications effortlessly.</strong>
        </p>
        <p>
          Explore the power of XenArcAI’s cutting-edge AI tools through our robust and user-friendly API. This page provides everything you need to seamlessly integrate our AI capabilities into your applications, systems, or workflows.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8">Key Features</h2>
        <ul className="list-disc ml-5">
          <li><strong>Access endpoints tailored for user data, product management, and order processing.</strong></li>
          <li>Build dynamic solutions with precise and reliable data responses using our immensely powerful models and datacenter GPUs.</li>
          <li>Empower your applications with the scalability and intelligence of XenArcAI.</li>
        </ul>
        
        <p className="mt-6">
          Whether you're a developer looking to integrate AI into your projects or an enterprise seeking advanced solutions, our API is designed to fit your needs. <strong>Dive into the documentation and start transforming your ideas into impactful implementations.</strong>
        </p>

        <h2 className="text-2xl font-semibold mt-8">Available Endpoints</h2>
        <ul>
          <li>Endpoint 1: <code>/api/v1/users</code></li>
          <li>Endpoint 2: <code>/api/v1/products</code></li>
          <li>Endpoint 3: <code>/api/v1/orders</code></li>
        </ul>
      </div>
    </div>
  );
}

export default Api;