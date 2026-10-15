import { Link, createFileRoute } from '@tanstack/react-router'
import { lyrics } from '../data'
import { Panel, Thumb } from '../ui'

export const Route = createFileRoute('/lyrics/')({ component: Lyrics })

function Lyrics() {
  return (
    <Panel as="h1" title="Lyrics" tone="red">
      <ul className="grid gap-4 md:grid-cols-3">
        {lyrics.map((l) => (
          <li key={l.slug}>
            <Link to="/lyrics/$slug" params={{ slug: l.slug }} className="flex h-full items-center gap-3 rounded-2xl bg-cream p-3 transition-transform hover:-rotate-1">
              <Thumb emoji={l.emoji} bg={l.bg} className="size-24 shrink-0 rounded-full! text-4xl" />
              <div>
                <p className="font-headline text-2xl leading-none">{l.title}</p>
                <p className="text-sm font-bold text-red uppercase">{l.artist}</p>
                <p className="text-xs font-bold">{l.year}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Panel>
  )
}
