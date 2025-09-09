'use client'

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-600">
            <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-slate-300 mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="">Select a project type</option>
                  <option value="website">New Website</option>
                  <option value="ecommerce">E-commerce Store</option>
                  <option value="webapp">Web Application</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black py-3 rounded-lg font-semibold transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Get Started Today</h3>
              <p className="text-slate-300 mb-6">
                Ready to transform your digital presence? We're here to help you every step of the way.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
              <h4 className="text-lg font-semibold mb-4 text-white">What happens next?</h4>
              <ol className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="bg-cyan-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  We'll review your project details and get back to you within 24 hours
                </li>
                <li className="flex items-start">
                  <span className="bg-cyan-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  Schedule a consultation to discuss your vision and requirements
                </li>
                <li className="flex items-start">
                  <span className="bg-cyan-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  Receive a detailed proposal with timeline and pricing
                </li>
                <li className="flex items-start">
                  <span className="bg-cyan-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  Start building your amazing project!
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
