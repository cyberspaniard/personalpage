import { skills } from '@/lib/resume'
import { Section } from './section'

export function Skills() {
  return (
    <Section id="skills" index="02" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.group} className="flex flex-col gap-4 rounded-lg border bg-card p-5">
            <h3 className="text-sm font-semibold">{skill.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-primary/20 bg-accent px-2 py-1 font-mono text-xs text-accent-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
