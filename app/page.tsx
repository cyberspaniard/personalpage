import { Contact } from '@/components/contact'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { FloatingContactButton } from '@/components/floating-contact-button'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <Hero />
      <main>
        <Skills />
        <Experience />
        <Education />
      </main>
      <Contact />
      <FloatingContactButton />
    </div>
  )
}
