import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'

const tagStyles = {
  Novo: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Melhoria: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
  Correção: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
}

const releases = [
  {
    version: 'v2.4',
    date: 'Junho de 2026',
    title: 'Projetos de múltiplas etapas ainda mais inteligentes',
    items: [
      {
        tag: 'Novo',
        text: 'Modo Projeto: o ThCerebrer agora divide grandes objetivos em fases, com relatórios de progresso automáticos.',
      },
      {
        tag: 'Novo',
        text: 'Aprovações em lote — revise e aprove várias ações do agente de uma só vez.',
      },
      {
        tag: 'Melhoria',
        text: 'Respostas de e-mail 40% mais rápidas, com melhor detecção do seu tom de voz.',
      },
    ],
  },
  {
    version: 'v2.3',
    date: 'Maio de 2026',
    title: 'Automações com supervisão flexível',
    items: [
      {
        tag: 'Novo',
        text: 'Níveis de autonomia por tarefa: escolha entre aprovar tudo, aprovar só ações sensíveis ou automação total.',
      },
      {
        tag: 'Melhoria',
        text: 'Pesquisas agora citam as fontes utilizadas em cada resumo.',
      },
      {
        tag: 'Correção',
        text: 'Corrigido conflito de fusos horários em agendamentos internacionais.',
      },
    ],
  },
  {
    version: 'v2.2',
    date: 'Abril de 2026',
    title: 'Integrações ampliadas e espaços de equipe',
    items: [
      {
        tag: 'Novo',
        text: 'Espaços de trabalho compartilhados para equipes no plano Empresarial.',
      },
      {
        tag: 'Novo',
        text: 'Integração nativa com as principais suítes de calendário e armazenamento em nuvem.',
      },
      {
        tag: 'Melhoria',
        text: 'Organização de arquivos ficou mais precisa com detecção automática de duplicados.',
      },
    ],
  },
  {
    version: 'v2.1',
    date: 'Março de 2026',
    title: 'Análises profundas de documentos',
    items: [
      {
        tag: 'Novo',
        text: 'Envie relatórios, planilhas e PDFs extensos e receba conclusões acionáveis em minutos.',
      },
      {
        tag: 'Melhoria',
        text: 'Novo painel de atividades mostra tudo o que o agente fez por você no dia.',
      },
      {
        tag: 'Correção',
        text: 'Ajustes de acessibilidade na navegação por teclado.',
      },
    ],
  },
]

export default function Atualizacoes() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Atualizações"
            title="O ThCerebrer evolui toda semana"
            subtitle="Acompanhe as novidades, melhorias e correções mais recentes do seu agente."
          />
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="relative">
            {/* Linha vertical da timeline */}
            <div className="absolute left-4 top-2 bottom-2 hidden w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/20 to-transparent sm:block" />

            <div className="space-y-12">
              {releases.map((release, i) => (
                <Reveal key={release.version} delay={i * 0.08}>
                  <div className="relative sm:pl-14">
                    {/* Marcador da timeline */}
                    <span className="absolute left-2.5 top-2 hidden h-3 w-3 rounded-full bg-emerald-500 glow-emerald sm:block" />

                    <GlassCard className="p-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-display text-xl font-bold text-gradient-emerald">
                          {release.version}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-neutral-500">
                          {release.date}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-semibold text-white">
                        {release.title}
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {release.items.map((item) => (
                          <li key={item.text} className="flex items-start gap-3">
                            <span
                              className={`mt-0.5 shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${tagStyles[item.tag]}`}
                            >
                              {item.tag}
                            </span>
                            <span className="text-sm leading-relaxed text-neutral-300">
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
