import Link from 'next/link'
import { Button } from '../components/ui/button'
import { Container } from '../components/Container'

export default function NotFound() {
  return (
    <div className="pt-16">
      <section className="min-h-[70vh] flex items-center py-24">
        <Container>
          <div className="text-center">
            <div className="text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              404
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary">
                <Link href="/">Go Home</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
