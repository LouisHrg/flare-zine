import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { quiz, type Star } from '../data'
import { Panel } from '../ui'

export const Route = createFileRoute('/quiz')({ component: Quiz })

const btn = 'rounded-full border-2 border-ink px-4 py-2 font-bold'

function Quiz() {
  const [answers, setAnswers] = useState<Star[]>([])
  const step = answers.length
  const done = step === quiz.questions.length

  const winner = done
    ? (Object.entries(
        answers.reduce<Record<string, number>>((acc, s) => ({ ...acc, [s]: (acc[s] ?? 0) + 1 }), {}),
      ).sort((a, b) => b[1] - a[1])[0][0] as Star)
    : null

  return (
    <Panel as="h1" title="Le test" tone="blue" className="mx-auto max-w-2xl">
      <div className="rounded-2xl bg-cream p-4 sm:p-6" aria-live="polite">
        <p className="text-center font-headline text-2xl leading-tight sm:text-3xl">{quiz.title}</p>

        {winner ? (
          <div className="mt-4 text-center">
            <p className="font-bold">Tu es…</p>
            <p className="mt-1 font-display text-3xl text-red italic">{quiz.results[winner].title}</p>
            <p className="mt-3">{quiz.results[winner].text}</p>
            <button type="button" onClick={() => setAnswers([])} className={`${btn} mt-6 bg-ink text-yellow`}>
              Recommencer
            </button>
          </div>
        ) : (
          <>
            <p className="mt-4 font-display text-sm text-red uppercase">
              Question {step + 1}/{quiz.questions.length}
            </p>
            <p className="text-xl font-bold">{quiz.questions[step].q}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {quiz.questions[step].a.map(([label, star]) => (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => setAnswers([...answers, star])}
                    className={`${btn} w-full bg-gradient-to-b from-gold to-orange text-left hover:brightness-110 focus-visible:brightness-110`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </Panel>
  )
}
