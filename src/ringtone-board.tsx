import { useEffect, useRef, useState } from 'react'
import { ringtoneCategories, type Ringtone } from './data'

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const freq = (note: string) => {
  const [, name, octave] = note.match(/^([A-G]#?)(\d)$/)!
  return 440 * 2 ** ((NOTES.indexOf(name) - 9) / 12 + (Number(octave) - 4))
}

// Square wave = authentic monophonic phone beep. Returns duration in seconds.
function play(ctx: AudioContext, notes: string, tempo: number) {
  let t = ctx.currentTime
  for (const token of notes.split(' ')) {
    const [note, len = '1'] = token.split(':')
    const dur = Number(len) * tempo
    if (note !== '-') {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'square'
      osc.frequency.value = freq(note)
      gain.gain.value = 0.08
      osc.connect(gain).connect(ctx.destination)
      osc.start(t)
      osc.stop(t + dur * 0.9)
    }
    t += dur
  }
  return t - ctx.currentTime
}

// Red "hit-parade" board: columns of codes, click a line to hear it
export function RingtoneBoard() {
  const ctx = useRef<AudioContext>(null)
  const timer = useRef<number>(undefined)
  const [playing, setPlaying] = useState<string | null>(null)

  const stop = () => {
    ctx.current?.close()
    ctx.current = null
    clearTimeout(timer.current)
    setPlaying(null)
  }
  useEffect(() => stop, [])

  const toggle = (r: Ringtone) => {
    const wasPlaying = playing === r.code
    stop()
    if (wasPlaying) return
    ctx.current = new AudioContext()
    const duration = play(ctx.current, r.notes, r.tempo)
    setPlaying(r.code)
    timer.current = window.setTimeout(stop, duration * 1000)
  }

  return (
    <div className="grid gap-4 rounded-2xl bg-gradient-to-b from-red to-red-dark p-3 ring-4 ring-black/25 sm:grid-cols-2 lg:grid-cols-4">
      {ringtoneCategories.map((cat) => (
        <section key={cat.title}>
          <h3 className="rounded-t-xl bg-gradient-to-b from-gold to-orange px-2 py-0.5 font-display text-sm uppercase italic">{cat.title}</h3>
          <ul className="border-t-2 border-gold/60 pt-1">
            {cat.items.map((r) => {
              const on = playing === r.code
              return (
                <li key={r.code}>
                  <button
                    type="button"
                    onClick={() => toggle(r)}
                    aria-pressed={on}
                    aria-label={`${on ? 'Arrêter' : 'Écouter'} ${r.title}, code ${r.code}`}
                    className={`flex w-full items-baseline gap-2 px-1 text-left leading-snug hover:bg-black/25 focus-visible:bg-black/25 ${on ? 'bg-black/40' : ''}`}
                  >
                    <span className="font-display text-xs text-yellow">{r.code}</span>
                    <span className="flex-1 text-sm font-bold text-white">{r.title}</span>
                    <span aria-hidden className="text-xs text-yellow">{on ? '■' : '▶'}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </div>
  )
}
