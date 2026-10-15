import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { interviews } from '../data'
import { Thumb, backLink } from '../ui'

export const Route = createFileRoute('/interviews/$slug')({
  loader: ({ params }) => {
    const it = interviews.find((i) => i.slug === params.slug)
    if (!it) throw notFound()
    return it
  },
  component: Interview,
})

function Interview() {
  const it = Route.useLoaderData()
  return (
    <article className="mt-4 rounded-3xl bg-cream p-4 ring-4 ring-black/25 sm:p-8">
      <Link to="/interviews" className={backLink}>
        ◂ Toutes les interviews
      </Link>
      <p className="font-display text-sm text-red uppercase">Interview exclu ★</p>
      <h1 className="font-headline text-4xl leading-none sm:text-6xl">{it.name}</h1>
      <p className="font-bold uppercase">{it.job}</p>

      <div className="mt-6 grid gap-8 md:grid-cols-[1fr_280px]">
        <div>
          <p className="text-lg font-bold">{it.intro}</p>
          <blockquote className="my-6 -rotate-1 rounded-2xl bg-[#ff4fb8] p-4 text-center font-headline text-2xl text-white sm:text-3xl">
            « {it.quote} »
          </blockquote>
          <dl>
            {it.qa.map(([q, a]) => (
              <div key={q} className="mt-5">
                <dt className="font-display text-red">FlareZine : {q}</dt>
                <dd className="mt-1">
                  <span className="font-bold">{it.name} :</span> {a}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <aside>
          <Thumb emoji={it.emoji} bg={it.bg} className="aspect-[3/4] rotate-2 text-8xl" />
          <div className="mt-6 rounded-2xl border-4 border-dashed border-[#ff4fb8] bg-white p-3">
            <h2 className="text-center font-display text-[#ff4fb8] uppercase">♥ Sa carte d’identité ♥</h2>
            <dl className="mt-2 text-sm">
              {Object.entries(it.id).map(([k, v]) => (
                <div key={k} className="flex gap-2 border-b border-ink/10 py-1 last:border-0">
                  <dt className="font-bold">{k} :</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </article>
  )
}
