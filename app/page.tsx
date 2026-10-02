import { Contact } from '@/components/contact'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <Hero />
      <main>
        <Experience />
        <Skills />
        <Education />
      </main>
      <Contact />
    </div>
  )
}
