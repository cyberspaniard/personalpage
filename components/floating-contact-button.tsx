'use client'

import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FloatingContactButton() {
  const [formVisible, setFormVisible] = useState(false)

  useEffect(() => {
    const form = document.getElementById('contact-form')
    if (!form) return
    const observer = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), {
      threshold: 0.1,
    })
    observer.observe(form)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href="#contact-form"
      aria-hidden={formVisible}
      tabIndex={formVisible ? -1 : undefined}
      className={cn(
        'fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-opacity duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none',
        formVisible ? 'pointer-events-none opacity-0' : 'opacity-100',
      )}
    >
      <Mail className="size-4" aria-hidden="true" />
      Contact me
    </a>
  )
}
