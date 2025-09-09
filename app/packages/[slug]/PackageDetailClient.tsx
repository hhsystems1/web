'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent } from '../../../components/ui/card'
import { Button } from '../../../components/ui/button'
import { BadgePill } from '../../../components/BadgePill'
import { VideoBlock } from '../../../components/VideoBlock'
import { FormEmbed } from '../../../components/FormEmbed'
import { Container } from '../../../components/Container'
import { Plan } from '../../../content/pricing'
import { Check, ArrowLeft } from 'lucide-react'

interface PackageDetailClientProps {
  plan: Plan
}

export function PackageDetailClient({ plan }: PackageDetailClientProps) {
  return (
    <div className="pt-16">
      <section className="py-24">
        <Container>
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
              <Link href="/packages" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Packages
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-4"
            >
              {plan.slug === 'professional' && (
                <BadgePill className="bg-primary text-primary-foreground">
                  Most Popular
                </BadgePill>
              )}
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {plan.name} Package
            </motion.h1>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {plan.monthly === 'custom' ? (
                <span className="text-4xl md:text-5xl font-bold text-primary">Custom Pricing</span>
              ) : (
                <>
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    ${plan.monthly}
                  </span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </>
              )}
            </motion.div>

            {plan.setupFeeNote && (
              <motion.p
                className="text-muted-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {plan.setupFeeNote}
              </motion.p>
            )}

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {plan.blurb}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="btn-primary" size="lg">
                {plan.slug === 'custom' ? 'Get Custom Quote' : 'Get Started Now'}
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Talk to a Strategist</Link>
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="glass h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">What&apos;s Included</h2>
                  <ul className="space-y-4">
                    {plan.features.map((feature: string, index: number) => (
                      <motion.li
                        key={feature}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                      >
                        <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Video */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">See It In Action</h2>
                <VideoBlock 
                  videoPath={plan.videoPath} 
                  title={plan.name}
                />
              </div>
            </motion.div>
          </div>

          {/* Form Embed Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below to begin your project. We&apos;ll review your information 
                and get back to you within 24 hours with next steps.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <FormEmbed 
                type={plan.formEmbed?.type}
                src={plan.formEmbed?.src}
                script={plan.formEmbed?.script}
                title={`${plan.name} Package Application`}
              />
            </div>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center glass rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Not sure if this package is right for you? Talk to one of our strategists 
              to get personalized recommendations.
            </p>
            <Button asChild className="btn-primary">
              <Link href="/contact">Talk to a Strategist</Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
