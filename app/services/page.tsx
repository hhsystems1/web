export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We provide comprehensive web development services to help your business thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-600 hover:border-cyan-400 transition-colors">
            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Web Development</h3>
            <p className="text-slate-300 mb-6">Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.</p>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>• Responsive Design</li>
              <li>• Performance Optimization</li>
              <li>• SEO-Friendly Structure</li>
              <li>• Modern Frameworks</li>
            </ul>
          </div>

          {/* E-commerce */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-600 hover:border-cyan-400 transition-colors">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5H17M9 19a2 2 0 100 4 2 2 0 000-4zM20 19a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">E-commerce Solutions</h3>
            <p className="text-slate-300 mb-6">High-converting online stores with seamless payment integration and inventory management systems.</p>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>• Payment Gateway Integration</li>
              <li>• Inventory Management</li>
              <li>• Order Processing</li>
              <li>• Analytics & Reporting</li>
            </ul>
          </div>

          {/* Web Applications */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-600 hover:border-cyan-400 transition-colors">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Web Applications</h3>
            <p className="text-slate-300 mb-6">Custom web applications and dashboards tailored to your business needs and workflows.</p>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>• Custom Dashboards</li>
              <li>• Database Integration</li>
              <li>• User Authentication</li>
              <li>• API Development</li>
            </ul>
          </div>

          {/* SEO & Marketing */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-600 hover:border-cyan-400 transition-colors">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">SEO & Marketing</h3>
            <p className="text-slate-300 mb-6">Search engine optimization and digital marketing strategies to increase your online visibility.</p>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>• Search Engine Optimization</li>
              <li>• Content Strategy</li>
              <li>• Analytics Setup</li>
              <li>• Performance Monitoring</li>
            </ul>
          </div>

          {/* Maintenance */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-600 hover:border-cyan-400 transition-colors">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Maintenance & Support</h3>
            <p className="text-slate-300 mb-6">Ongoing maintenance and support to keep your website secure, updated, and performing at its best.</p>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>• Regular Updates</li>
              <li>• Security Monitoring</li>
              <li>• Backup Management</li>
              <li>• Technical Support</li>
            </ul>
          </div>

          {/* Consultation */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-600 hover:border-cyan-400 transition-colors">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Strategy Consultation</h3>
            <p className="text-slate-300 mb-6">Expert consultation to help you make the right decisions for your digital strategy and technology stack.</p>
            <ul className="text-sm text-slate-400 space-y-2">
              <li>• Technology Planning</li>
              <li>• Architecture Design</li>
              <li>• Best Practices</li>
              <li>• Growth Strategy</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black px-10 py-4 rounded-lg font-semibold text-lg transition-all inline-block"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  )
}
