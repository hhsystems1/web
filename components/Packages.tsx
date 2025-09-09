'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { BadgePill } from './BadgePill'
import { Container } from './Container'
import { Section } from './Section'
import { plans } from '../content/pricing'
import { Check } from 'lucide-react'

export function Packages() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Choose Your Package
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Select the perfect plan to accelerate your business growth
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-2">
                    {plan.monthly === 'custom' ? (
                      <span className="text-2xl font-bold text-primary">Custom</span>
                    ) : (
                      <>
                        <span className="text-3xl font-bold text-primary">
                          ${plan.monthly}
                        </span>
                        <span className="text-muted-foreground">/month</span>
                      </>
                    )}
                  </div>
                  {plan.setupFeeNote && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {plan.setupFeeNote}
                    </p>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.blurb}
                  </p>
                  
                  <ul className="space-y-2">
                    {plan.features.slice(0, 6).map((feature: string) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.features.length > 6 && (
                      <li className="text-xs text-muted-foreground">
                        +{plan.features.length - 6} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="pt-4">
                    <Button asChild className="w-full btn-primary">
                      <Link href={`/packages/${plan.slug}`}>
                        {plan.slug === 'custom' ? 'Get Quote' : 'Learn More'}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
