'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import * as LucideIcons from 'lucide-react'
import { Container } from './Container'
import { Section } from './Section'
import { siteConfig } from '../site.config'

export function WhyUs() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            The advantages that set us apart from the competition
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyUs.map((item: { title: string; description: string; icon: string }, index: number) => {
            const IconComponent = LucideIcons[item.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass glow-hover">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        {IconComponent && <IconComponent className="w-6 h-6 text-accent" />}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
