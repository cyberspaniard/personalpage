import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { profile, stats } from '@/lib/resume'

export function Hero() {
  return (
    <header className="flex flex-col gap-10 pt-20 pb-16 md:pt-28">
      <div className="flex flex-col gap-6">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-accent px-3 py-1 font-mono text-xs text-accent-foreground">
          <ShieldCheck className="size-3.5" aria-hidden="true" />
          Open to new opportunities
        </p>
        <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-7xl">{profile.name}</h1>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="-mt-3 inline-flex w-fit items-center gap-1 font-mono text-sm text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {`Now on GitHub · ${profile.githubLabel}`}
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
        <p className="text-xl text-primary md:text-2xl">{profile.title}</p>
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{profile.summary}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Connect on LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            View GitHub
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            View experience
          </a>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 bg-background p-5 last:col-span-2 md:last:col-span-1">
            <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="order-1 font-mono text-2xl font-semibold text-primary">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  )
}
