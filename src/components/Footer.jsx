import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Produto',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Planos', to: '/planos' },
      { label: 'Atualizações', to: '/atualizacoes' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Central de Ajuda', to: '/ajuda' },
      { label: 'Status do serviço', to: '/ajuda' },
      { label: 'Fale conosco', to: '/ajuda' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', to: '/' },
      { label: 'Privacidade', to: '/' },
      { label: 'Termos de uso', to: '/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-900">
      {/* Brilho esmeralda sutil no topo do rodapé */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 font-display text-sm font-bold text-ink-950">
                T
              </span>
              <span className="font-display text-lg font-semibold text-white">ThCerebrer</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              O agente de inteligência artificial que cuida das suas tarefas — das mais simples às
              mais complexas — para você focar no que importa.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-neutral-400">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-neutral-500 transition-colors hover:text-emerald-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} ThCerebrer. Todos os direitos reservados.
          </p>
          <p className="text-xs text-neutral-600">
            Feito com inteligência — <span className="text-emerald-500">e um toque humano</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
