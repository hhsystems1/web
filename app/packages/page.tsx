export default function PackagesPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Packages
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the perfect package for your project. All packages include modern design, responsive layout, and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Starter Package */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-600 hover:border-cyan-400 transition-colors">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$97</div>
              <p className="text-slate-400">Perfect for small businesses</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Up to 5 pages
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Responsive design
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Contact form
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Basic SEO setup
              </li>
            </ul>
            
            <a 
              href="/contact" 
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-3 rounded-lg font-semibold transition-colors block text-center"
            >
              Get Started
            </a>
          </div>

          {/* Professional Package */}
          <div className="bg-slate-800/50 p-8 rounded-lg border-2 border-cyan-400 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$297</div>
              <p className="text-slate-400">Perfect for growing businesses</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Up to 15 pages
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Advanced animations
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                CMS integration
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Analytics setup
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                3 months support
              </li>
            </ul>
            
            <a 
              href="/contact" 
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black py-3 rounded-lg font-semibold transition-all block text-center"
            >
              Get Started
            </a>
          </div>

          {/* Enterprise Package */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-600 hover:border-purple-400 transition-colors">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">Custom</div>
              <p className="text-slate-400">For large-scale projects</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited pages
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Custom functionality
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                API integrations
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
              <li className="flex items-center text-slate-300">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                12 months support
              </li>
            </ul>
            
            <a 
              href="/contact" 
              className="w-full bg-purple-500 hover:bg-purple-400 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6 text-white">Need Something Different?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We can create a custom package tailored to your specific needs and budget.
          </p>
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black px-10 py-4 rounded-lg font-semibold text-lg transition-all inline-block"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </div>
  )
}
