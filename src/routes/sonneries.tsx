import { createFileRoute } from '@tanstack/react-router'
import { RingtoneBoard } from '../ringtone-board'
import { Pill, ServeBand } from '../ui'

export const Route = createFileRoute('/sonneries')({ component: Ringtones })

function Ringtones() {
  return (
    <>
      <Pill as="h1" className="mb-4">Hits de la rentrée</Pill>
      <p className="mb-4 text-center font-bold">Clique sur un titre pour l’écouter. 100% monophonique, 100% culte.</p>
      <RingtoneBoard />
      <ServeBand />
    </>
  )
}
