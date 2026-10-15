import { Link, createFileRoute } from '@tanstack/react-router'
import { interviews, lyrics, quiz, ringtoneCategories, tutorials } from '../data'
import { RingtoneBoard } from '../ringtone-board'
import { Panel, ServeBand, Thumb, WallpaperGrid, stars } from '../ui'

export const Route = createFileRoute('/')({ component: Home })

const more = 'gloss mt-auto block w-fit rounded-full bg-ink px-4 py-1 font-display text-sm text-yellow uppercase italic hover:bg-blue-dark'

function Home() {
  return (
    <>
      <h1 className="sr-only">FlareZine : fonds d’écran, sonneries et quiz</h1>
      <div className="grid gap-x-4 md:grid-cols-3">
        <Panel title="Big fonds d’écran">
          <WallpaperGrid cols="grid-cols-3" />
          <span className="h-3" />
          <Link to="/fonds-ecran" className={`${more} mx-auto`}>
            Tous les fonds ▸
          </Link>
        </Panel>

        <Panel title="Sonneries" tone="blue">
          <ol className="rounded-2xl bg-cream p-3">
            {ringtoneCategories.flatMap((c) => c.items).slice(0, 12).map((r, i) => (
              <li key={r.code} className="flex items-baseline gap-2 border-b border-ink/15 py-0.5 last:border-0">
                <span className="font-display text-xs text-red">{r.code}</span>
                <span className="text-sm font-bold">{r.title}</span>
                <span className="ml-auto font-display text-xs">{i + 1}</span>
              </li>
            ))}
          </ol>
          <span className="h-3" />
          <Link to="/sonneries" className={`${more} mx-auto`}>
            Toutes les sonneries ▸
          </Link>
        </Panel>

        <Panel title="Le test">
          <div className="relative rounded-2xl bg-cream p-4 pt-8 text-center">
            <span className="sticker absolute -top-4 -right-3 grid size-14 animate-wiggle place-items-center bg-red font-display text-xs text-white">
              NEW
            </span>
            <p className="font-headline text-2xl leading-tight">{quiz.title}</p>
            <p className="mt-2 text-sm font-bold">{quiz.questions.length} questions pour découvrir le Pibble qui sommeille en toi !</p>
          </div>
          <div className="mt-4 rounded-2xl bg-ink p-4 text-white">
            <p className="font-display text-sm text-yellow uppercase">Question 1 : {quiz.questions[0].q}</p>
            <ul className="mt-2 grid gap-1 text-sm font-bold">
              {quiz.questions[0].a.map(([label], i) => (
                <li key={label}>
                  <span className="text-orange">{'ABCDEF'[i]}.</span> {label}
                </li>
              ))}
            </ul>
          </div>
          <span className="h-3" />
          <Link to="/quiz" className={`${more} mx-auto`}>
            Fais le test ▸
          </Link>
        </Panel>
      </div>

      <ServeBand />

      <div className="mt-6">
        <RingtoneBoard />
      </div>

      <div className="grid gap-x-4 md:grid-cols-3">
        <Panel title="Interviews" tone="blue">
          <ul className="grid gap-2">
            {interviews.map((it) => (
              <li key={it.slug}>
                <Link to="/interviews/$slug" params={{ slug: it.slug }} className="flex items-center gap-3 rounded-2xl bg-cream p-2 hover:bg-white">
                  <Thumb emoji={it.emoji} bg={it.bg} className="size-14 shrink-0 text-2xl" />
                  <span>
                    <span className="block font-display leading-tight">{it.name}</span>
                    <span className="text-xs font-bold italic">« {it.quote} »</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Tutos">
          <ul className="grid gap-2">
            {tutorials.map((t) => (
              <li key={t.slug}>
                <Link to="/tutos/$slug" params={{ slug: t.slug }} className="flex items-center gap-3 rounded-2xl bg-cream p-2 hover:bg-white">
                  <Thumb emoji={t.emoji} bg={t.bg} className="size-14 shrink-0 text-2xl" />
                  <span>
                    <span className="block font-display leading-tight">{t.title}</span>
                    <span className="text-xs font-bold">
                      <span className="text-red">{stars(t.level)}</span> · {t.duration}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Lyrics" tone="red">
          <ul className="grid gap-2">
            {lyrics.map((l) => (
              <li key={l.slug}>
                <Link to="/lyrics/$slug" params={{ slug: l.slug }} className="flex items-center gap-3 rounded-2xl bg-cream p-2 hover:bg-white">
                  <Thumb emoji={l.emoji} bg={l.bg} className="size-14 shrink-0 rounded-full! text-2xl" />
                  <span>
                    <span className="block font-display leading-tight">{l.title}</span>
                    <span className="text-xs font-bold text-red uppercase">{l.artist}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </>
  )
}
