import { certifications, education, languages } from '@/lib/resume'
import { Section } from './section'

export function Education() {
  return (
    <Section id="education" index="03" title="Education & Certifications">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <div key={item.degree} className="flex flex-col gap-1 rounded-lg border bg-card p-5">
            <p className="font-mono text-sm text-primary">{item.year}</p>
            <h3 className="font-semibold">{item.degree}</h3>
            <p className="text-sm text-muted-foreground">{item.school}</p>
          </div>
        ))}
        {certifications.map((cert) => (
          <div key={cert.name} className="flex flex-col gap-1 rounded-lg border bg-card p-5">
            <p className="font-mono text-sm text-primary">{cert.year}</p>
            <h3 className="font-semibold">{cert.name}</h3>
            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
          </div>
        ))}
        <div className="flex flex-col gap-1 rounded-lg border bg-card p-5">
          <p className="font-mono text-sm text-primary">Languages</p>
          <h3 className="font-semibold">{languages.join(', ')}</h3>
        </div>
      </div>
    </Section>
  )
}
