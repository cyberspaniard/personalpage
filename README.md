# Nadia Lavigne — Personal Calling Card

Hi, I'm Nadia Lavigne, an IT and Cybersecurity Professional. This repository holds the source for my personal website: a one-page calling card that shows my experience, skills, and education in one place.

## Why I built this

I'm looking for my next role in IT and cybersecurity. A resume can only say so much, so I built this site to:

- **Show my background clearly.** The site covers 20 years of experience across federal and enterprise work, from RMF/ATO compliance at NIWC Pacific to enterprise platform engineering at General Dynamics NASSCO and application development at San Diego MTS.
- **Count as a project in its own right.** It's a working example of how I plan, build, and ship a small web application from start to finish.
- **Make it easy to reach me.** Recruiters and hiring managers can find my LinkedIn and GitHub without digging.

## What's on the site

- **Overview:** who I am, what I do, and some key numbers, including my Secret security clearance
- **Skills:** cybersecurity and compliance (RMF/ATO, NIST, OWASP), identity and access management, programming, cloud and DevOps, databases and reporting, and program management
- **Experience:** my most recent roles and what I accomplished in each
- **Education and certifications:** M.S. in Cybersecurity, B.S. in Information Systems, and Google AI Fundamentals
- **Contact:** links to LinkedIn and GitHub

## Tech stack

- [Next.js](https://nextjs.org) (App Router) and React
- TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- Deployed on [Vercel](https://vercel.com)

## Design and security choices

- **Simple and focused.** Two main colors, black and blue, with a layout that's easy to scan.
- **Accessible.** Semantic HTML, keyboard-visible focus states, and readable contrast.
- **Hardened by default.** Coming from a security background, I set baseline HTTP security headers (`X-Content-Type-Options`, `Referrer-Policy`, `Strict-Transport-Security`, and others) in `next.config.mjs`.
- **One source of truth.** All resume content lives in `lib/resume.ts`, so updating the site means editing one file.

## Running it locally

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Let's connect

If you're hiring for IT or cybersecurity roles, I'd be glad to hear from you.

- LinkedIn: [linkedin.com/in/cyberspaniard](https://www.linkedin.com/in/cyberspaniard)
- GitHub: [github.com/cyberspaniard](https://github.com/cyberspaniard/)
