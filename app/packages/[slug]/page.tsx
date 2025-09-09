import { notFound } from 'next/navigation'
import { plans, Plan } from '../../../content/pricing'
import { PackageDetailClient } from './PackageDetailClient'

export function generateStaticParams() {
  return plans.map((plan) => ({
    slug: plan.slug,
  }))
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function PackageDetailPage({ params }: PageProps) {
  const plan = plans.find((p: Plan) => p.slug === params.slug)

  if (!plan) {
    notFound()
  }

  return <PackageDetailClient plan={plan} />
}
