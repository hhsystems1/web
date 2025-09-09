export default function WhyUsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose Us
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We're not just developers - we're your partners in creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Futuristic Design</h3>
                <p className="text-slate-300">We create visually stunning experiences that look like they're from the future while maintaining perfect functionality.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Performance First</h3>
                <p className="text-slate-300">Every line of code is optimized for speed, ensuring lightning-fast user experiences that convert visitors into customers.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Modern Technology</h3>
                <p className="text-slate-300">We use the latest frameworks and technologies to ensure your website is built for today and ready for tomorrow.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Clean Documentation</h3>
                <p className="text-slate-300">Comprehensive documentation and seamless project handoff for easy maintenance and future updates.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Responsive & Accessible</h3>
                <p className="text-slate-300">WCAG compliant designs that work perfectly across all devices and screen sizes, ensuring everyone can use your site.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">6</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Analytics Built In</h3>
                <p className="text-slate-300">Track performance and user behavior with integrated analytics from day one to make data-driven decisions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Experience the Difference?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join the businesses that have transformed their digital presence with our help.
          </p>
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black px-10 py-4 rounded-lg font-semibold text-lg transition-all inline-block"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  )
}
