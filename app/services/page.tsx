'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '../../components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion'
import * as LucideIcons from 'lucide-react'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { siteConfig } from '../../site.config'

const faqData = [
  {
    question: "How long does it take to build a website?",
    answer: "Timeline varies by project complexity. Simple sites take 2-4 weeks, while complex applications can take 2-3 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes! All our packages include ongoing support and maintenance. We handle updates, security patches, and technical issues so you can focus on your business."
  },
  {
    question: "Can you help with SEO and marketing?",
    answer: "Absolutely. We build SEO optimization into every site and can help with marketing automation, analytics setup, and conversion optimization."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, proven technologies including React, Next.js, Node.js, and cloud hosting. Our tech stack ensures your site is fast, secure, and scalable."
  },
  {
    question: "Do you work with existing websites?",
    answer: "Yes, we can redesign existing sites, add new features, or migrate to modern platforms. We'll assess your current site and recommend the best approach."
  }
]

export default function ServicesPage() {
  return (
    <div>
      <Section>
        <Container>
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              From concept to launch, we provide comprehensive web development services 
              that combine cutting-edge technology with stunning design.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {siteConfig.services.map((service: { title: string; description: string; icon: string }, index: number) => {
              const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full glass glow-hover">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                        {IconComponent && <IconComponent className="w-8 h-8 text-primary" />}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      
                      {/* Extended descriptions for each service */}
                      <div className="text-sm text-muted-foreground/80">
                        {service.title === 'Modern Website Design' && (
                          <p>Custom designs that reflect your brand, optimized for conversion and user experience across all devices.</p>
                        )}
                        {service.title === 'Web Apps and Dashboards' && (
                          <p>Interactive applications with real-time data, user authentication, and powerful admin interfaces.</p>
                        )}
                        {service.title === 'E-commerce' && (
                          <p>Full-featured online stores with payment processing, inventory management, and order fulfillment.</p>
                        )}
                        {service.title === 'AI Chatbots' && (
                          <p>Intelligent customer service automation that handles inquiries, books appointments, and qualifies leads.</p>
                        )}
                        {service.title === 'Marketing Sites and SEO' && (
                          <p>Search-optimized websites designed to rank well and convert visitors into customers.</p>
                        )}
                        {service.title === 'Automations and Integrations' && (
                          <p>Connect your tools and automate workflows to save time and reduce manual work.</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="glass rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}
