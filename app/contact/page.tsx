'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="pt-16">
      <Section>
        <Container>
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Let&apos;s Build Something Amazing
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to transform your digital presence? Get in touch and let&apos;s discuss 
              how we can help your business thrive online.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-success" />
                      </div>
                      <h3 className="text-xl font-semibold">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                              Name *
                            </label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              className="glass"
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                              Email *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              className="glass"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company
                          </label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            className="glass"
                            placeholder="Your company name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            className="glass"
                            placeholder="Tell us about your project..."
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full btn-primary"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Sending...' : 'Send Message'}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Book a Call CTA */}
              <Card className="glass">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Book a Strategy Call</h3>
                  <p className="text-muted-foreground mb-6">
                    Get personalized advice and a custom solution designed specifically 
                    for your business needs.
                  </p>
                  <Button asChild className="btn-primary w-full">
                    <a href="#book" onClick={(e) => { e.preventDefault(); alert('Calendar booking will be integrated here') }}>
                      Schedule Free Consultation
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="glass">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">hello@helpinghandsweb.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">Remote & On-site</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="glass">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">⚡ 24 Hours</div>
                    <p className="text-muted-foreground">Average response time</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
