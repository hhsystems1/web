import Link from 'next/link'
import { Container } from './Container'
import { siteConfig } from '../site.config'
import { Mail, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link 
                href="/" 
                className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                {siteConfig.name}
              </Link>
              <p className="text-muted-foreground max-w-xs">
                {siteConfig.description}
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Navigation</h3>
              <ul className="space-y-2">
                {siteConfig.nav.map((item: { name: string; href: string }) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/privacy-policy"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms-conditions"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Contact</h3>
              <div className="space-y-3">
                <a 
                  href="tel:+18337851847"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +1 833-785-1847
                </a>
                <a 
                  href="mailto:info@helpinghandsystems.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@helpinghandsystems.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
