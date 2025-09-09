import Link from 'next/link'
import { Container } from './Container'
import { siteConfig } from '../site.config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Connect</h3>
              <div className="flex space-x-4">
                <Link 
                  href={siteConfig.social.twitter}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>
                <Link 
                  href={siteConfig.social.linkedin}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
                <Link 
                  href={siteConfig.social.github}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
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
