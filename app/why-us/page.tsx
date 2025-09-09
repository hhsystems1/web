'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '../../components/ui/card'
import * as LucideIcons from 'lucide-react'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'
import { siteConfig } from '../../site.config'
import { CheckCircle, Clock, Users } from 'lucide-react'

const workflowSteps = [
  {
    title: "Discovery & Planning",
    description: "We start by understanding your business, goals, and target audience to create a tailored strategy.",
    icon: "Search"
  },
  {
    title: "Design & Prototype",
    description: "Our designers create mockups and prototypes that bring your vision to life before development begins.",
    icon: "Palette"
  },
  {
    title: "Development & Testing",
    description: "We build your solution using modern technologies, with thorough testing at every stage.",
    icon: "Code"
  },
  {
    title: "Launch & Optimize",
    description: "After launch, we monitor performance and make optimizations to ensure peak results.",
    icon: "Rocket"
  }
]

export default function WhyUsPage() {
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
              Why Choose Us
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We&apos;re not just another web development agency. We&apos;re your partners 
              in creating digital experiences that drive real business results.
            </motion.p>
          </div>

          {/* Key advantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {siteConfig.whyUs.map((item: { title: string; description: string; icon: string }, index: number) => {
              const IconComponent = LucideIcons[item.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full glass glow-hover">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                        {IconComponent && <IconComponent className="w-8 h-8 text-accent" />}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* How we work section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">How We Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step, index) => {
                const IconComponent = LucideIcons[step.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>
                
                return (
                  <div key={step.title} className="text-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        {IconComponent && <IconComponent className="w-8 h-8 text-primary" />}
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      {index < workflowSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-x-8" />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="glass rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">2-4</div>
                <div className="text-muted-foreground">Weeks Average Delivery</div>
              </div>
              <div>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}
