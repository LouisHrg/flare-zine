import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { tutorials } from '../data'
import { Thumb, backLink, stars } from '../ui'

export const Route = createFileRoute('/tutos/$slug')({
  loader: ({ params }) => {
    const t = tutorials.find((x) => x.slug === params.slug)
    if (!t) throw notFound()
    return t
  },
  component: Tutorial,
})

function Tutorial() {
  const t = Route.useLoaderData()
  return (
    <article className="mt-4 rounded-3xl bg-cream p-4 ring-4 ring-black/25 sm:p-8">
      <Link to="/tutos" className={backLink}>
        ◂ Tous les tutos
      </Link>
      <div className="grid items-center gap-6 md:grid-cols-[1fr_240px]">
        <div>
          <p className="font-display text-sm text-red uppercase">Tuto DIY ✂</p>
          <h1 className="font-headline text-4xl leading-none sm:text-5xl">{t.title}</h1>
          <p className="mt-3 text-lg font-bold">{t.intro}</p>
          <p className="mt-4 flex flex-wrap gap-2 font-display text-sm uppercase">
            <span className="rounded-full bg-ink px-3 py-1 text-yellow">
              Difficulté <span aria-label={`${t.level} sur 3`}>{stars(t.level)}</span>
            </span>
            <span className="rounded-full bg-ink px-3 py-1 text-yellow">Durée : {t.duration}</span>
          </p>
        </div>
        <Thumb emoji={t.emoji} bg={t.bg} className="mx-auto aspect-square w-full max-w-56 -rotate-3 text-8xl md:max-w-none" />
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[260px_1fr]">
        <aside className="h-fit rotate-1 rounded-2xl bg-yellow p-4 shadow-[4px_4px_0_#0005]">
          <h2 className="font-display uppercase">Le matos</h2>
          <ul className="mt-2 grid gap-1 text-sm font-bold">
            {t.materials.map((m) => (
              <li key={m}>
                <span className="text-red">♥</span> {m}
              </li>
            ))}
          </ul>
        </aside>

        <ol className="grid gap-4">
          {t.steps.map((s, i) => (
            <li key={s} className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-ink bg-[#ff4fb8] font-display text-white">{i + 1}</span>
              <p className="pt-2">{s}</p>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-8 rounded-2xl border-4 border-dashed border-blue bg-white p-4 font-bold">
        <span className="font-display text-blue uppercase">💡 L’astuce de la rédac :</span> {t.tip}
      </p>
    </article>
  )
}
