import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { lyrics } from '../data'
import { Thumb, backLink } from '../ui'

export const Route = createFileRoute('/lyrics/$slug')({
  loader: ({ params }) => {
    const l = lyrics.find((x) => x.slug === params.slug)
    if (!l) throw notFound()
    return l
  },
  component: Song,
})

function Song() {
  const l = Route.useLoaderData()
  return (
    <article className="mt-4 rounded-3xl bg-cream p-4 ring-4 ring-black/25 sm:p-8">
      <Link to="/lyrics" className={backLink}>
        ◂ Toutes les lyrics
      </Link>
      <div className="flex flex-wrap items-center gap-6">
        <Thumb emoji={l.emoji} bg={l.bg} className="size-32 shrink-0 animate-[spin_8s_linear_infinite] rounded-full! text-5xl sm:size-40" />
        <div>
          <p className="font-display text-sm text-red uppercase">♫ Les paroles de ton tube préféré</p>
          <h1 className="font-headline text-4xl leading-none sm:text-6xl">{l.title}</h1>
          <p className="font-display text-lg uppercase">
            {l.artist} <span className="text-red">({l.year})</span>
          </p>
        </div>
      </div>

      <div className="mt-8 columns-1 gap-6 sm:columns-2">
        {l.parts.map((p, i) => {
          const chorus = p.label === 'Refrain'
          return (
            <section
              key={i}
              className={`mb-6 break-inside-avoid rounded-2xl p-4 ${chorus ? '-rotate-1 bg-[#ff4fb8] text-white' : 'bg-white'}`}
            >
              <h2 className={`font-display text-sm uppercase ${chorus ? 'text-yellow' : 'text-red'}`}>{p.label}</h2>
              <p className={`mt-1 text-lg leading-snug ${chorus ? 'font-bold italic' : ''}`}>
                {p.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </section>
          )
        })}
      </div>

      <p className="rounded-2xl border-4 border-dashed border-blue bg-white p-4 font-bold">
        <span className="font-display text-blue uppercase">✏ Le mot de la rédac :</span> {l.note}
      </p>
    </article>
  )
}
