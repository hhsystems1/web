import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log the form submission (in production, you would save to database or send email)
    console.log('Contact form submission:', {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with your preferred service:
    // - Send email via SendGrid, Resend, or Nodemailer
    // - Save to database (Supabase, MongoDB, etc.)
    // - Send to CRM (HubSpot, Salesforce, etc.)
    // - Send to Slack/Discord notification

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        data: { name, email, company }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
