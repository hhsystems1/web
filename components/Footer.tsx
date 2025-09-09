import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Helping Hands Web</h3>
            <p className="text-slate-400 mb-4 max-w-md">
              Web experiences that look like the future, function like a dream. 
              We create modern, high-performance websites and applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">E-commerce</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">Web Apps</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">SEO</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Get Started</Link></li>
              <li><Link href="/packages" className="text-slate-400 hover:text-cyan-400 transition-colors">Packages</Link></li>
              <li><Link href="/why-us" className="text-slate-400 hover:text-cyan-400 transition-colors">Why Choose Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Helping Hands Web. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
