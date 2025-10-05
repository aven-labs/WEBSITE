import React from 'react'

const WhatIsAven = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <img src="/window.svg" alt="Aven Platform" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is Aven?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Aven is a next-generation communication platform that puts privacy and security first. 
              We've built a system that makes secure messaging accessible to everyone, without 
              compromising on features or user experience.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Military-grade encryption for all messages</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Cross-platform support for seamless communication</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>Advanced features like self-destructing messages and secure file sharing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span>No data collection or third-party access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsAven