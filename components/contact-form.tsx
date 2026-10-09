'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqpepqqe'

type Status = 'idle' | 'sending' | 'success' | 'error'

const fieldClass =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    }).catch(() => null)

    if (response?.ok) {
      form.reset()
      setStatus('success')
    } else {
      setStatus('error')
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="flex scroll-mt-8 flex-col gap-4"
      aria-labelledby="contact-form-heading"
    >
      <h3 id="contact-form-heading" className="text-lg font-semibold">
        Send me a message
      </h3>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="contact-name" className="text-sm font-medium">
            Name
          </label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" maxLength={100} className={fieldClass} />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="contact-email" className="text-sm font-medium">
            Email
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" maxLength={200} className={fieldClass} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </label>
        <textarea id="contact-message" name="message" required rows={5} maxLength={5000} className={fieldClass} />
      </div>

      {/* Honeypot field: Formspree discards submissions where this is filled in by bots. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <Button type="submit" size="lg" disabled={status === 'sending'} className="w-fit">
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </Button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === 'success' && <span className="text-primary">{"Thanks! Your message was sent. I'll get back to you soon."}</span>}
          {status === 'error' && (
            <span className="text-destructive">{'Something went wrong. Please try again, or reach me on LinkedIn.'}</span>
          )}
        </p>
      </div>
    </form>
  )
}
