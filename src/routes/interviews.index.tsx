import { Link, createFileRoute } from '@tanstack/react-router'
import { interviews } from '../data'
import { Panel, Thumb } from '../ui'

export const Route = createFileRoute('/interviews/')({ component: Interviews })

function Interviews() {
  return (
    <Panel as="h1" title="Interviews exclu" tone="blue">
      <ul className="grid gap-4 md:grid-cols-3">
        {interviews.map((it) => (
          <li key={it.slug}>
            <Link to="/interviews/$slug" params={{ slug: it.slug }} className="block h-full rounded-2xl bg-cream p-3 transition-transform hover:-rotate-1">
              <Thumb emoji={it.emoji} bg={it.bg} className="aspect-[4/3] text-7xl" />
              <p className="mt-3 font-headline text-2xl leading-none">{it.name}</p>
              <p className="text-sm font-bold text-red uppercase">{it.job}</p>
              <p className="mt-2 text-sm italic">« {it.quote} »</p>
            </Link>
          </li>
        ))}
      </ul>
    </Panel>
  )
}
