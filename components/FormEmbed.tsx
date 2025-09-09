'use client'

interface FormEmbedProps {
  type?: 'iframe' | 'script'
  src?: string
  script?: string
  title?: string
}

export function FormEmbed({ type, src, script, title }: FormEmbedProps) {
  if (type === 'iframe' && src) {
    return (
      <div className="w-full">
        <iframe
          src={src}
          className="w-full h-96 border-0 rounded-lg"
          title={title || 'Contact Form'}
          loading="lazy"
        />
      </div>
    )
  }

  if (type === 'script' && script) {
    return (
      <div
        className="w-full"
        dangerouslySetInnerHTML={{ __html: script }}
      />
    )
  }

  // Placeholder when no form is configured
  return (
    <div className="bg-muted/20 border-2 border-dashed border-muted-foreground/20 rounded-lg p-8">
      <div className="text-center space-y-4">
        <div className="text-4xl">📋</div>
        <h3 className="text-lg font-semibold">Contact Form</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          A custom contact form will be embedded here. This could be a Typeform, 
          Google Form, or any other form solution.
        </p>
        <div className="text-xs text-muted-foreground/60 space-y-1 border-t pt-4 mt-4">
          <p>TODO: Configure form embed in package data</p>
          <p>Supported types: iframe, script</p>
          <p>Current config: {type || 'none'}</p>
        </div>
      </div>
    </div>
  )
}
