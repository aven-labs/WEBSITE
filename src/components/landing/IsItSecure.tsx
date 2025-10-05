import React from 'react'

const IsItSecure = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className="md:w-1/2">
            <img src="/file.svg" alt="Security Features" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Is It Really Secure?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Security isn't just a feature at Aven - it's our foundation. We've implemented 
              multiple layers of protection to ensure your communications remain private and secure.
            </p>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
                <p className="text-gray-600">
                  Every message is encrypted using state-of-the-art protocols, ensuring only 
                  intended recipients can access the content.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Zero Knowledge Architecture</h3>
                <p className="text-gray-600">
                  We can't read your messages - period. Our system is designed so that only you 
                  and your recipients have access to your communications.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Regular Security Audits</h3>
                <p className="text-gray-600">
                  Our platform undergoes regular third-party security audits to ensure 
                  we maintain the highest security standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IsItSecure