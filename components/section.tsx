export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t py-16">
      <h2 id={`${id}-heading`} className="mb-10 flex items-baseline gap-3 text-2xl font-semibold tracking-tight">
        <span className="font-mono text-sm text-primary">{index}</span>
        {title}
      </h2>
      {children}
    </section>
  )
}
