export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Helping Hands Web
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Web experiences that look like the future, function like a dream.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
            <a 
              href="/packages" 
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Web Development</h3>
              <p className="text-slate-300">Modern, responsive websites built with the latest technologies.</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">E-commerce</h3>
              <p className="text-slate-300">High-converting online stores with seamless payment integration.</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Web Apps</h3>
              <p className="text-slate-300">Custom applications and dashboards built for performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's build something amazing together.
          </p>
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black px-10 py-4 rounded-lg font-semibold text-lg transition-all"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  )
}
