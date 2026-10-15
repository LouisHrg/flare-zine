import { Link, createFileRoute } from '@tanstack/react-router'
import { quiz, ringtoneCategories } from '../data'
import { RingtoneBoard } from '../ringtone-board'
import { Panel, ServeBand, WallpaperGrid } from '../ui'

export const Route = createFileRoute('/')({ component: Home })

const more = 'mt-auto block w-fit rounded-full bg-ink px-4 py-1 font-display text-sm text-yellow uppercase italic hover:bg-blue-dark'

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
            <span className="sticker absolute -top-4 -right-3 grid size-14 rotate-12 place-items-center bg-red font-display text-xs text-white">
              NEW
            </span>
            <p className="font-headline text-2xl leading-tight">{quiz.title}</p>
            <p className="mt-2 text-sm font-bold">{quiz.questions.length} questions pour découvrir la star qui sommeille en toi !</p>
          </div>
          <div className="mt-4 rounded-2xl bg-ink p-4 text-white">
            <p className="font-display text-sm text-yellow uppercase">Question 1 : {quiz.questions[0].q}</p>
            <ul className="mt-2 grid gap-1 text-sm font-bold">
              {quiz.questions[0].a.map(([label], i) => (
                <li key={label}>
                  <span className="text-orange">{'ABCD'[i]}.</span> {label}
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
    </>
  )
}
