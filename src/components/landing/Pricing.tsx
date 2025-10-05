import React from 'react'

const Pricing = () => {
  return (
    <section className="py-16" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <div className="text-4xl font-bold mb-6">
              Free
              <span className="text-base font-normal text-gray-600">/forever</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Basic encryption</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>1-on-1 messaging</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>File sharing up to 100MB</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg transform scale-105">
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <div className="text-4xl font-bold mb-6">
              $9.99
              <span className="text-base font-normal opacity-90">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-white mr-2">✓</span>
                <span>Advanced encryption</span>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✓</span>
                <span>Group messaging</span>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✓</span>
                <span>File sharing up to 1GB</span>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">✓</span>
                <span>Priority support</span>
              </li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-gray-100">
              Get Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <div className="text-4xl font-bold mb-6">
              Custom
              <span className="text-base font-normal text-gray-600">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Military-grade encryption</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Unlimited everything</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Custom features</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing