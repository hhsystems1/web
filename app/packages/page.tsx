'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { BadgePill } from '../../components/BadgePill'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { plans } from '../../content/pricing'
import { Check } from 'lucide-react'

export default function PackagesPage() {
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
              Choose Your Package
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Select the perfect plan to accelerate your business growth. Each package 
              is designed to provide maximum value and results for your investment.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full glass glow-hover relative ${
                  plan.slug === 'professional' ? 'border-primary/50' : ''
                }`}>
                  {plan.slug === 'professional' && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <BadgePill className="bg-primary text-primary-foreground">
                        Most Popular
                      </BadgePill>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-2">
                      {plan.monthly === 'custom' ? (
                        <span className="text-4xl font-bold text-primary">Custom</span>
                      ) : (
                        <>
                          <span className="text-4xl font-bold text-primary">
                            ${plan.monthly}
                          </span>
                          <span className="text-muted-foreground">/month</span>
                        </>
                      )}
                    </div>
                    {plan.setupFeeNote && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan.setupFeeNote}
                      </p>
                    )}
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {plan.blurb}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold">What&apos;s included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature: string) => (
                          <li key={feature} className="flex items-center text-sm">
                            <Check className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 space-y-3">
                      <Button asChild className="w-full btn-primary" size="lg">
                        <Link href={`/packages/${plan.slug}`}>
                          {plan.slug === 'custom' ? 'Get Custom Quote' : 'Learn More & Get Started'}
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/contact">
                          Talk to a Strategist
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center glass rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Not sure which package is right for you?</h3>
            <p className="text-muted-foreground mb-6">
              Schedule a free consultation and we&apos;ll help you choose the perfect solution for your needs.
            </p>
            <Button asChild className="btn-primary">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}
