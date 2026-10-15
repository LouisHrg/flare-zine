import type { ReactNode } from 'react'
import { wallpapers } from './data'

// Red rounded tab title, as on 2000s ringtone ad pages
export function Pill({ children, as: Tag = 'h2', className = '' }: { children: ReactNode; as?: 'h1' | 'h2'; className?: string }) {
  return (
    <Tag
      className={`gloss outline-text mx-auto w-fit rounded-full border-4 border-white bg-gradient-to-b from-[#ff4b3a] to-red-dark px-5 py-1 text-center font-display text-xl text-white uppercase italic shadow-[0_3px_0_#0006] sm:text-2xl ${className}`}
    >
      {children}
    </Tag>
  )
}

const TONES = {
  orange: 'bg-gradient-to-b from-gold to-orange',
  blue: 'stripes-blue',
  red: 'bg-gradient-to-b from-red to-red-dark',
}

export function Panel({ title, tone = 'orange', as, children, className = '' }: { title: ReactNode; tone?: keyof typeof TONES; as?: 'h1' | 'h2'; children: ReactNode; className?: string }) {
  return (
    <section className={`mt-7 flex flex-col rounded-3xl px-3 pb-4 ring-4 ring-black/25 sm:px-4 ${TONES[tone]} ${className}`}>
      <Pill as={as} className="relative -top-5 -mb-2">
        {title}
      </Pill>
      {children}
    </section>
  )
}

// Black band with the "how to" ovals
export function ServeBand() {
  return (
    <div className="mt-6 grid items-center gap-3 rounded-2xl bg-ink p-3 md:grid-cols-[1fr_1.4fr_1fr]">
      <ol className="list-inside list-decimal rounded-[50%] bg-gradient-to-b from-gold to-orange px-8 py-3 text-sm leading-tight font-bold">
        <li>Choisis ton fond ou ta sonnerie</li>
        <li>Note le code</li>
        <li>Clique dessus, c’est tout !</li>
      </ol>
      <p className="rounded-[50%] border-4 border-white bg-ink px-6 py-3 text-center text-white">
        <span className="block font-display text-sm uppercase">Logos & sonneries</span>
        <span className="block font-display text-3xl text-yellow italic sm:text-4xl">Tape le code</span>
        <span className="block font-display text-sm uppercase">Servez-vous !</span>
      </p>
      <p className="rounded-[50%] bg-blue px-6 py-3 text-center font-bold leading-tight text-white">
        Disponible aussi
        <br />
        par minitel :
        <span className="block font-display text-yellow">3617 FLAREZINE</span>
      </p>
    </div>
  )
}

export function WallpaperGrid({ items = wallpapers, cols = 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6' }: { items?: typeof wallpapers; cols?: string }) {
  return (
    <ul className={`grid gap-3 ${cols}`}>
      {items.map((w, i) => (
        <li key={w.code} className="relative text-center">
          {i < 2 && (
            <span className="sticker absolute -top-3 -right-3 z-10 grid size-12 animate-wiggle place-items-center bg-yellow font-display text-[10px] text-red">
              HOT!
            </span>
          )}
          <div
            role="img"
            aria-label={`Fond d’écran ${w.title}`}
            className="aspect-[9/16] rounded-lg border-4 border-white shadow-[0_0_0_2px_var(--color-ink),4px_4px_0_2px_#0005]"
            style={{ background: w.bg }}
          />
          <p className="mt-1 font-display text-sm">♥ {w.code} ♥</p>
          <p className="text-xs leading-tight font-bold">{w.title}</p>
        </li>
      ))}
    </ul>
  )
}

// Placeholder "photo": emoji on a gradient, framed like the wallpapers
export function Thumb({ emoji, bg, className = '' }: { emoji: string; bg: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={`grid place-items-center rounded-2xl border-4 border-white shadow-[0_0_0_2px_var(--color-ink),4px_4px_0_2px_#0005] ${className}`}
      style={{ background: bg }}
    >
      <span className="drop-shadow-[2px_2px_0_#0006]">{emoji}</span>
    </div>
  )
}

export const stars = (level: number) => '★'.repeat(level) + '☆'.repeat(3 - level)

export const backLink = 'gloss mb-4 inline-block rounded-full bg-ink px-3 py-1 font-display text-xs text-yellow uppercase italic'
