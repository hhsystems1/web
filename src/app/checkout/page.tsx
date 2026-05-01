import { Suspense } from 'react';

import CheckoutClient from './CheckoutClient';

export const metadata = {
  title: 'Secure Skill Checkout | Helping Hands Systems',
  description: 'Choose an AI agent skill or skill pack and continue toward secure Stripe checkout.',
};

export default function CheckoutPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-black" />}>
      <CheckoutClient />
    </Suspense>
  );
}
