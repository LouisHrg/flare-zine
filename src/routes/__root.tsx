import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import css from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'FlareZine — fonds d’écran, sonneries & quiz' },
    ],
    links: [
      { rel: 'stylesheet', href: css },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Luckiest+Guy&family=Roboto+Condensed:wght@400;700&display=swap',
      },
    ],
  }),
  shellComponent: Shell,
  component: Layout,
})

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

const NAV = [
  { to: '/fonds-ecran', label: 'Fonds d’écran' },
  { to: '/sonneries', label: 'Sonneries' },
  { to: '/quiz', label: 'Quiz' },
] as const

function Layout() {
  return (
    <div className="min-h-dvh p-2 sm:p-6">
      <div className="page-bg mx-auto max-w-6xl overflow-hidden rounded-2xl border-[6px] border-frame shadow-[0_10px_30px_#0006]">
        <header className="m-3 rounded-[2.5rem] border-4 border-ink bg-cream px-4 py-4 text-center sm:m-4">
          <p className="font-headline text-xl leading-tight sm:text-4xl">Un max de trucs pour ton téléphone portable !</p>
          <Link
            to="/"
            className="outline-text mt-1 inline-block font-display text-4xl text-orange italic [text-shadow:0_5px_0_var(--color-yellow)] sm:text-6xl"
          >
            FlareZine
          </Link>
          <nav className="mt-3 flex flex-wrap justify-center gap-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full border-2 border-ink bg-gradient-to-b from-[#ff4b3a] to-red-dark px-4 py-1 font-display text-sm text-white uppercase italic hover:brightness-110 [&.active]:from-yellow [&.active]:to-orange [&.active]:text-ink"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="px-3 pb-4 sm:px-4">
          <Outlet />
        </main>
        <footer className="bg-black/30 px-4 py-2 text-[10px] leading-tight text-white/80">
          Fonds d’écran et sonneries compatibles avec tous les navigateurs modernes. Mélodies du domaine public. Coût : 0,00 € TTC/min, sans
          abonnement, sans minitel (désolé). FlareZine N°1 — pour de faux, mais avec amour.
        </footer>
      </div>
    </div>
  )
}
