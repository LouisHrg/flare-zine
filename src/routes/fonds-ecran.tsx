import { createFileRoute } from '@tanstack/react-router'
import { Panel, WallpaperGrid } from '../ui'

export const Route = createFileRoute('/fonds-ecran')({ component: Wallpapers })

function Wallpapers() {
  return (
    <Panel as="h1" title="Big fonds d’écran">
      <p className="mb-3 text-center font-bold">Tape la réf. et ça s’installe tout seul !*</p>
      <WallpaperGrid />
      <p className="mt-4 text-xs">*Pour de faux, c’est gratuit. On est en 2026.</p>
    </Panel>
  )
}
