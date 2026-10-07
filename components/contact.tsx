import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/resume'

export function Contact() {
  return (
    <footer className="border-t py-16">
      <div className="flex flex-col gap-6 rounded-lg border border-primary/30 bg-accent p-8 md:p-10">
        <h2 className="text-balance text-3xl font-semibold tracking-tight">{"Let's connect"}</h2>
        <p className="max-w-xl leading-relaxed text-muted-foreground">
          {"I'm looking for my next role in IT and cybersecurity. Reach me on LinkedIn, or book a time to talk on Calendly."}
        </p>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 font-mono text-lg text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {profile.linkedinLabel}
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="-mt-3 inline-flex w-fit items-center gap-2 font-mono text-lg text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {profile.githubLabel}
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </a>
        <a
          href={profile.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="-mt-3 inline-flex w-fit items-center gap-2 font-mono text-lg text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {profile.calendlyLabel}
          <span className="sr-only">(schedule a meeting, opens in a new tab)</span>
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </a>
      </div>
      <p className="mt-10 font-mono text-xs text-muted-foreground">
        {`© ${new Date().getFullYear()} ${profile.name}. This site is a personal project, built with Next.js and Tailwind CSS.`}
      </p>
    </footer>
  )
}
