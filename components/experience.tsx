import { experience } from '@/lib/resume'
import { Section } from './section'

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="flex flex-col gap-12">
        {experience.map((job) => (
          <li key={job.org} className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
            <p className="font-mono text-sm text-muted-foreground">{job.period}</p>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <p className="text-primary">{job.org}</p>
                <p className="text-sm text-muted-foreground">{job.location}</p>
              </div>
              <div className="flex flex-col gap-6">
                {job.sections.map((section) => (
                  <div key={section.title} className="flex flex-col gap-3 border-l-2 border-primary/40 pl-4">
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                      {section.title}
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {section.highlights.map((item) => (
                        <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
