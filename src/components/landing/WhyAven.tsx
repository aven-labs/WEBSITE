import React from 'react'

const WhyAven = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Aven?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-3">Blazing Fast Performance</h3>
            <p className="text-gray-600">
              Experience lightning-fast message delivery with our optimized infrastructure. 
              No more waiting for messages to send or receive.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 text-3xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold mb-3">Uncompromising Security</h3>
            <p className="text-gray-600">
              Your privacy is our priority. End-to-end encryption ensures your messages 
              stay between you and your intended recipients.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-3">Intuitive Interface</h3>
            <p className="text-gray-600">
              A clean, modern interface that makes secure messaging accessible to everyone, 
              from tech experts to newcomers.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-3">Cross-Platform Support</h3>
            <p className="text-gray-600">
              Use Aven on any device. Our platform works seamlessly across desktop, 
              mobile, and web browsers.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold mb-3">Regular Updates</h3>
            <p className="text-gray-600">
              We continuously improve our platform with regular updates, new features, 
              and security enhancements.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">Feature Rich</h3>
            <p className="text-gray-600">
              From group chats to file sharing, get all the features you need without 
              compromising on security.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAven