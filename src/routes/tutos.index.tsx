import { Link, createFileRoute } from '@tanstack/react-router'
import { tutorials } from '../data'
import { Panel, Thumb, stars } from '../ui'

export const Route = createFileRoute('/tutos/')({ component: Tutorials })

function Tutorials() {
  return (
    <Panel as="h1" title="Tutos DIY">
      <ul className="grid gap-4 md:grid-cols-3">
        {tutorials.map((t) => (
          <li key={t.slug}>
            <Link to="/tutos/$slug" params={{ slug: t.slug }} className="block h-full rounded-2xl bg-cream p-3 transition-transform hover:rotate-1">
              <Thumb emoji={t.emoji} bg={t.bg} className="aspect-[4/3] text-7xl" />
              <p className="mt-3 font-display text-lg leading-tight">{t.title}</p>
              <p className="mt-1 text-sm font-bold">
                <span className="text-red" aria-label={`Difficulté ${t.level} sur 3`}>{stars(t.level)}</span> · {t.duration}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Panel>
  )
}
